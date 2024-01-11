"use client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
  
  const isLoggedIn = false;

  if (isLoggedIn) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/about/:path*", "/registros/:path*"],
};
