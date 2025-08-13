// app/og/route.tsx
import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Farhan Keriwala";

  return new ImageResponse(
    (
      <div style={{ fontSize: 60, padding: "40px", background: "black", color: "white" }}>
        {title}
      </div>
    ),
    size
  );
}
