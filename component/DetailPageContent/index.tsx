import React from "react";
import styles from "@/styles/Container.module.scss";
import propertyDetails from "@/public/propertyDetail.json";
import PropertyImages from "./PropertyImages";
import PropertyDetails from "./PropertyDetails";
import AskAboutProperty from "./AskAboutProperty";

const DetailPageContent = () => {
  const propertyDetail = propertyDetails?.data;
  const soldDetail = propertyDetails?.sold_history;
  const imgList = propertyDetail?.images;

  return (
    <div
      className={`${styles.innerContent} bg-secondary-bg flex gap-4 text-primary flex-col md:flex-row`}
    >
      <div className="w-[100%] md:w-[64%]">
        <PropertyImages
          imgList={imgList}
          TransactionType={propertyDetail?.TransactionType}
        />
        <PropertyDetails {...propertyDetail} soldDetail={soldDetail} />
      </div>

      <div className="w-[100%] md:w-[36%]">
        <AskAboutProperty />
      </div>
    </div>
  );
};

export default DetailPageContent;
