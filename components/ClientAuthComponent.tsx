"use client";

import { useSession } from "next-auth/react";
import { UserInfoSkeleton } from "./skeletons/UserInfoSkeleton";

export function ClientAuthComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <UserInfoSkeleton />;
  }

  return (
    <div className="text-green-400/60 text-sm">
      <p>Nombre: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
