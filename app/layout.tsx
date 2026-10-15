import type { Metadata } from "next";
import Script from "next/script";
import JsonLd from "@/app/components/content/JsonLd";
import { getSiteJsonLd } from "@/app/lib/site-schema";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ANALYTICS_ENABLED, DOCTOR_NAME, GOOGLE_TAG_ID, SITE_URL } from "@/constants";
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

const SITE_JSON_LD = getSiteJsonLd(SITE_DESCRIPTION);

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
        <JsonLd data={SITE_JSON_LD.practice} />
        <JsonLd data={SITE_JSON_LD.facility} />
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
