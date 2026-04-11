import { auth, signIn, signOut } from "@/auth/auth";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("microsoft-entra-id");
        }}
      >
        <button className="bg-blue-700 px-4 py-2 rounded-sm" type="submit">
          Sign in with Microsoft
        </button>
      </form>
    );
  }
  return (
    // <div>
    //   <p>Welcome, {session.user?.name}</p>
    //   <p>Email: {session.user?.email}</p>
    //   <form
    //     action={async () => {
    //       "use server";
    //       await signOut({ redirectTo: "/" });
    //     }}
    //   >
    //     <button type="submit">Sign out</button>
    //   </form>
    // </div>
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <p>Welcome, {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
