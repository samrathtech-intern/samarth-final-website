import { NextRequest, NextResponse } from 'next/server';
import { checkAdminAuth } from '@/lib/admin-middleware';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const isAuth = checkAdminAuth(request);
  return NextResponse.json({ authenticated: isAuth });
}
