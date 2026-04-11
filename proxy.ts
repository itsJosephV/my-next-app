import { auth } from "@/auth/auth";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  return auth(request as never);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};