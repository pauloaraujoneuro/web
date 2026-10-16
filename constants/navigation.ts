import type { NavigationItem } from "@/constants/types";

// Website Navigation
export const NAV_ITEMS: NavigationItem[] = [
  { href: "/sobre", label: "Sobre" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/blog", label: "Blog" },
  { href: "/perguntas-frequentes", label: "Dúvidas frequentes" },
  { href: "/locais-de-atendimento", label: "Atendimento" },
];

/**
 * The footer carries one entry the header does not: the clinic page, which
 * still needs a site-wide link to be found. Contact is not among them — the
 * footer's own contact column lists the phone, e-mail and social links.
 */
export const FOOTER_NAV_ITEMS: NavigationItem[] = [
  ...NAV_ITEMS,
  { href: "/clinica/protrauma", label: "INCC - Instituto de Nervos, Cérebro e Coluna" },
];

/**
 * The contact and privacy pages, in the footer's closing line where visitors
 * expect them. Contact sits here as a page link, not as the phone and e-mail
 * the contact column already lists.
 */
export const FOOTER_LEGAL_ITEMS: NavigationItem[] = [
  { href: "/contato", label: "Contato" },
  { href: "/privacidade", label: "Privacidade" },
];
