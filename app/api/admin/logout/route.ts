import { NextRequest, NextResponse } from 'next/server';
import { invalidateSession } from '@/lib/admin-auth';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-middleware';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  invalidateSession(token);

  const response = NextResponse.json({ ok: true, message: 'Logged out successfully' });

  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
