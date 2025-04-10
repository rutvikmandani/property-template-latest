import React, { Suspense } from "react";
import Dashboard from "@/component/Dashboard";
import { FullPageLoader } from "@/component/Loader";

const RealtorLandingPage: React.FC = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Dashboard />
    </Suspense>
  );
};

export default RealtorLandingPage;
