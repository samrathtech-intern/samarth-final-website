import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import {
  getGalleryItemsAsync,
  getGalleryCategoriesAsync,
  addGalleryItemAsync,
  removeGalleryItemAsync,
  updateGalleryItemAsync,
  GalleryItem,
} from '@/lib/admin-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const items = await getGalleryItemsAsync();
  const categories = await getGalleryCategoriesAsync();
  return NextResponse.json(
    { ok: true, items, categories },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
}

export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { action, item, src, updates } = body;

    // Update single item
    if (action === 'update' && src && updates) {
      const items = await updateGalleryItemAsync(src, updates);
      return NextResponse.json({ ok: true, message: 'Item updated successfully', items });
    }

    // Add new item
    if (item && item.src && item.title) {
      const newItem: GalleryItem = {
        src: item.src,
        title: item.title,
        tag: item.tag || 'Gallery',
        category: item.category || 'Consulting Work',
      };
      const items = await addGalleryItemAsync(newItem);
      return NextResponse.json({ ok: true, message: 'Item added successfully', items });
    }

    return NextResponse.json({ ok: false, message: 'Invalid payload' }, { status: 400 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Operation failed' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json().catch(() => null);
    const src = body?.src;

    if (!src) {
      return NextResponse.json({ ok: false, message: 'Source src is required' }, { status: 400 });
    }

    const items = await removeGalleryItemAsync(src);
    return NextResponse.json({ ok: true, message: 'Item removed successfully', items });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Delete failed' },
      { status: 500 }
    );
  }
}
