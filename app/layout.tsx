import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  ANALYTICS_ENABLED,
  CLINIC_ADDRESS_CITY,
  CLINIC_ADDRESS_COUNTRY,
  CLINIC_ADDRESS_LINE,
  CLINIC_ADDRESS_STATE,
  CLINIC_MAP_EMBED_URL,
  CLINIC_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_PROFILE_URL,
  DOCTOR_RQE,
  GOOGLE_TAG_ID,
  INSTAGRAM_URL,
  LATTES_URL,
  SERVICE_LOCATIONS,
  SITE_URL,
} from "@/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_TITLE = `Neurocirurgião em Curitiba | ${DOCTOR_NAME}`;

const SITE_DESCRIPTION =
  "Neurocirurgião em Curitiba (PR), com foco em cirurgia de nervo periférico, cirurgia de coluna e reabilitação neurocirúrgica.";

const SITE_KEYWORDS = [
  "Neurocirurgião em Curitiba",
  "Neurocirurgia em Curitiba",
  "Neurocirurgião Curitiba PR",
  "Consulta com neurocirurgião em Curitiba",
  "Cirurgia de nervo periférico",
  "Cirurgia de nervo periférico em Curitiba",
  "Cirurgia de coluna em Curitiba",
  "Reabilitação neurocirúrgica",
  "Tratamento de hérnia de disco em Curitiba",
  "Tratamento de estenose de canal em Curitiba",
  "Lesão de plexo braquial",
];

const PHYSICIAN_AND_CLINIC_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": `${SITE_URL}#physician`,
      name: DOCTOR_NAME,
      url: SITE_URL,
      image: `${SITE_URL}${DOCTOR_PROFILE_IMAGE}`,
      description: SITE_DESCRIPTION,
      medicalSpecialty: ["Neurosurgery"],
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_ADDRESS_LINE,
        addressLocality: CLINIC_ADDRESS_CITY,
        addressRegion: CLINIC_ADDRESS_STATE,
        addressCountry: CLINIC_ADDRESS_COUNTRY,
      },
      areaServed: SERVICE_LOCATIONS.map((location) => ({
        "@type": "City",
        name: location.city,
      })),
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Cirurgia de nervo periférico",
        },
        {
          "@type": "MedicalProcedure",
          name: "Cirurgia de coluna",
        },
        {
          "@type": "MedicalTherapy",
          name: "Reabilitação neurocirúrgica",
        },
      ],
      sameAs: [INSTAGRAM_URL, DOCTOR_PROFILE_URL, LATTES_URL],
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "CRM",
          value: DOCTOR_CRM,
        },
        {
          "@type": "PropertyValue",
          propertyID: "RQE",
          value: DOCTOR_RQE,
        },
      ],
    },
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}#clinic`,
      name: CLINIC_NAME,
      url: SITE_URL,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      medicalSpecialty: ["Neurosurgery"],
      hasMap: CLINIC_MAP_EMBED_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_ADDRESS_LINE,
        addressLocality: CLINIC_ADDRESS_CITY,
        addressRegion: CLINIC_ADDRESS_STATE,
        addressCountry: CLINIC_ADDRESS_COUNTRY,
      },
      areaServed: SERVICE_LOCATIONS.map((location) => ({
        "@type": "AdministrativeArea",
        name: `${location.city} - ${location.state}`,
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(PHYSICIAN_AND_CLINIC_JSON_LD).replace(
  /</g,
  "\\u003c",
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: DOCTOR_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${DOCTOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: DOCTOR_NAME, url: SITE_URL }],
  creator: DOCTOR_NAME,
  publisher: DOCTOR_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icons/favicon-32.png", type: "image/png", sizes: "32x32" }],
    shortcut: [{ url: "/icons/favicon-32.png", type: "image/png" }],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: DOCTOR_NAME,
    url: SITE_URL,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 1200,
        alt: `${DOCTOR_NAME} - Neurocirurgião em Curitiba`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.className} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Analytics - Only load in production or debug mode */}
        {ANALYTICS_ENABLED &&
          GOOGLE_TAG_ID &&
          GOOGLE_TAG_ID.startsWith("GTM-") && (
            <GoogleTagManager gtmId={GOOGLE_TAG_ID} />
          )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
