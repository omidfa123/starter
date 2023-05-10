import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (!req.cookies.has('admin_key')) {
    return NextResponse.redirect(new URL('/access-denied', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - access-denied
     */
    '/((?!api|_next/static|_next/image|favicon.ico|access-denied).*)',
  ],
};
