"use client";
import React from "react";
import styles from "@/styles/Container.module.scss";
import properties from "@/public/propertyData.json";
import { useRouter } from "next/navigation";
import { PropertyCard } from "../PropertyCard";

const PropertyList = () => {
  const router = useRouter();

  return (
    <div className={`flex flex-col gap-4`}>
      <p className="text-[24px]">{"Total 13702 Listings Found"}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-neutral gap-6">
        {[
          ...properties,
          ...properties,
          ...properties,
          ...properties,
          ...properties,
        ].map((a, index) => (
          <div
            key={index}
            className={`shadow-md rounded-t-[20px] overflow-hidden w-full ${styles.cardWrapper}`}
            onClick={() => router.push(`/property-detail/${a.listingKey}`)}
          >
            <PropertyCard {...a} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
