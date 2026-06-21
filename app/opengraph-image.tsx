import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saksham Chauhan — Product Manager & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background globe rings — decorative */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: "50%",
            transform: "translateY(-50%)",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(19,119,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(19,119,255,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: 240,
              height: 240,
              borderRadius: "50%",
              border: "1px solid rgba(19,119,255,0.08)",
              display: "flex",
            }} />
          </div>
        </div>

        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.4)",
          }}>
            saksham.space
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {["AI", "Automation", "0-to-1"].map((tag) => (
              <span key={tag} style={{
                padding: "5px 14px",
                border: "1px solid #1377ff",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1377ff",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Centre content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 700 }}>
          {/* Arrow + headline */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
            <svg width="40" height="40" viewBox="0 0 56 56" fill="none" style={{ marginTop: 8, flexShrink: 0 }}>
              <path d="M12 12h32v32M12 44L44 12" stroke="#1377ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{
              fontSize: 56,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#000000",
            }}>
              Building practical software that gets used.
            </div>
          </div>

          <div style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(0,0,0,0.45)",
            paddingLeft: 64,
            maxWidth: 520,
          }}>
            Product manager with a builder&apos;s background — working at the intersection
            of AI, automation, and zero-to-one product development.
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "#000" }}>
              Saksham Chauhan
            </span>
            <span style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>
              Product Manager · Builder
            </span>
          </div>
          <div style={{
            padding: "12px 28px",
            background: "#1377ff",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 500,
            color: "#fff",
            letterSpacing: "0.02em",
          }}>
            View Work →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
