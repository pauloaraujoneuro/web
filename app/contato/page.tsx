import type { Metadata } from "next";
import TrustPageView from "@/app/components/content/TrustPageView";
import { buildPageMetadata } from "@/app/lib/metadata";
import { CONTACT_PAGE } from "@/app/lib/trust-pages";

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_PAGE.metaTitle,
  socialTitle: CONTACT_PAGE.title,
  description: CONTACT_PAGE.description,
  path: CONTACT_PAGE.path,
  indexable: CONTACT_PAGE.indexable,
});

const ContactPage = () => <TrustPageView page={CONTACT_PAGE} />;

export default ContactPage;
