import { ClientAuthComponent } from "@/components/ClientAuthComponent";
import { DashboardContent } from "@/components/DashboardContent";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";

import { Suspense } from "react";

const page = () => {
  return (
    <>
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
