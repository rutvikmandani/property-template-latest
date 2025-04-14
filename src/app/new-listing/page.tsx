import React, { Suspense } from "react";
import { FullPageLoader } from "@/component/Loader";
import NewListingPageContent from "@/component/NewListingPageContent";

export default function NewListing() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <NewListingPageContent />
    </Suspense>
  );
}
