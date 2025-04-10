import DetailPageContent from "@/component/DetailPageContent";
import React, { Suspense } from "react";
import styles from "@/styles/Container.module.scss";
import { FullPageLoader } from "@/component/Loader";

export default function Preview() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <div className={`${styles.mainContainer} !bg-secondary-bg p-8`}>
        <DetailPageContent />
      </div>
    </Suspense>
  );
}
