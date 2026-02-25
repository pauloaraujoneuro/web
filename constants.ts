// ==========================================
// DR. PAULO ARAUJO - WEBSITE CONSTANTS
// ==========================================

export type PublicationCategory = "congress" | "academic" | "scientific";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface PublicationItem {
  id: string;
  category: PublicationCategory;
  title: string;
  year: number;
  location: string;
  event: string;
  link?: string;
}

export interface AcademicMilestone {
  id: string;
  period: string;
  title: string;
  institution: string;
  summary: string;
  details?: string[];
}

export interface ProfessionalRole {
  id: string;
  period: string;
  title: string;
  institution: string;
  summary: string;
}

export interface ServiceLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
}

export interface CitySchedule {
  id: string;
  city: string;
  state: string;
  location: string;
  cadence: string;
  availability: string;
  note: string;
}

// Domain
export const SITE_URL = "https://www.drpauloaraujo.com.br";

// Brand Assets
export const BRAND_LOGO_WORDMARK_INVERTED = "/logo-gray.png";
export const BRAND_LOGO_HEADER = "/logo-lettering-cropped.webp";
export const DOCTOR_PROFILE_IMAGE = "/pics/doutor-paulo-araujo-terno.webp";
export const DOCTOR_PROFILE_IMAGE_FRONT =
  "/pics/doutor-paulo-araujo-frente.jpeg";
export const DOCTOR_PROFILE_IMAGE_FRONT_WIDE =
  "/pics/doutor-paulo-araujo-frente-wide.jpeg";

// Doctor Information
export const DOCTOR_NAME = "Paulo Araújo";
export const DOCTOR_FULL_NAME = "Paulo Victor de Souza Araújo";
export const DOCTOR_CRM = "CRM-PR 37567";
export const DOCTOR_RQE = "RQE 29967";
export const DOCTOR_TITLE = "Neurocirurgião";
export const DOCTOR_SUBTITLE = "Cirurgia de Coluna, Nervo e Reabilitação";
export const DOCTOR_HEADLINE = `${DOCTOR_NAME} | ${DOCTOR_TITLE} | ${DOCTOR_SUBTITLE}`;
export const DOCTOR_SHORT_BIO =
  "Chefe do serviço de nervo periférico e preceptor do serviço de coluna do Hospital Universitário Cajuru, com fellowship em nervo periférico pela Rede SARAH e mestrado em medicina cirúrgica pela UFPR. Atua com foco em cirurgia de nervo periférico, cirurgia de coluna e reabilitação neurocirúrgica, com atenção especial a pacientes tetraplégicos e com lesões de plexo braquial.";

export const DOCTOR_CREDENTIALS = [
  "Chefe do serviço de nervo periférico e preceptor do serviço de coluna na residência de neurocirurgia do Hospital Universitário Cajuru, Curitiba, PR",
  "Mestrado em Medicina Cirúrgica pela UFPR, Curitiba, PR",
  "Fellowship em nervo periférico pela Rede SARAH, Brasília, DF",
];

export const DOCTOR_REGISTRATION_BADGES = [DOCTOR_CRM, DOCTOR_RQE];

export const DOCTOR_PROFILE_URL =
  "https://hospitalmarcelino.com.br/medicos/paulo-victor-de-souza-araujo/";

// Website Navigation
export const NAV_ITEMS: NavigationItem[] = [
  { href: "#about", label: "Sobre" },
  { href: "#expertise", label: "Especialidades" },
  { href: "#background", label: "Formação" },
  { href: "#publications", label: "Publicações" },
  { href: "#contact", label: "Contato" },
];

// Expertise
export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: "peripheral-nerves",
    title: "Nervo Periférico",
    description:
      "Foco em cirurgia de reconstrução nervosa para ganho funcional em lesões periféricas complexas.",
    highlights: [
      "Reconstrução e enxerto nervoso para ganho de movimentos em pacientes com lesão de plexo braquial e lesões de nervos nos braços e pernas.",
      "Cirurgia de transferência nervosa para ganho de movimentos em pacientes com tetraplegia e tetraparesia.",
      "Tratamento de casos complexos de síndromes compressivas, como túnel do carpo, síndrome cubital e túnel do tarso.",
    ],
  },
  {
    id: "spine",
    title: "Cirurgia de Coluna",
    description:
      "Tratamento cirúrgico de patologias traumáticas e compressivas com foco em estabilidade e descompressão neural.",
    highlights: [
      "Tratamento de fraturas complexas para estabilização com uso de parafusos.",
      "Descompressão de nervos na coluna com uso de microscópio cirúrgico.",
      "Tratamento de hérnia de disco, estenose de canal e mielopatia cervical.",
    ],
  },
  {
    id: "rehabilitation",
    title: "Reabilitação Neurocirúrgica",
    description:
      "Reabilitação orientada para ganho de movimentos e retorno funcional no pós-operatório e em lesões neurológicas crônicas.",
    highlights: [
      "Treinamento com foco em ganho de movimentos e funcionalidade, com orientações e uso de órteses.",
    ],
  },
];

