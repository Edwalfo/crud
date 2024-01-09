import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isLoggenIn:boolean = true;

export function middleware(req: NextRequest) {
 

  if (isLoggenIn) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', req.url));
}
 
export const config = {
  matcher: ['/about/:path*', '/registros/:path*'],
}