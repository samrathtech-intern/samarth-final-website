import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/admin-auth';

export const ADMIN_COOKIE_NAME = 'samarth_admin_session';

export function checkAdminAuth(request: NextRequest): boolean {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  return verifySession(token);
}

export function unauthorizedResponse() {
  return NextResponse.json(
    { ok: false, message: 'Unauthorized. Please login to continue.' },
    { status: 401 }
  );
}
