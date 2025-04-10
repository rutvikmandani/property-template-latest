"use client";
import React from "react";
import styles from "@/styles/Container.module.scss";
import properties from "@/public/propertyData.json";
import { useRouter, useSearchParams } from "next/navigation";
import { PropertyCard } from "../PropertyCard";

const PropertyListingPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const listingType = searchParams.get("listingType");
  const cityName = searchParams.get("cityName");

  const onFilterRemove = () => {
    router.replace(`?`, { scroll: false });
  };
  return (
    <div className={`${styles.mainContainer} !bg-neutral-light p-8`}>
      <div
        className={`${styles.innerContent} w-full flex-col md:flex-row text-[#212529]`}
      >
        <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]  mb-6">
          {`${listingType ? listingType : ""} Property Listings`}
        </h1>
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
    </div>
  );
};

export default PropertyListingPageContent;
