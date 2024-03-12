// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./app/utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/analytics') {
    try {
      await analytics.track('pageview', {
        page: '/analytics',
        country: req.geo?.country,
        region: req.geo?.region,
        city: req.geo?.city,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/analytics']
};


/* export const config = {
    matcher: [
        `/((?!api|_next/static|_next/image|favicon.ico).*)`

    ]
} */