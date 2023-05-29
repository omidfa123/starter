import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userAgent } from "next/server";

export function middleware(req: NextRequest) {
  const deviceType = userAgent(req).device.type;

  console.log(req);

  if (!req.cookies.has("admin_key")) {
    return NextResponse.redirect(new URL("/access-denied", req.url));
  }

  if (deviceType === "mobile" || deviceType === "tablet") {
    return NextResponse.rewrite(new URL("/m", req.url));
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
    "/((?!api|_next/static|_next/image|favicon.ico|access-denied).*)",
  ],
};
