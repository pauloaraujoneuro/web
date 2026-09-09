import Link from "next/link";

export interface SectionTocItem {
  id: string;
  text: string;
  /** Sub-headings, rendered one step in from their parent section. */
  indented?: boolean;
}

/**
 * The in-page index shared by treatment pages and articles. It renders nothing
 * below two entries, where a table of contents costs more than it gives.
 */
export default function SectionToc({
  items,
  label = "Nesta página",
}: {
  items: SectionTocItem[];
  label?: string;
}) {
  if (items.length < 2) return null;
  return (
    <aside className="article-toc">
      <span>{label}</span>
      <nav aria-label={label}>
        {items.map((item) => (
          <Link key={item.id} href={`#${item.id}`} className={item.indented ? "pl-3" : ""}>
            {item.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
