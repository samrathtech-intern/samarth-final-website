import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import {
  getGalleryItems,
  getGalleryCategories,
  addGalleryItem,
  removeGalleryItem,
  updateGalleryItem,
  setGalleryItems,
  setGalleryCategories,
  GalleryItem
} from '@/lib/admin-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const items = getGalleryItems();
  const categories = getGalleryCategories();
  return NextResponse.json({ ok: true, items, categories });
}

export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { action, item, items, categories, src, updates } = body;

    // Batch update / reorder
    if (action === 'reorder' && Array.isArray(items)) {
      setGalleryItems(items);
      return NextResponse.json({ ok: true, message: 'Gallery reordered successfully', items });
    }

    // Categories update
    if (action === 'update_categories' && Array.isArray(categories)) {
      setGalleryCategories(categories);
      return NextResponse.json({ ok: true, message: 'Categories updated successfully', categories });
    }

    // Update single item
    if (action === 'update' && src && updates) {
      const updated = updateGalleryItem(src, updates);
      if (!updated) {
        return NextResponse.json({ ok: false, message: 'Item not found' }, { status: 404 });
      }
      return NextResponse.json({ ok: true, message: 'Item updated successfully', items: getGalleryItems() });
    }

    // Add new item
    if (item && item.src && item.title) {
      const newItem: GalleryItem = {
        src: item.src,
        title: item.title,
        tag: item.tag || 'Gallery',
        category: item.category || 'Consulting Work',
      };
      addGalleryItem(newItem);

      // Also ensure category is in list if not already
      const currentCats = getGalleryCategories();
      if (!currentCats.includes(newItem.category)) {
        setGalleryCategories([...currentCats, newItem.category]);
      }

      return NextResponse.json({ ok: true, message: 'Item added successfully', items: getGalleryItems() });
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

    const removed = removeGalleryItem(src);
    if (!removed) {
      return NextResponse.json({ ok: false, message: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true, message: 'Item removed successfully', items: getGalleryItems() });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Delete failed' },
      { status: 500 }
    );
  }
}