// Academic Background
export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    id: "master-ufpr",
    period: "2022",
    title: "Mestrado em Clínica Cirúrgica",
    institution: "Universidade Federal do Paraná (UFPR), Curitiba, PR",
    summary: "Foco em formação cirúrgica e aprofundamento em neurocirurgia.",
  },
  {
    id: "residency-huc",
    period: "2017 - 2022",
    title: "Especialização - Residência médica em Neurocirurgia",
    institution: "Hospital Universitário Cajuru (HUC), Curitiba, PR",
    summary:
      "Formação prática e técnica em neurocirurgia durante o programa de residência médica.",
  },
  {
    id: "fellowship-sarah",
    period: "2022 - 2023",
    title: "Especialização (Fellowship) em Nervo Periférico",
    institution: "Rede SARAH de Hospitais de Reabilitação, Brasília, DF",
    summary:
      "Aprimoramento dedicado à cirurgia de nervo periférico e estratégias de reconstrução funcional.",
  },
  {
    id: "graduation-ufcg",
    period: "2009 - 2015",
    title: "Graduação em Medicina",
    institution:
      "Universidade Federal de Campina Grande (UFCG), Campina Grande, PB",
    summary:
      "Formação médica de base com preparação para atuação clínica e cirúrgica.",
  },
];

// Professional Roles
export const PROFESSIONAL_ROLES: ProfessionalRole[] = [
  {
    id: "role-marcelino",
    period: "Atual",
    title: "Neurocirurgião",
    institution: "Hospital São Marcelino Champagnat",
    summary:
      "Atendimento com foco em cirurgia de nervo periférico, coluna e reabilitação neurocirúrgica.",
  },
  {
    id: "role-sao-camilo",
    period: "Atual",
    title: "Neurocirurgião",
    institution: "Centro de Saúde São Camilo",
    summary:
      "Atendimento em União da Vitória com foco em avaliação e conduta especializada.",
  },
];

// Contact Information
export const CONTACT_EMAIL = "paraujomed@gmail.com";
export const CONTACT_PHONE = "(41) 3271-1212";

// WhatsApp Information
export const CONTACT_WHATSAPP_NUMBER = "5541999467571";
export const CONTACT_WHATSAPP_FORMATTED = "+55 41 99946-7571";
export const CONTACT_WHATSAPP_DEFAULT_TEXT =
  "Olá! Encontrei seu site e gostaria de agendar uma consulta.";
export const CONTACT_WHATSAPP_URL = CONTACT_WHATSAPP_NUMBER
  ? `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT_WHATSAPP_DEFAULT_TEXT)}`
  : "#contact";
export const CONTACT_WHATSAPP_LABEL = CONTACT_WHATSAPP_NUMBER
  ? CONTACT_WHATSAPP_FORMATTED
  : "WhatsApp pendente";

// Social Media
export const INSTAGRAM_URL = "https://www.instagram.com/drpauloaraujoneuro/";

// Service Locations
export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: "marcelino",
    name: "Hospital São Marcelino Champagnat",
    address: "Av. Presidente Affonso Camargo, 1399 - Cristo Rei",
    city: "Curitiba",
    state: "PR",
  },
  {
    id: "sao-camilo",
    name: "Centro de Saúde São Camilo",
    address: "Unidade de atendimento ambulatorial",
    city: "União da Vitória",
    state: "PR",
  },
];

export const CITY_SCHEDULES: CitySchedule[] = [
  {
    id: "schedule-curitiba",
    city: "Curitiba",
    state: "PR",
    location: "Hospital São Marcelino Champagnat",
    cadence: "Agenda semanal",
    availability: "Segunda a sexta, com horários agendados.",
    note: "Principal base de atendimento.",
  },
  {
    id: "schedule-uniao-da-vitoria",
    city: "União da Vitória",
    state: "PR",
    location: "Centro de Saúde São Camilo",
    cadence: "Agenda periódica",
    availability: "Datas específicas ao longo do mês.",
    note: "Consulte no WhatsApp as próximas datas disponíveis.",
  },
];

