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

// Domain
export const SITE_URL = "https://www.drpauloaraujo.com.br";

// Brand Assets
export const BRAND_LOGO_WORDMARK_INVERTED = "/logo-gray.png";
export const BRAND_LOGO_HEADER = "/logo-lettering-cropped.png";
export const DOCTOR_PROFILE_IMAGE =
  "/pics/doutor-paulo-araujo-frente-wide.jpeg";

// Doctor Information
export const DOCTOR_NAME = "Paulo Araújo";
export const DOCTOR_FULL_NAME = "Paulo Victor de Souza Araújo";
export const DOCTOR_CRM = "CRM/PR 37567";
export const DOCTOR_RQE = "RQE 29967";
export const DOCTOR_TITLE = "Neurocirurgião";
export const DOCTOR_SUBTITLE = "Cirurgia de Coluna, Nervo e Reabilitação";
export const DOCTOR_HEADLINE = `${DOCTOR_NAME} | ${DOCTOR_TITLE} | ${DOCTOR_SUBTITLE}`;
export const DOCTOR_SHORT_BIO =
  "Médico graduado pela Universidade Federal de Campina Grande (2015). Neurocirurgião com residência pelo Hospital Universitário Cajuru - PR (2022), fellowship em nervo periférico pela Rede SARAH (2022) e mestrando em Medicina (Clínica Cirúrgica) pela UFPR. Atua com foco em cirurgia de coluna, nervo periférico e reabilitação, especialmente em pacientes com lesão medular e plexo braquial.";

export const DOCTOR_CREDENTIALS = [
  "Especialista em nervo periférico e reabilitação (Rede SARAH)",
  "Preceptor de nervo periférico e coluna no Hospital Universitário Cajuru - PR",
  "Chefe do grupo de nervos periféricos e membro do grupo de coluna",
];

export const DOCTOR_REGISTRATION_BADGES = [DOCTOR_CRM, DOCTOR_RQE];

export const DOCTOR_PROFILE_URL =
  "https://hospitalmarcelino.com.br/medicos/paulo-victor-de-souza-araujo/";

// Website Navigation
export const NAV_ITEMS: NavigationItem[] = [
  { href: "#about", label: "Sobre" },
  { href: "#expertise", label: "Especialidades" },
  { href: "#background", label: "Formação" },
  { href: "#publications", label: "Produções" },
  { href: "#contact", label: "Contato" },
];

// Expertise
export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    id: "spine",
    title: "Cirurgia de Coluna",
    description:
      "Avaliação e tratamento de doenças degenerativas, traumáticas e compressivas da coluna, com tomada de decisão baseada em critérios clínicos e funcionais.",
  },
  {
    id: "peripheral-nerves",
    title: "Nervo Periférico",
    description:
      "Diagnóstico e abordagem microcirúrgica de neuropatias periféricas, síndromes compressivas e lesões traumáticas, incluindo casos de plexo braquial.",
  },
  {
    id: "rehabilitation",
    title: "Reabilitação Neurocirúrgica",
    description:
      "Atuação focada em recuperação funcional e planejamento terapêutico para pacientes com lesão medular e déficits neurológicos complexos.",
  },
];

// Academic Background
export const ACADEMIC_MILESTONES: AcademicMilestone[] = [
  {
    id: "master-ufpr",
    period: "2022 - Atual",
    title: "Mestrado em Medicina (Clínica Cirúrgica)",
    institution: "Universidade Federal do Paraná (UFPR)",
    summary:
      "Pesquisa sobre efeitos do eletrodo cerebral profundo em sintomas urinários nos pacientes com doença de Parkinson.",
  },
  {
    id: "residency-cajuru",
    period: "2017 - 2022",
    title: "Residência Médica em Neurocirurgia",
    institution: "Hospital Universitário Cajuru - PR",
    summary:
      "Formação em neurocirurgia com atuação em procedimentos de urgência, trauma e cirurgias eletivas.",
  },
  {
    id: "fellowship-sarah",
    period: "2022",
    title: "Fellowship em Nervo Periférico",
    institution: "Rede SARAH",
    summary:
      "Aprofundamento técnico em tratamento cirúrgico e reabilitação de lesões nervosas periféricas.",
  },
  {
    id: "graduation-ufcg",
    period: "2009 - 2015",
    title: "Graduação em Medicina",
    institution: "Universidade Federal de Campina Grande (UFCG)",
    summary:
      "Trabalho de conclusão: Amitriptilina como droga preemptiva na dor do membro fantasma após amputação.",
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
      "Atendimento com foco em cirurgia de coluna, nervo periférico e planejamento de reabilitação.",
  },
  {
    id: "role-cajuru",
    period: "Atual",
    title: "Preceptor e Neurocirurgião",
    institution: "Hospital Universitário Cajuru / PUCPR",
    summary:
      "Preceptoria em nervo periférico e coluna, com assistência em casos de alta complexidade.",
  },
  {
    id: "role-cnpq",
    period: "2013 - 2014",
    title: "Pesquisador Bolsista",
    institution: "CNPq",
    summary:
      "Participação em ensaio clínico randomizado sobre dor do membro fantasma após amputação.",
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
    id: "cajuru",
    name: "Hospital Universitário Cajuru",
    address: "Av. São José, 300 - Cristo Rei",
    city: "Curitiba",
    state: "PR",
    phone: "(41) 3271-1212",
  },
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
    id: "congress-2019-abn",
    category: "congress",
    title: "XVIII Congresso da Academia Brasileira de Neurocirurgia",
    year: 2019,
    location: "Brasil",
    event: "Participação em congresso",
  },
  {
    id: "congress-2012-perinatologia",
    category: "congress",
    title: "21º Congresso Brasileiro de Perinatologia",
    year: 2012,
    location: "Brasil",
    event: "Participação em congresso",
  },
  {
    id: "congress-2012-infectologia",
    category: "congress",
    title: "4º Congresso Norte/Nordeste de Infectologia",
    year: 2012,
    location: "Brasil",
    event: "Participação em congresso",
  },
  {
    id: "congress-2011-genetica",
    category: "congress",
    title: "Paciente com deleção (6)(p23): relato de caso",
    year: 2011,
    location: "Brasil",
    event: "II Congresso Norte Nordeste de Genética Médica",
  },
  {
    id: "academic-2014-antibioticoterapia",
    category: "academic",
    title: "I Módulo do Curso de Antibioticoterapia",
    year: 2014,
    location: "Brasil",
    event: "Organização de evento",
  },
  {
    id: "academic-2013-dermatologia",
    category: "academic",
    title: "I Curso de Afecções Dermatológicas na Infância",
    year: 2013,
    location: "Brasil",
    event: "Organização de evento",
  },
  {
    id: "scientific-2014-amitriptilina",
    category: "scientific",
    title:
      "Amitriptilina como droga preemptiva na dor do membro fantasma após amputação",
    year: 2014,
    location: "UFCG",
    event: "Apresentação de trabalho / congresso",
  },
  {
    id: "scientific-2011-revista",
    category: "scientific",
    title: "Paciente com deleção (6)(p23): relato de caso",
    year: 2011,
    location: "Revista Saúde & Ciência",
    event: "Produção bibliográfica",
  },
];

export const LATTES_DATA_NOTE =
  "Informações coletadas do Lattes em 28/07/2024.";

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
