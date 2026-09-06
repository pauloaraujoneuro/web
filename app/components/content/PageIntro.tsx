import type { ReactNode } from "react";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <header className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}
