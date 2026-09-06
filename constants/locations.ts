import type { CitySchedule, ServiceLocation } from "@/constants/types";
import {
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  createWhatsAppUrl,
} from "@/constants/contact";

// Service Locations
export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: "campo-grande",
    name: "Clínica Protrauma",
    city: "Campo Grande",
    state: "MS",
  },
];

export const CITY_SCHEDULES: CitySchedule[] = [
  {
    id: "schedule-campo-grande",
    city: "Campo Grande",
    state: "MS",
    location: "Clínica Protrauma",
    whatsappCtaLabel: "Agendar em Campo Grande",
    whatsappUrl: createWhatsAppUrl(CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT),
  },
];

export const LOCATIONS_SCHEDULING_NOTE =
  "Os horários de consulta são definidos conforme a agenda médica e a disponibilidade de cada local. Para confirmar datas e realizar o agendamento, entre em contato conosco pelo WhatsApp.";

export const FIRST_APPOINTMENT_STEPS = [
  "Envie no WhatsApp sua disponibilidade para atendimento em Campo Grande.",
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
export const CLINIC_COUNTRY = "Brasil";

// Business Hours
export const CLINIC_HOURS = {
  weekdays: "Segunda a Sexta: atendimento com horário agendado",
  saturday: "Sábado: sob consulta",
  sunday: "Domingo: fechado",
};
