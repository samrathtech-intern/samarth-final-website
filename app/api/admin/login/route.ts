import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/admin-auth';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-middleware';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    const password = body?.password;

    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { ok: false, message: 'Password is required' },
        { status: 400 }
      );
    }

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { ok: false, message: 'Invalid password. Access denied.' },
        { status: 401 }
      );
    }

    const sessionToken = createSession();
    const response = NextResponse.json({ ok: true, message: 'Login successful' });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: error instanceof Error ? error.message : 'Server error' },
      { status: 500 }
    );
  }
}
