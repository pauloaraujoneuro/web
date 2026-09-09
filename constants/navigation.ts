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
 * The footer carries two entries the header does not: the clinic page, which
 * still needs a site-wide link to be found, and the contact anchor, whose job
 * in the header was already done by the appointment button beside it.
 */
export const FOOTER_NAV_ITEMS: NavigationItem[] = [
  ...NAV_ITEMS,
  { href: "/clinica/protrauma", label: "Clínica Protrauma" },
  { href: "/#contato", label: "Contato" },
];
