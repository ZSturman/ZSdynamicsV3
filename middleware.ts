// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./app/utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      await analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
        region: req.geo?.region,
        city: req.geo?.city,
        userAgent: req.headers.get('user-agent'),
        referrer: req.headers.get('referrer')
      });
    } catch (err) {
      console.error(err);
    }
  }
  return NextResponse.next();
}

export const config = {
    matcher: [
        `/((?!api|_next/static|_next/image|favicon.ico).*)`

    ]
} 