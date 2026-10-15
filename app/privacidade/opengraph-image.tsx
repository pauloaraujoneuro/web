import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import { PRIVACY_PAGE } from "@/app/lib/trust-pages";

export const alt = PRIVACY_PAGE.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: PRIVACY_PAGE.eyebrow,
    title: PRIVACY_PAGE.title,
  });
}
