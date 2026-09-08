import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth, unauthorizedResponse } from '@/lib/admin-middleware';
import { getBrandsAsync, addBrandAsync, removeBrandAsync, setBrandsAsync } from '@/lib/admin-store';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const brands = await getBrandsAsync();
  return NextResponse.json(
    { ok: true, brands },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
}

export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const { action, filename, brands } = body;

    if (action === 'reorder' && Array.isArray(brands)) {
      const updatedBrands = await setBrandsAsync(brands);
      return NextResponse.json({ ok: true, message: 'Brands list updated successfully', brands: updatedBrands });
    }

    if (filename && typeof filename === 'string') {
      const updatedBrands = await addBrandAsync(filename);
      return NextResponse.json({ ok: true, message: 'Brand added successfully', brands: updatedBrands });
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

    const updatedBrands = await removeBrandAsync(filename);
    return NextResponse.json({ ok: true, message: 'Brand removed successfully', brands: updatedBrands });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Delete failed' },
      { status: 500 }
    );
  }
}
