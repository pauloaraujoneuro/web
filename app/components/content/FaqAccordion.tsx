import type { FaqItem } from "@/app/lib/content-types";

export default function FaqAccordion({
  items,
  theme = "light",
  currentPath,
}: {
  items: FaqItem[];
  theme?: "light" | "dark";
  /** Suppresses a related link that points back at the current page. */
  currentPath?: string;
}) {
  return (
    <div className={`faq-list faq-list-${theme}`}>
      {items.map((item) => (
        <details className="subpage-faq" key={item.id}>
          <summary>
            <span>{item.question}</span>
            <span aria-hidden className="faq-plus">+</span>
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
            {item.relatedHref && item.relatedHref !== currentPath ? (
              <a href={item.relatedHref}>Ver informações relacionadas</a>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
