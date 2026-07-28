import { ImageResponse } from "next/og";
import { getService } from "@/data/services";

export const alt = "Leano Digital Group service overview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ServiceOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  const title = service?.title ?? "Technology Delivery";
  return new ImageResponse(<div style={{ alignItems: "center", background: "#020617", color: "#f8fafc", display: "flex", height: "100%", padding: "72px", width: "100%" }}><div style={{ border: "2px solid #38bdf8", borderRadius: "28px", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "54px", width: "100%" }}><span style={{ color: "#7dd3fc", fontSize: 22, fontWeight: 700, letterSpacing: "0.18em" }}>LEANO DIGITAL GROUP</span><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 68, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.05 }}>{title}</span><span style={{ color: "#94a3b8", fontSize: 28, marginTop: "28px" }}>Azure · AI · Data Engineering</span></div><span style={{ color: "#fbbf24", fontSize: 20, fontWeight: 700, letterSpacing: "0.14em" }}>THE LEANO SIGNAL</span></div></div>, size);
}
