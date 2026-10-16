import type { Metadata } from "next";
import TrustPageView from "@/app/components/content/TrustPageView";
import { buildPageMetadata } from "@/app/lib/metadata";
import { PRIVACY_PAGE } from "@/app/lib/trust-pages";

export const metadata: Metadata = buildPageMetadata({
  title: PRIVACY_PAGE.metaTitle,
  socialTitle: PRIVACY_PAGE.title,
  description: PRIVACY_PAGE.description,
  path: PRIVACY_PAGE.path,
  indexable: PRIVACY_PAGE.indexable,
});

const PrivacyPage = () => <TrustPageView page={PRIVACY_PAGE} />;

export default PrivacyPage;
