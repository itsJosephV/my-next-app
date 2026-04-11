import { auth } from "@/auth/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/auth") && !session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return auth(request as never);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};