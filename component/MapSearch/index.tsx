"use client";
import React from "react";
import styles from "@/styles/Container.module.scss";
import properties from "@/public/propertyData.json";
import { PropertyCard } from "@/component/PropertyCard";
import { useRouter } from "next/navigation";
import MapContainer from "./MapContainer";

const MapSearch = () => {
  const router = useRouter();
  return (
    <div className={`${styles.mainContainer} !bg-neutral-light`}>
      <div
        className={`${styles.innerContent} w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-[#212529]`}
      >
        <div className={"bg-white h-full p-4 shadow-custom rounded-xl"}>
          <MapContainer />
        </div>
        <div className={`flex flex-col gap-4`}>
          <p className="text-[24px]">{"Total 13702 Listings Found"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-neutral gap-6 max-h-[800px] overflow-auto ">
            {[
              ...properties,
              ...properties,
              ...properties,
              ...properties,
              ...properties,
            ].map((a, index) => (
              <div
                key={index}
                className={`rounded-t-[20px] bg-white overflow-hidden w-full shadow-custom`}
                onClick={() => router.push(`/property-detail/${a.listingKey}`)}
              >
                <PropertyCard {...a} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSearch;
