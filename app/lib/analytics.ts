/**
 * The WhatsApp link as reported to analytics: origin and path only. The query
 * carries the prefilled message, which a visitor may have been sent from a
 * page about their condition, so it never leaves the browser in an event.
 */
export function sanitizeWhatsAppUrl(href: string) {
  try {
    const url = new URL(href);
    return `${url.origin}${url.pathname}`;
  } catch {
    // Not an absolute URL (e.g. the `#contact` fallback): drop the query.
    return href.split("?")[0];
  }
}
