import { ImageResponse } from "next/og";
import { DOCTOR_CRM, DOCTOR_NAME, DOCTOR_RQE } from "@/constants";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

interface OgImageProps {
  eyebrow: string;
  title: string;
  /** Optional supporting line, trimmed to keep the composition calm. */
  description?: string;
}

export function renderOgImage({ eyebrow, title, description }: OgImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #1d323e 0%, #233e4c 100%)",
          padding: "72px 80px",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 999,
              background: "#cce7f4",
              padding: "12px 26px",
              color: "#233e4c",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2.4,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 940,
              fontSize: title.length > 58 ? 62 : 76,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                maxWidth: 880,
                color: "#cbd5e1",
                fontSize: 28,
                lineHeight: 1.45,
              }}
            >
              {description}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 34,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
              {`Dr. ${DOCTOR_NAME}`}
            </div>
            <div style={{ display: "flex", color: "#8fb6c8", fontSize: 24 }}>
              {`${DOCTOR_CRM} • ${DOCTOR_RQE} • Campo Grande - MS`}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              height: 10,
              width: 96,
              borderRadius: 999,
              background: "#25d366",
            }}
          />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
