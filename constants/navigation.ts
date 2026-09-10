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
