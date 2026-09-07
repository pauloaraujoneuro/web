import type { Metadata } from "next";
import Script from "next/script";
import { clinicEntityId, clinicUrl, getVisibleClinic } from "@/app/lib/clinics";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import {
  ANALYTICS_ENABLED,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
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

const SITE_TITLE = `Neurocirurgião em Campo Grande MS | ${DOCTOR_NAME}`;

const SITE_DESCRIPTION =
  "Neurocirurgião em Campo Grande (MS), com foco em cirurgia de nervo periférico, cirurgia de coluna e reabilitação neurocirúrgica.";

const SITE_KEYWORDS = [
  "Neurocirurgião em Campo Grande",
  "Neurocirurgia em Campo Grande",
  "Neurocirurgião Campo Grande MS",
  "Consulta com neurocirurgião em Campo Grande",
  "Cirurgia de nervo periférico",
  "Cirurgia de nervo periférico em Campo Grande",
  "Cirurgia de coluna em Campo Grande",
  "Reabilitação neurocirúrgica",
  "Tratamento de hérnia de disco em Campo Grande",
  "Tratamento de estenose de canal em Campo Grande",
  "Lesão de plexo braquial",
];

const PRACTICE_CLINIC = getVisibleClinic("protrauma")!;

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
      worksFor: { "@id": clinicEntityId(PRACTICE_CLINIC) },
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
      sameAs: [INSTAGRAM_URL, LATTES_URL],
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
    // The facility is one entity site-wide. Its canonical node lives on the
    // clinic page; the site graph points at the same `@id` so the address is
    // never described twice under two different identifiers.
    {
      "@type": "MedicalClinic",
      "@id": clinicEntityId(PRACTICE_CLINIC),
      name: PRACTICE_CLINIC.name,
      url: clinicUrl(PRACTICE_CLINIC),
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      medicalSpecialty: ["Neurosurgery"],
      // Publishable since the client confirmed the consulting address; PR #1 had
      // stripped it only because no address was verified at the time.
      address: {
        "@type": "PostalAddress",
        streetAddress: `${PRACTICE_CLINIC.streetAddress} - ${PRACTICE_CLINIC.neighborhood}`,
        addressLocality: PRACTICE_CLINIC.city,
        addressRegion: PRACTICE_CLINIC.state,
        postalCode: PRACTICE_CLINIC.postalCode,
        addressCountry: "BR",
      },
      hasMap: PRACTICE_CLINIC.mapUrl,
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
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
