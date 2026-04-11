import { ClientAuthComponent } from "@/components/ClientAuthComponent";
import { DashboardContent } from "@/components/DashboardContent";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
// import { UserAvatar } from "@/components/UserAvatar";

import { Suspense } from "react";

const page = () => {
  return (
    <>
      {/* <Suspense
        fallback={
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
        }
      >
        <UserAvatar />
      </Suspense> */}
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
      <section className="mt-6">
        <ClientAuthComponent />
      </section>
    </>
  );
};

export default page;
