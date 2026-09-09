import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Navegação estrutural" className="breadcrumb-scroll">
      <ol className="flex min-w-max items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
            {index > 0 ? <ChevronRight aria-hidden size={15} strokeWidth={1.5} /> : null}
            {item.href ? (
              <Link className="flex min-h-11 items-center hover:text-primary" href={item.href}>
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-primary">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
