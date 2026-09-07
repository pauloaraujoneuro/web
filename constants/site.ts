import type { FaqSeed } from "@/content/types";
import type { AcademicMilestone, ExpertiseArea, ProfessionalRole } from "@/constants/types";

// Domain
export const SITE_URL = "https://www.pauloaraujoneuro.com.br";

// Brand Assets
export const BRAND_LOGO_WORDMARK_INVERTED = "/logo-lettering-cropped.webp";
export const BRAND_LOGO_HEADER = "/logo-lettering-cropped.webp";
export const DOCTOR_PROFILE_IMAGE = "/pics/doutor-paulo-araujo-terno.webp";
export const DOCTOR_PROFILE_IMAGE_FRONT =
  "/pics/doutor-paulo-araujo-frente.webp";
export const DOCTOR_PROFILE_IMAGE_FRONT_WIDE =
  "/pics/doutor-paulo-araujo-frente-wide.webp";

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
export const DOCTOR_SHORTER_BIO =
  "Atua com foco em cirurgia de nervo periférico, cirurgia de coluna e reabilitação neurocirúrgica, com atenção especial a pacientes tetraplégicos e com lesões de plexo braquial.";

export const DOCTOR_CREDENTIALS = [
  "Chefe do serviço de nervo periférico e preceptor do serviço de coluna na residência de neurocirurgia do Hospital Universitário Cajuru, Curitiba, PR",
  "Mestre em Medicina Cirúrgica pela UFPR, Curitiba, PR",
  "Fellowship em nervo periférico pela Rede SARAH, Brasília, DF",
];

export const DOCTOR_REGISTRATION_BADGES = [DOCTOR_CRM, DOCTOR_RQE];

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
    id: "role-protrauma",
    period: "Atual",
    title: "Neurocirurgião",
    institution: "Clínica Protrauma",
    summary:
      "Atendimento em Campo Grande com foco em cirurgia de nervo periférico, coluna e reabilitação neurocirúrgica.",
    status: "active",
    clinicSlug: "protrauma",
  },
  {
    id: "role-marcelino",
    period: "Atendimento anterior",
    title: "Neurocirurgião",
    institution: "Hospital São Marcelino Champagnat",
    summary:
      "Atuação prévia com foco em cirurgia de nervo periférico, coluna e reabilitação neurocirúrgica.",
    status: "deferred",
  },
  {
    id: "role-sao-camilo",
    period: "Atendimento anterior",
    title: "Neurocirurgião",
    institution: "Centro de Saúde São Camilo",
    summary:
      "Atuação prévia em União da Vitória com foco em avaliação e conduta especializada.",
    status: "deferred",
  },
];

// CTA Labels
export const CTA_PRIMARY = "Agendar consulta";
export const CTA_SECONDARY = "Ver local de atendimento";

export const FAQ_ITEMS: FaqSeed[] = [
  {
    id: "faq-primeira-consulta",
    question: "Como é a primeira consulta?",
    answer:
      "Na primeira consulta, fazemos uma avaliação neurológica completa, revisamos seus exames com calma e conversamos sobre o melhor caminho para o seu caso. Quando há indicação cirúrgica, explicamos cada etapa do tratamento e do acompanhamento pós-operatório.",
  },
  {
    id: "faq-cirurgia-quando",
    question: "Quando a cirurgia é indicada?",
    answer:
      "Isso depende do diagnóstico e do tempo de evolução dos sintomas. Em muitos casos, começamos com tratamento conservador, como fisioterapia e medicação. A cirurgia é indicada quando existe benefício real para sua recuperação e qualidade de vida.",
  },
  {
    id: "faq-exames-consulta",
    question: "Quais exames devo fazer ou levar?",
    answer:
      "Se possível, traga todos os exames relacionados ao problema, inclusive os antigos. Eles ajudam a entender a evolução do quadro. Se necessário, solicitamos exames complementares durante o atendimento.",
  },
  {
    id: "faq-agendamento",
    question: "Como faço para agendar a consulta?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp informado no site. Nossa equipe orienta os próximos passos e ajuda você a escolher o melhor horário e local de atendimento.",
  },
];
