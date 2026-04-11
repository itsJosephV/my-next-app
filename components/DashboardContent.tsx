import { auth } from "@/auth/auth";

export async function DashboardContent() {
  const session = await auth();

  return (
    <div>
      <div className="text-white/60 text-sm">
        <p>Nombre: {session?.user?.name}</p>
        <p>Email: {session?.user?.email}</p>
      </div>
    </div>
  );
}
