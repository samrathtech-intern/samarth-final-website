import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

const ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function getMimeType(filename: string, fileType?: string): string {
  if (fileType && fileType.includes('/')) return fileType;
  const ext = filename.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'webp':
      return 'image/webp';
    case 'svg':
      return 'image/svg+xml';
    case 'gif':
      return 'image/gif';
    default:
      return 'image/jpeg';
  }
}

export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const targetFolder = (formData.get('folder') as string) || 'gallery'; // 'gallery' | 'brands' | 'photos'

    if (!file) {
      return NextResponse.json({ ok: false, message: 'No file uploaded' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ ok: false, message: 'File size exceeds 10MB limit' }, { status: 400 });
    }

    const originalName = file.name || 'image.jpg';
    const extMatch = originalName.match(/\.[0-9a-z]+$/i);
    const ext = extMatch ? extMatch[0].toLowerCase() : '.jpg';

    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { ok: false, message: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}` },
        { status: 400 }
      );
    }

    const safeName = originalName.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const filename = `${Date.now()}_${safeName}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Try disk write first (for local dev & VPS)
    try {
      if (targetFolder === 'brands') {
        const uploadDir = join(process.cwd(), 'public', 'Brands');
        await mkdir(uploadDir, { recursive: true });
        await writeFile(join(uploadDir, safeName), buffer);
        return NextResponse.json({
          ok: true,
          filename: safeName,
          url: `/Brands/${safeName}`,
        });
      } else {
        const uploadDir = join(process.cwd(), 'public', 'uploads', targetFolder);
        await mkdir(uploadDir, { recursive: true });
        await writeFile(join(uploadDir, filename), buffer);
        return NextResponse.json({
          ok: true,
          filename,
          url: `/uploads/${targetFolder}/${filename}`,
        });
      }
    } catch (fsError) {
      // Serverless fallback: Read-only filesystem (e.g. Vercel, Netlify, AWS Lambda)
      // Convert to Base64 data URL so image is served directly without disk write
      console.warn('Filesystem write not available, using Base64 data URL fallback:', fsError);

      const mimeType = getMimeType(originalName, file.type);
      const base64Data = buffer.toString('base64');
      const dataUrl = `data:${mimeType};base64,${base64Data}`;

      return NextResponse.json({
        ok: true,
        filename: targetFolder === 'brands' ? safeName : filename,
        url: dataUrl,
      });
    }
  } catch (error) {
    console.error('Upload handler error:', error);
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Upload processing failed' },
      { status: 500 }
    );
  }
}
