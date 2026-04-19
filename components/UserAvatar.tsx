import { auth } from "@/auth/auth";
import Image from "next/image";

async function getUserPhoto(accessToken: string) {
  const res = await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  const buffer = await res.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:image/jpeg;base64,${base64}`;
}

export async function UserAvatar() {
  const session = await auth();
  const photo = await getUserPhoto(session?.user?.accessToken as string);

  if (!photo) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="font-semibold">{session?.user?.name?.[0]}</span>
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt="Avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}
