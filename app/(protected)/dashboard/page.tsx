import { ClientAuthComponent } from "@/components/ClientAuthComponent";
import { UserInfo } from "@/components/UserInfo";
import { UserInfoSkeleton } from "@/components/skeletons/UserInfoSkeleton";

import { Suspense } from "react";
import LatestPost from "@/components/LatestPost";

const page = async () => {
  return (
    <>
      <Suspense fallback={<UserInfoSkeleton />}>
        <UserInfo />
      </Suspense>
      <section className="mt-6">
        <ClientAuthComponent />
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Mis Publicaciones</h2>
        {/* <UserPosts /> */}
        <Suspense fallback={<p>Cargando última publicación...</p>}>
          <LatestPost />
        </Suspense>
      </section>
    </>
  );
};

export default page;
