import {
  DOCTOR_CREDENTIALS,
  DOCTOR_CRM,
  DOCTOR_FULL_NAME,
  DOCTOR_NAME,
  DOCTOR_REGISTRATION_BADGES,
  DOCTOR_RQE,
  DOCTOR_SUBTITLE,
  DOCTOR_TITLE,
  SITE_URL,
} from "@/constants/site";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_URL,
  INSTAGRAM_URL,
} from "@/constants/contact";
import { PROFESSIONAL_ROLES } from "@/constants/site";
import {
  CLINIC_COUNTRY,
  CLINIC_HOURS,
  CLINIC_NAME,
  SERVICE_LOCATIONS,
} from "@/constants/locations";

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
    professionalRoles: PROFESSIONAL_ROLES,
  },
  clinic: {
    name: CLINIC_NAME,
    city: SERVICE_LOCATIONS[0].city,
    state: SERVICE_LOCATIONS[0].state,
    country: CLINIC_COUNTRY,
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
