"use client";

import { useSession } from "next-auth/react";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";

export function ClientAuthComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <DashboardSkeleton />;
  }

  return (
    <div className="text-green-400/60 text-sm">
      <p>Nombre: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
