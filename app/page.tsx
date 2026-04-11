import { login } from "@/actions/auth/login";
import { logout } from "@/actions/auth/logout";

import { auth } from "@/auth/auth";
import { SubmitButton } from "@/components/SubmitButton";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <form action={login}>
        <SubmitButton
          label="Sign in with Microsoft"
          loadingLabel="Signing in..."
        />
      </form>
    );
  }

  return (
    <div>
      <p className="text-sm text-white/60">
        You are logged in as {session.user?.name}
      </p>
      <div className="mt-6">
        <form action={logout}>
          <SubmitButton label="Sign out" loadingLabel="Signing out..." />
        </form>
      </div>
    </div>
  );
}
