"use client";

import { useSession } from "next-auth/react";

const ClientAuthComponent = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-blue-950 max-w-fit text-blue-300 p-4 rounded-md space-y-2">
      <p>Email: {session?.user?.email}</p>
      <p>this is inside a client component</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ClientAuthComponent;
