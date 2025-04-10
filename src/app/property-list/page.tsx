import { FullPageLoader } from "@/component/Loader";
import PropertyListingPageContent from "@/component/PropertyListingPageContent";
import React, { Suspense } from "react";

const Listing = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <PropertyListingPageContent />
    </Suspense>
  );
};

export default Listing;
