import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

const ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

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

    const originalName = file.name;
    const extMatch = originalName.match(/\.[0-9a-z]+$/i);
    const ext = extMatch ? extMatch[0].toLowerCase() : '';

    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return NextResponse.json(
        { ok: false, message: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(', ')}` },
        { status: 400 }
      );
    }

    // Determine target directory inside public/
    let uploadDir = '';
    let publicUrl = '';
    const safeName = originalName.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const filename = `${Date.now()}_${safeName}`;

    if (targetFolder === 'brands') {
      uploadDir = join(process.cwd(), 'public', 'Brands');
      // For brands marquee, keep clean filename if uploaded or unique
      const brandFileName = safeName;
      await mkdir(uploadDir, { recursive: true });
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(join(uploadDir, brandFileName), buffer);
      return NextResponse.json({
        ok: true,
        filename: brandFileName,
        url: `/Brands/${brandFileName}`,
      });
    } else {
      uploadDir = join(process.cwd(), 'public', 'uploads', targetFolder);
      await mkdir(uploadDir, { recursive: true });
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(join(uploadDir, filename), buffer);
      publicUrl = `/uploads/${targetFolder}/${filename}`;
      return NextResponse.json({
        ok: true,
        filename,
        url: publicUrl,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
