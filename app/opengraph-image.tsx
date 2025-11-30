import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rizky Rafi | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  try {
    // Font loading
    const fontData = await fetch(
      new URL("https://cdn.jsdelivr.net/npm/@fontsource/space-grotesk@5.0.13/files/space-grotesk-latin-700-normal.woff", import.meta.url)
    ).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch font");
      return res.arrayBuffer();
    });

    return new ImageResponse(
      (
        <div
          style={{
            background: "#0a0a0a",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"Space Grotesk"',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                color: "#ededed",
                fontSize: 120,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.8,
                display: "flex",
              }}
            >
              RIZKY RAFI AZHARA
            </div>
            <div
              style={{
                color: "#ccff00",
                fontSize: 48,
                fontWeight: 500,
                letterSpacing: "0.1em",
                display: "flex",
              }}
            >
              SOFTWARE ENGINEER
            </div>
          </div>
          {/* Decorative elements */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 40,
              color: "#ededed",
              fontSize: 24,
              opacity: 0.5,
              display: "flex",
            }}
          >
            rizkyrafi.dev
          </div>
          <div
            style={{
              position: "absolute",
              top: 40,
              right: 40,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#ccff00",
              display: "flex",
            }}
          />
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Space Grotesk",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    // Fallback if font loading fails
    return new ImageResponse(
      (
        <div
          style={{
            background: "#0a0a0a",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                color: "#ededed",
                fontSize: 120,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 0.8,
                display: "flex",
              }}
            >
              RIZKY RAFI
            </div>
            <div
              style={{
                color: "#ccff00",
                fontSize: 48,
                fontWeight: 500,
                letterSpacing: "0.1em",
                display: "flex",
              }}
            >
              SOFTWARE ENGINEER
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
