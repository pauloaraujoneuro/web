import type { NavigationItem } from "@/constants/types";

// Website Navigation
export const NAV_ITEMS: NavigationItem[] = [
  { href: "/sobre", label: "Sobre" },
  { href: "/tratamentos", label: "Tratamentos" },
  { href: "/blog", label: "Blog" },
  { href: "/perguntas-frequentes", label: "Perguntas" },
  { href: "/locais-de-atendimento", label: "Atendimento" },
  { href: "/#contato", label: "Contato" },
];

/**
 * The footer carries one extra entry: the clinic page has no place in the
 * header, but needs a site-wide link to be found.
 */
export const FOOTER_NAV_ITEMS: NavigationItem[] = [
  ...NAV_ITEMS.slice(0, -1),
  { href: "/clinica-protrauma", label: "Clínica Protrauma" },
  NAV_ITEMS[NAV_ITEMS.length - 1],
];
