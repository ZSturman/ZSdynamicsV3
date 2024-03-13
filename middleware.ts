// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./app/utils/analytics";

export default async function middleware(req: NextRequest) {
  // Accessing additional data from the request
  const { pathname } = req.nextUrl;
  const timestamp = new Date().toISOString();
  const country = req.geo?.country ?? 'Unknown';
  const city = req.geo?.city ?? 'Unknown';
  // Note: For referrer and page title, consider capturing them on the client-side and sending via headers or a specific API call

  if (pathname !== '/api/*' && !pathname.includes('/_next/static') && !pathname.includes('/_next/image') && pathname !== '/favicon.ico') {
    try {
      await analytics.track('pageview', {
        page: pathname,
        timestamp,
        country,
        city,
        // Add placeholders for referrer and page title to be captured on client-side or through specific headers
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
