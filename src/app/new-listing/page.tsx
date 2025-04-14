import React, { Suspense } from "react";
import styles from "@/styles/Container.module.scss";
import { FullPageLoader } from "@/component/Loader";
import NewListingPageContent from "@/component/NewListingPageContent";

export default function NewListing() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <div className={`${styles.mainContainer} !bg-secondary-bg p-8`}>
        <NewListingPageContent />
      </div>
    </Suspense>
  );
}