export const FIRST_APPOINTMENT_STEPS = [
  "Envie no WhatsApp sua cidade de preferência (Curitiba ou União da Vitória).",
  "Informe seu principal sintoma e há quanto tempo ele começou.",
  "Se tiver exames, leve ou envie antes para orientar a consulta.",
];

export const CONSULTATION_APPROACH_POINTS = [
  "Avaliação individual do quadro com foco em função e qualidade de vida.",
  "Definição clara de conduta: tratamento conservador, reabilitação ou cirurgia.",
  "Orientações objetivas para próximo passo, exames e expectativa de recuperação.",
];

// Clinic Information
export const CLINIC_NAME = "Neurocirurgia - Paulo Araújo";
export const CLINIC_ADDRESS_LINE = SERVICE_LOCATIONS[0].address;
export const CLINIC_ADDRESS_CITY = SERVICE_LOCATIONS[0].city;
export const CLINIC_ADDRESS_STATE = SERVICE_LOCATIONS[0].state;
export const CLINIC_ADDRESS_COUNTRY = "Brasil";
export const CLINIC_ADDRESS_FULL = `${SERVICE_LOCATIONS[0].name}, ${CLINIC_ADDRESS_LINE}, ${CLINIC_ADDRESS_CITY} - ${CLINIC_ADDRESS_STATE}, ${CLINIC_ADDRESS_COUNTRY}`;
export const CLINIC_MAP_EMBED_URL =
  "https://www.google.com/maps?q=Hospital+Sao+Marcelino+Champagnat+Curitiba&output=embed";

// Business Hours
export const CLINIC_HOURS = {
  weekdays: "Segunda a Sexta: atendimento com horário agendado",
  saturday: "Sábado: sob consulta",
  sunday: "Domingo: fechado",
};

// CTA Labels
export const CTA_PRIMARY = "Agendar consulta";
export const CTA_SECONDARY = "Ver local de atendimento";

// Publications / Works
export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "congress-2025-peripheral",
    category: "congress",
    title:
      "VIII Congresso Brasileiro de Cirurgia do Sistema Nervoso Periférico",
    year: 2025,
    location: "Gramado, RS",
    event:
      "12/06/2025 | Palestrante convidado | Tema: Outras síndromes compartimentais em membros superiores",
  },
  {
    id: "congress-2024-neuro",
    category: "congress",
    title: "XXXV Congresso Brasileiro de Neurocirurgia",
    year: 2024,
    location: "Belo Horizonte, MG",
    event:
      "03/08/2024 | Palestrante convidado | Tema: Paralisia Neonatal do Plexo Braquial",
  },
  {
    id: "congress-2023-peripheral",
    category: "congress",
    title: "VII Congresso Brasileiro de Cirurgia do Sistema Nervoso Periférico",
    year: 2023,
    location: "Belo Horizonte, MG",
    event:
      "16/11/2023 | Palestrante convidado | Tema: Transferência do nervo acessório para nervo supraescapular (via anterior x posterior)",
  },
];

export const LATTES_URL = "http://lattes.cnpq.br/5178813548582212";
export const LATTES_URL_LABEL = "Currículo Lattes";

// Structured Data Helper
export const CLINIC_INFO = {
  website: SITE_URL,
  doctor: {
    name: DOCTOR_NAME,
    fullName: DOCTOR_FULL_NAME,
    title: DOCTOR_TITLE,
    subtitle: DOCTOR_SUBTITLE,
    crm: DOCTOR_CRM,
    rqe: DOCTOR_RQE,
    registrations: DOCTOR_REGISTRATION_BADGES,
    credentials: DOCTOR_CREDENTIALS,
    profileUrl: DOCTOR_PROFILE_URL,
  },
  clinic: {
    name: CLINIC_NAME,
    address: CLINIC_ADDRESS_FULL,
    city: CLINIC_ADDRESS_CITY,
    state: CLINIC_ADDRESS_STATE,
    country: CLINIC_ADDRESS_COUNTRY,
    hours: CLINIC_HOURS,
    locations: SERVICE_LOCATIONS,
  },
  contact: {
    email: CONTACT_EMAIL,
    phone: CONTACT_PHONE,
    whatsappUrl: CONTACT_WHATSAPP_URL,
  },
  social: {
    instagram: INSTAGRAM_URL,
  },
};
