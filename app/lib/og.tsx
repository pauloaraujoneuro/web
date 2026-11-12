import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { DOCTOR_CRM, DOCTOR_NAME, DOCTOR_RQE } from "@/constants";

/**
 * Social preview images (Open Graph / Twitter) carry the site's own pictures:
 * a real photo of the doctor beside the page subject, or the teaching figure
 * an article shows. Text-only banners read as generic in search and chat.
 *
 * Sources are converted with sharp at build time (the renderer decodes only
 * PNG/JPEG); the output is PNG, which every chat app, WhatsApp included,
 * previews.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** Real photos of the doctor, by where they are used. */
export const OG_PHOTOS = {
  default: "/pics/doutor-paulo-araujo-frente.jpeg",
  profile: "/pics/doutor-paulo-araujo-terno.jpeg",
} as const;

const PHOTO_WIDTH = 440;
const STRIP_HEIGHT = 86;
const BACKGROUND = "linear-gradient(145deg, #1d323e 0%, #233e4c 100%)";

const toPngDataUri = async (publicPath: string, width: number, height: number, fit: "cover" | "contain") => {
  const source = await fs.readFile(path.join(process.cwd(), "public", publicPath));
  const png = await sharp(source)
    .resize(width, height, { fit, position: "north", background: "#f8fafc" })
    .png()
    .toBuffer();
  return `data:image/png;base64,${png.toString("base64")}`;
};

interface OgImageProps {
  eyebrow: string;
  title: string;
  /** Optional supporting line, trimmed to keep the composition calm. */
  description?: string;
  /** Public path of a real photo of the doctor; defaults to the white-coat portrait. */
  photo?: string;
}

/** Page subject on the left, a real photo of the doctor on the right. */
export async function renderOgImage({ eyebrow, title, description, photo = OG_PHOTOS.default }: OgImageProps) {
  const src = await toPngDataUri(photo, PHOTO_WIDTH, OG_SIZE.height, "cover");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BACKGROUND, color: "#f8fafc" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: OG_SIZE.width - PHOTO_WIDTH,
            padding: "64px 56px 56px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: 999,
                background: "#cce7f4",
                padding: "10px 22px",
                color: "#233e4c",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: title.length > 58 ? 44 : title.length > 34 ? 52 : 60,
                fontWeight: 700,
                lineHeight: 1.12,
                letterSpacing: -1,
              }}
            >
              {title}
            </div>
            {description ? (
              <div style={{ display: "flex", color: "#cbd5e1", fontSize: 24, lineHeight: 1.4 }}>
                {description.length > 140 ? `${description.slice(0, 137)}…` : description}
              </div>
            ) : null}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 24 }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>{`Dr. ${DOCTOR_NAME}`}</div>
            <div style={{ display: "flex", color: "#8fb6c8", fontSize: 21 }}>
              {`${DOCTOR_CRM} • ${DOCTOR_RQE} • Campo Grande - MS`}
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
        <img src={src} width={PHOTO_WIDTH} height={OG_SIZE.height} alt="" style={{ objectFit: "cover" }} />
      </div>
    ),
    OG_SIZE,
  );
}

/** An article's own teaching figure, whole, with a slim strip naming the doctor. */
export async function renderFigureOgImage(figure: string) {
  const height = OG_SIZE.height - STRIP_HEIGHT;
  const src = await toPngDataUri(figure, OG_SIZE.width, height, "contain");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f8fafc" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
        <img src={src} width={OG_SIZE.width} height={height} alt="" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: STRIP_HEIGHT,
            padding: "0 56px",
            background: BACKGROUND,
            color: "#f8fafc",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", fontWeight: 700 }}>{`Dr. ${DOCTOR_NAME}`}</div>
          <div style={{ display: "flex", color: "#8fb6c8" }}>Neurocirurgião • Campo Grande - MS</div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
