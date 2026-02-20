import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { DOCTOR_HEADLINE, DOCTOR_NAME, SITE_URL } from "@/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Paulo Araújo | Neurocirurgião com foco em cirurgia de nervo periférico, coluna e reabilitação neurocirúrgica em Curitiba e União da Vitória.";

const SITE_KEYWORDS = [
  "Paulo Araújo",
  "Neurocirurgião",
  "Neurocirurgia em Curitiba",
  "Neurocirurgia em União da Vitória",
  "Cirurgia de nervo periférico",
  "Cirurgia de coluna",
  "Reabilitação neurocirúrgica",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: DOCTOR_NAME,
  title: {
    default: DOCTOR_HEADLINE,
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
    icon: [{ url: "/logo-transparent.png", type: "image/png" }],
    shortcut: [{ url: "/logo-transparent.png", type: "image/png" }],
    apple: [{ url: "/logo-transparent.png", type: "image/png" }],
  },
  openGraph: {
    title: DOCTOR_HEADLINE,
    description: SITE_DESCRIPTION,
    siteName: DOCTOR_NAME,
    url: SITE_URL,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 1200,
        alt: `Logo ${DOCTOR_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DOCTOR_HEADLINE,
    description: SITE_DESCRIPTION,
    images: ["/logo-transparent.png"],
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
