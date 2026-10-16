/**
 * Server-driven content negotiation between the two representations every page
 * has: HTML (the default) and Markdown for agents. Follows RFC 9110 §12.5.1 and
 * the acceptmarkdown.com parsing rules: rank by q, break ties by specificity,
 * then by the order the client listed the types (as acceptmarkdown.com's own
 * server does), never pick a type the client marked `q=0`, and treat a missing
 * or catch-all `Accept` as "no preference" so browsers and crawlers keep
 * getting HTML.
 */

export const HTML_MEDIA_TYPE = "text/html";
export const MARKDOWN_MEDIA_TYPE = "text/markdown";

export type Representation = "html" | "markdown";

interface AcceptEntry {
  type: string;
  subtype: string;
  q: number;
}

const PRODUCIBLE: Array<{ representation: Representation; type: string; subtype: string }> = [
  // Listed in default order: when one range matches both (`*/*`, `text/*`)
  // HTML wins, so nothing changes for clients that never asked for Markdown.
  { representation: "html", type: "text", subtype: "html" },
  { representation: "markdown", type: "text", subtype: "markdown" },
];

function parseQuality(params: string[]) {
  for (const param of params) {
    const [name, value] = param.split("=").map((part) => part.trim());
    if (name?.toLowerCase() !== "q") continue;
    const q = Number(value);
    // An unparseable or out-of-range q is treated as the default rather than
    // discarding the entry: the client clearly listed the type.
    return Number.isFinite(q) && q >= 0 && q <= 1 ? q : 1;
  }
  return 1;
}

export function parseAccept(header: string): AcceptEntry[] {
  return header.split(",").flatMap((raw) => {
    const [range, ...params] = raw.split(";");
    const [type, subtype] = range.trim().toLowerCase().split("/");
    if (!type || !subtype) return [];
    return [{ type, subtype, q: parseQuality(params) }];
  });
}

/** 2 = exact, 1 = `type/*`, 0 = `*\/*`, -1 = no match. */
function specificity(entry: AcceptEntry, type: string, subtype: string) {
  if (entry.type === type && entry.subtype === subtype) return 2;
  if (entry.type === type && entry.subtype === "*") return 1;
  if (entry.type === "*" && entry.subtype === "*") return 0;
  return -1;
}

/**
 * The representation to serve, or `null` when every representation is
 * unacceptable to the client (the caller answers 406).
 */
export function negotiateRepresentation(header: string | null | undefined): Representation | null {
  if (header == null || header.trim() === "") return "html";
  const entries = parseAccept(header);
  if (!entries.length) return "html";

  const scored = PRODUCIBLE.map((candidate) => {
    // The most specific matching range decides the q-value, so
    // `text/markdown;q=0, */*` still rejects Markdown.
    let best = { q: 0, specificity: -1, position: Number.POSITIVE_INFINITY };
    entries.forEach((entry, position) => {
      const level = specificity(entry, candidate.type, candidate.subtype);
      if (level > best.specificity) best = { q: entry.q, specificity: level, position };
    });
    return { ...candidate, ...best };
  });

  const ranked = scored.toSorted(
    (a, b) => b.q - a.q || b.specificity - a.specificity || a.position - b.position,
  );
  const [winner] = ranked;
  if (winner.q === 0) return null;
  return winner.representation;
}

/**
 * The internal route that renders Markdown. The proxy rewrites to it; it is
 * never a public URL of its own (direct requests are answered with a 404).
 */
export const MARKDOWN_ROUTE_PREFIX = "/markdown-variant";

export const MARKDOWN_CONTENT_TYPE = `${MARKDOWN_MEDIA_TYPE}; charset=utf-8`;
