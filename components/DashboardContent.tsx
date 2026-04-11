import { auth } from "@/auth/auth";

export async function DashboardContent() {
  const session = await auth();

  return (
    <div>
      {/* <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1> */}
      <div className="mt-6 text-white/60 text-sm">
        <p>Nombre: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
      </div>
    </div>
  );
}
