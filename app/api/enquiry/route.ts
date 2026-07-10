import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json({ ok: false, message: 'Name, email and requirement details are required.' }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: 'Enquiry details received successfully.'
  });
}
