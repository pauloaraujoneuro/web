/**
 * Contact and privacy pages: the pages a visitor — or an agent vetting the
 * practice — opens to check who runs the site and how to reach them.
 *
 * Both are composed only from facts already in `constants/` and the catalogs.
 * The privacy text describes what the code does (no forms, the analytics it
 * loads, where the WhatsApp links lead); it makes no promise the repository
 * cannot back, such as retention periods or response times. The HTML page and
 * its Markdown representation render from this one source.
 */
import { fullAddress, clinicPath, getVisibleClinic } from "@/app/lib/clinics";
import { getPublishedLocations } from "@/app/lib/locations";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_FORMATTED,
  CONTACT_WHATSAPP_URL,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  FIRST_APPOINTMENT_STEPS,
  INSTAGRAM_URL,
  LOCATIONS_SCHEDULING_NOTE,
} from "@/constants";

export interface TrustItem {
  /** Lead-in shown in bold, e.g. "WhatsApp". */
  label?: string;
  text: string;
  href?: string;
}

export interface TrustSection {
  id: string;
  heading: string;
  paragraphs: string[];
  items?: TrustItem[];
  ordered?: boolean;
}

export interface TrustPage {
  path: "/contato" | "/privacidade";
  eyebrow: string;
  title: string;
  /** Short browser-tab title, before the root template. */
  metaTitle: string;
  description: string;
  lastModified: string;
  /**
   * Contact is content people search for; the privacy notice is a utility
   * page: reachable and linked from every page, but `noindex, follow` and
   * kept out of the sitemap and llms.txt.
   */
  indexable: boolean;
  sections: TrustSection[];
}

const practiceClinic = getVisibleClinic("protrauma")!;
const campoGrande = getPublishedLocations().find((entry) => entry.slug === "campo-grande");

