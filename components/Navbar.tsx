import { auth } from "@/auth/auth";
import Link from "next/link";
import { login } from "@/actions/auth/login";
import { logout } from "@/actions/auth/logout";
import { SubmitButton } from "./SubmitButton";
import { UserAvatar } from "./UserAvatar";
import { Suspense } from "react";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="p-5 bg-blue-950 text-blue-300">
      <div className="flex items-center justify-between">
        <h1>My App</h1>
        <nav className="flex gap-5 items-center">
          <Link href="/">Home</Link>
          <Link href="/auth/dashboard">Dashboard</Link>

          <div className="border-l border-blue-600 pl-5">
            {!session ? (
              <form action={login}>
                <SubmitButton label="Sign In" loadingLabel="Signing in..." />
              </form>
            ) : (
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
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
