import type { ClinicProfile } from "@/content/types";

/**
 * Facility facts supplied by the client. Everything here is public information
 * published by the clinic itself; nothing is inferred.
 */
export const CLINICS: ClinicProfile[] = [
  {
    slug: "protrauma",
    publicationState: "published",
    indexable: true,
    name: "Clínica Protrauma",
    tagline: "Clínica de ortopedia e traumatologia em Campo Grande - MS",
    description:
      "A Clínica Protrauma reúne atendimento em ortopedia e traumatologia para adultos e crianças em Campo Grande. É onde o Dr. Paulo Araújo realiza as consultas de neurocirurgia, com estrutura para avaliação clínica e acompanhamento.",
    streetAddress: "R. 15 de Novembro, 2808",
    neighborhood: "Jardim dos Estados",
    city: "Campo Grande",
    state: "MS",
    postalCode: "79020-300",
    phone: "(67) 3302-0038",
    whatsappNumber: "556799120676",
    whatsappLabel: "(67) 99912-0676",
    websiteUrl: "https://www.protrauma.net/",
    mapUrl: "https://maps.app.goo.gl/WMUmV3pFGt4jbq768",
    mapEmbedUrl:
      "https://www.google.com/maps?q=R.%2015%20de%20Novembro%2C%202808%20-%20Jardim%20dos%20Estados%2C%20Campo%20Grande%20-%20MS%2C%2079020-300&output=embed",
    openingHours: [
      { days: "Segunda a sexta", hours: "07:00 às 19:00" },
      { days: "Sábado e domingo", hours: "Fechado" },
    ],
    openingHoursNote:
      "Os horários podem ser diferentes em feriados. Consultas acontecem mediante agendamento.",
    openingHoursSpecification: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    socialLinks: [
      { label: "Instagram", href: "https://www.instagram.com/protraumacampogrande/" },
      { label: "Facebook", href: "https://www.facebook.com/protrauma/" },
    ],
    imageSrc: "/pics/clinica-protrauma.webp",
    imageAlt: "Fachada da Clínica Protrauma, em Campo Grande - MS",
    lastModified: "2026-09-06",
  },
];

/** Clinics with a real page: the route builds exactly this set. */
