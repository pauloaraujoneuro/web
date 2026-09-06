import Link from "next/link";
import type { BlogPost } from "@/app/lib/content-types";

export default function ArticleAside({ post }: { post: BlogPost }) {
  if (post.headings.length < 2) return null;
  return (
    <aside className="article-toc">
      <span>Nesta leitura</span>
      <nav aria-label="Índice do artigo">
        {post.headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={heading.level === 3 ? "pl-3" : ""}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
