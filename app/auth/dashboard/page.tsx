import { DashboardContent } from "@/components/DashboardContent";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import { Suspense } from "react";

// import ClientAuthComponent from "@/components/ClientAuthComponent";

const page = () => {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
};

export default page;

{
  /* <section className="mt-12">
  <ClientAuthComponent />
</section> */
}