export const CONTACT_PAGE: TrustPage = {
  path: "/contato",
  eyebrow: "Contato",
  title: "Contato e agendamento de consultas",
  metaTitle: "Contato e agendamento",
  indexable: true,
  description: `Canais para agendar consulta com o Dr. ${DOCTOR_NAME}, neurocirurgião em Campo Grande - MS: WhatsApp, telefone, e-mail e endereço do consultório.`,
  lastModified: "2026-10-14",
  sections: [
    {
      id: "canais",
      heading: "Canais de atendimento",
      paragraphs: [
        "O agendamento é feito pelo WhatsApp do consultório. A equipe orienta os próximos passos e ajuda a escolher o melhor horário para a consulta.",
        LOCATIONS_SCHEDULING_NOTE,
      ],
      items: [
        { label: "WhatsApp", text: CONTACT_WHATSAPP_FORMATTED, href: CONTACT_WHATSAPP_URL },
        { label: "Telefone", text: CONTACT_PHONE },
        { label: "E-mail", text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        { label: "Instagram", text: "@pauloaraujoneuro", href: INSTAGRAM_URL },
      ],
    },
    {
      id: "local",
      heading: "Local de atendimento",
      paragraphs: [
        `As consultas acontecem no ${practiceClinic.name}, ${practiceClinic.tagline.charAt(0).toLowerCase()}${practiceClinic.tagline.slice(1)}. ${practiceClinic.openingHoursNote}`,
      ],
      items: [
        { label: "Endereço", text: fullAddress(practiceClinic), href: practiceClinic.mapUrl },
        ...practiceClinic.openingHours.map((entry) => ({
          label: entry.days,
          text: entry.hours,
        })),
        { label: "Recepção da clínica", text: practiceClinic.phone },
        {
          label: "WhatsApp da recepção",
          text: practiceClinic.whatsappLabel,
          href: `https://wa.me/${practiceClinic.whatsappNumber}`,
        },
        {
          label: "Detalhes da clínica",
          text: "Fotos, mapa e como chegar",
          href: clinicPath(practiceClinic),
        },
      ],
    },
    {
      id: "primeira-consulta",
      heading: "Como organizar a primeira consulta",
      paragraphs: [
        "Algumas informações enviadas com antecedência ajudam a equipe a orientar o agendamento:",
      ],
      items: FIRST_APPOINTMENT_STEPS.map((step) => ({ text: step })),
      ordered: true,
    },
    ...(campoGrande
      ? [
          {
            id: "o-que-levar",
            heading: "O que levar no dia",
            paragraphs: [],
            items: campoGrande.whatToBring.map((item) => ({ text: item })),
          },
        ]
      : []),
    {
      id: "limites",
      heading: "O que o contato não substitui",
      paragraphs: [
        "Questões sobre diagnóstico, prognóstico ou indicação de cirurgia precisam de avaliação individual. As informações deste site são educativas e não substituem a consulta, o exame físico ou a orientação individualizada.",
        `Responsável técnico: Dr. ${DOCTOR_NAME}, neurocirurgião — ${DOCTOR_CRM} • ${DOCTOR_RQE}.`,
      ],
    },
  ],
};

export const PRIVACY_PAGE: TrustPage = {
  path: "/privacidade",
  eyebrow: "Privacidade",
  title: "Privacidade e uso de dados neste site",
  metaTitle: "Privacidade",
  indexable: false,
  description: `Como o site do Dr. ${DOCTOR_NAME} funciona em relação aos seus dados: o que é medido, o que não é coletado e como falar com o consultório sobre privacidade.`,
  lastModified: "2026-10-14",
  sections: [
    {
      id: "responsavel",
      heading: "Quem mantém o site",
      paragraphs: [
        `Este site é mantido pelo Dr. ${DOCTOR_NAME}, neurocirurgião em Campo Grande - MS (${DOCTOR_CRM} • ${DOCTOR_RQE}). Ele tem finalidade informativa e educativa: apresenta a formação do médico, as áreas de atuação, artigos para pacientes e os canais de agendamento.`,
      ],
    },
    {
      id: "o-que-nao-coletamos",
      heading: "O que o site não coleta",
      paragraphs: [
        "O site não tem formulários, cadastro, área de login nem pagamento on-line. Nenhuma informação de saúde é solicitada ou armazenada pelas páginas. Para falar com o consultório, você escolhe o canal — WhatsApp ou e-mail — e decide o que enviar.",
      ],
    },
    {
      id: "medicao",
      heading: "Medição de audiência e desempenho",
      paragraphs: [
        "Para entender quais conteúdos são úteis e se as páginas carregam bem, o site usa as ferramentas abaixo. Elas registram dados de navegação, como páginas visitadas, tipo de dispositivo e tempo de carregamento.",
      ],
      items: [
        {
          label: "Vercel Web Analytics e Speed Insights",
          text: "contagem de visitas e métricas de desempenho das páginas, apresentadas de forma agregada.",
        },
        {
          label: "Google Tag Manager",
          text: "pode carregar ferramentas do Google, como o Google Analytics, que usam cookies e identificadores do navegador para medir o uso do site.",
        },
        {
          label: "Cliques em WhatsApp",
          text: "o clique em um botão de WhatsApp é registrado como evento de navegação, com o local do botão na página. O texto da mensagem não é registrado.",
        },
      ],
    },
    {
      id: "terceiros",
      heading: "Serviços de terceiros",
      paragraphs: [
        "Algumas funções dependem de serviços externos, que tratam os dados conforme as próprias políticas de privacidade:",
      ],
      items: [
        {
          label: "WhatsApp",
          text: "os botões de agendamento abrem o WhatsApp, serviço da Meta, com uma mensagem inicial que você pode editar ou apagar antes de enviar.",
        },
        {
          label: "Google Maps",
          text: "o mapa exibido nas páginas da clínica e do local de atendimento é carregado diretamente do Google.",
        },
        {
          label: "Redes e currículo",
          text: "os links para Instagram, Facebook e Currículo Lattes levam a sites externos.",
        },
      ],
    },
    {
      id: "direitos",
      heading: "Seus direitos e contato",
      paragraphs: [
        "A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante ao titular direitos como confirmação da existência de tratamento, acesso, correção e eliminação de dados pessoais.",
        "Para dúvidas ou solicitações sobre privacidade, escreva para o e-mail do consultório:",
      ],
      items: [{ label: "E-mail", text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` }],
    },
  ],
};

export const TRUST_PAGES = [CONTACT_PAGE, PRIVACY_PAGE];
