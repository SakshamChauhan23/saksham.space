import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Beyond the Hype: What Actually Separates AI Winners From Everyone Else in 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "14px",
            height: "100%",
            background: "#1377ff",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#1377ff",
              textTransform: "uppercase",
            }}
          >
            saksham.space
          </span>
          <span style={{ fontSize: 22, color: "rgba(0,0,0,0.3)" }}>/</span>
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.12em",
              color: "rgba(0,0,0,0.45)",
              textTransform: "uppercase",
            }}
          >
            Blog
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "#000000",
            }}
          >
            Beyond the Hype
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.32,
              color: "rgba(0,0,0,0.6)",
            }}
          >
            What actually separates AI winners from everyone else in 2026
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "12px" }}>
            {["AI", "Automation", "Governance"].map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  padding: "9px 20px",
                  border: "2px solid #1377ff",
                  borderRadius: "999px",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#1377ff",
                }}
              >
                {b}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "rgba(0,0,0,0.45)" }}>July 2026</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
