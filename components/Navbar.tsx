import { auth } from "@/auth/auth";
import Link from "next/link";
import { logout } from "@/actions/auth/logout";

import { UserAvatar } from "./UserAvatar";
import { Suspense } from "react";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="px-5 py-2.5 bg-blue-950 text-blue-300">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1>My App</h1>
        </Link>
        <nav className="flex gap-5 items-center">
          <Link href="/">Home</Link>

          {session ? (
            <>
              {/* <Link href="/dashboard">Dashboard</Link> */}
              <Link href="/posts">Posts</Link>
              <div className="flex items-center gap-3">
                <Suspense
                  fallback={
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  }
                >
                  <UserAvatar />
                </Suspense>
                <div className="flex flex-col">
                  <span className="text-sm text-blue-300">
                    {session.user?.name}
                  </span>
                  <form action={logout}>
                    <button
                      type="submit"
                      className="text-xs text-blue-400 hover:text-blue-300 underline"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <Link href="/auth/signin">Sign in</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
