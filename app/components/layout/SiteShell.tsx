import type { ReactNode } from "react";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import WhatsAppFloatButton from "@/app/components/conversion/WhatsAppFloatButton";

interface SiteShellProps {
  children: ReactNode;
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" className="subpage-main">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
