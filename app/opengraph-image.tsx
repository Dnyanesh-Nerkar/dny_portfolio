import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.shortName}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0B0F14", color: "#E8EDF4" }}>
        <div style={{ display: "flex", fontSize: 26, color: "#F5C451", letterSpacing: 3 }}>{profile.eyebrow}</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 24 }}>{profile.shortName}</div>
        <div style={{ display: "flex", fontSize: 38, color: "#9AA7B8", marginTop: 20, maxWidth: 960 }}>{profile.headline}</div>
        <div style={{ display: "flex", marginTop: 48, padding: "14px 26px", border: "3px solid #F5C451", borderRadius: 16, alignSelf: "flex-start", fontSize: 26 }}>
          Many records. One source of truth.
        </div>
      </div>
    ),
    size,
  );
}
