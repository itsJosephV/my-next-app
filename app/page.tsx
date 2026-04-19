import { auth } from "@/auth/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const userName = session?.user?.name || "there";

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-6">
        Welcome{session ? `, ${userName}` : ""}! 👋
      </h1>
      <p className="text-lg text-white/70 mb-4">
        This is your home page. You can navigate to the dashboard to see more
        features.
      </p>
      <p className="text-white/60">
        {session
          ? `You are logged in as ${session.user.email}. Explore the dashboard or sign out from the navigation.`
          : "Sign in from the navigation to access your dashboard."}
      </p>
      {!session ? (
        <div className="mt-4">
          <Link href="/auth/signin" className="">
            Go to sign in page
          </Link>
        </div>
      ) : (
        <div className="mt-4">
          <Link href="/dashboard">Go to Dashboard</Link>
        </div>
      )}
    </div>
  );
}
