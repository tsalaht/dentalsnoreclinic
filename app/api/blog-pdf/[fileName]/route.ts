import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "app", "blog", "blog content");

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ fileName: string }> },
) {
  const { fileName } = await params;
  const decodedFileName = decodeURIComponent(fileName);
  const normalizedFileName = path.basename(decodedFileName);

  if (!normalizedFileName.toLowerCase().endsWith(".pdf")) {
    return NextResponse.json({ error: "Invalid file type." }, { status: 400 });
  }

  const absoluteFilePath = path.join(BLOG_CONTENT_DIR, normalizedFileName);

  try {
    const fileBuffer = await fs.readFile(absoluteFilePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(normalizedFileName)}`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "PDF file not found." }, { status: 404 });
  }
}
