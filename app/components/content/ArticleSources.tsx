import type { ArticleSource } from "@/content/types";

const ArticleSources = ({ sources }: { sources?: ArticleSource[] }) => {
  if (!sources?.length) return null;

  return (
    <section aria-labelledby="referencias">
      <h2 id="referencias">Referências</h2>
      <ol>
        {sources.map((source) => {
          const details = [source.publisher, source.year].filter(Boolean).join(", ");
          return (
            <li key={`${source.title}-${source.url ?? ""}`}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.title}
                </a>
              ) : (
                source.title
              )}
              {details ? `. ${details}.` : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default ArticleSources;
