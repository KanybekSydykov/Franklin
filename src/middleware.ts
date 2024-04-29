import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip checking device accept language
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Replace `getLocale` with your default locale logic if needed
    // For example, you can set a default locale here
    const defaultLocale = "en"; // Change this to your default locale
    return NextResponse.redirect(
      new URL(
        `/${defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }

  // Skip processing for public files
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
