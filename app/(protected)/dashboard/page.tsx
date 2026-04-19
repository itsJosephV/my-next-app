// import { ClientAuthComponent } from "@/components/ClientAuthComponent";
import { UserInfo } from "@/components/UserInfo";
import { UserInfoSkeleton } from "@/components/skeletons/UserInfoSkeleton";

import { Suspense } from "react";
import LatestPost from "@/components/LatestPost";
import { Loader } from "lucide-react";
import AddPost from "@/components/AddPost";

const page = async () => {
  return (
    <>
      <Suspense fallback={<UserInfoSkeleton />}>
        <UserInfo />
      </Suspense>
      <section className="mt-6">
        <div className="flex flex-col gap-2 mb-4">
          <h2 className="text-xl font-bold">My lastest publication</h2>
          <AddPost />
        </div>
        <Suspense
          fallback={
            <span>
              <Loader className="animate-spin" />
            </span>
          }
        >
          <LatestPost />
        </Suspense>
      </section>
    </>
  );
};

export default page;
