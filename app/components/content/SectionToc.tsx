import Link from "next/link";

export interface SectionTocItem {
  id: string;
  text: string;
}

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
          <Link key={item.id} href={`#${item.id}`}>
            {item.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
