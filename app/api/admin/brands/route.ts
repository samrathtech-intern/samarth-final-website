import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import { getBrands, addBrand, removeBrand, setBrands } from '@/lib/admin-store';

export const dynamic = 'force-dynamic';

export async function GET() {
  const brands = getBrands();
  return NextResponse.json({ ok: true, brands });
}

export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { action, filename, brands } = body;

    // Batch reorder / replace list
    if (action === 'reorder' && Array.isArray(brands)) {
      setBrands(brands);
      return NextResponse.json({ ok: true, message: 'Brands list updated successfully', brands });
    }

    // Add single brand
    if (filename && typeof filename === 'string') {
      addBrand(filename);
      return NextResponse.json({ ok: true, message: 'Brand added successfully', brands: getBrands() });
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
    const filename = body?.filename;

    if (!filename) {
      return NextResponse.json({ ok: false, message: 'Brand filename is required' }, { status: 400 });
    }

    const removed = removeBrand(filename);
    if (!removed) {
      return NextResponse.json({ ok: false, message: 'Brand not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true, message: 'Brand removed successfully', brands: getBrands() });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Delete failed' },
      { status: 500 }
    );
  }
}
