import { ImageResponse } from "next/og";

export const alt = "Leano Digital Group — Azure, AI, Data & Analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#020617", color: "#f8fafc", display: "flex", height: "100%", width: "100%", padding: "72px", position: "relative" }}>
        <div style={{ border: "2px solid #38bdf8", borderRadius: "28px", display: "flex", height: "100%", padding: "54px", position: "relative", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
            <div style={{ color: "#7dd3fc", display: "flex", fontSize: 22, fontWeight: 700, letterSpacing: "0.18em" }}>LEANO DIGITAL GROUP</div>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "860px" }}><span style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.05 }}>Technology delivery for complex business teams.</span><span style={{ color: "#94a3b8", fontSize: 28, marginTop: "28px" }}>Azure · AI · Data & Analytics</span></div>
            <div style={{ alignItems: "center", color: "#fbbf24", display: "flex", fontSize: 20, fontWeight: 700, letterSpacing: "0.14em" }}><span style={{ background: "#fbbf24", borderRadius: "50%", display: "flex", height: "14px", marginRight: "16px", width: "14px" }} />THE LEANO SIGNAL</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
