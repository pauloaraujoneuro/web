// Contact Information
export const CONTACT_EMAIL = "pauloaraujoneuro@gmail.com";
export const CONTACT_PHONE = "41 2018-0330";

// WhatsApp Information
export const CONTACT_WHATSAPP_NUMBER = "554120180330";
export const CONTACT_WHATSAPP_FORMATTED = "+55 41 2018-0330";
export const CONTACT_WHATSAPP_DEFAULT_TEXT =
  "Olá! Encontrei o site do Dr. Paulo Araújo e gostaria de agendar uma consulta.";

export function createWhatsAppUrl(message: string) {
  return CONTACT_WHATSAPP_NUMBER
    ? `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : "#contact";
}

export const CONTACT_WHATSAPP_URL = createWhatsAppUrl(
  CONTACT_WHATSAPP_DEFAULT_TEXT,
);

export const CONTACT_WHATSAPP_FAQ_TEXT =
  "Olá! Vi a seção de dúvidas no site do Dr. Paulo Araújo e gostaria de tirar uma dúvida e agendar uma avaliação.";
export const CONTACT_WHATSAPP_FAQ_URL = createWhatsAppUrl(
  CONTACT_WHATSAPP_FAQ_TEXT,
);

export const CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT =
  "Olá! Gostaria de agendar uma consulta em Campo Grande com o Dr. Paulo Araújo.";
export const CONTACT_WHATSAPP_LABEL = CONTACT_WHATSAPP_NUMBER
  ? CONTACT_WHATSAPP_FORMATTED
  : "WhatsApp pendente";

// Social Media
export const INSTAGRAM_URL = "https://www.instagram.com/pauloaraujoneuro/";
