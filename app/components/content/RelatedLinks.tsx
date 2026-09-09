import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  href: string;
  title: string;
  /** What the reader is about to open: an area, a condition, an article. */
  eyebrow: string;
}

export default function RelatedLinks({ items }: { items: RelatedLink[] }) {
  if (!items.length) return null;
  return (
    <div className="related-grid">
      {items.map((item) => (
        <Link className="related-link" key={item.href} href={item.href}>
          <span>
            <span className="related-link-eyebrow">{item.eyebrow}</span>
            <span className="related-link-title">{item.title}</span>
          </span>
          <span aria-hidden className="related-link-arrow">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </Link>
      ))}
    </div>
  );
}
