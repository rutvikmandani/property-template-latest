"use client";
import React, { useState } from "react";
import styles from "@/styles/Container.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import AdvanceOptions from "./AdvanceOptions";
import ActionFields from "../MapSearch/ActionFields";
import PropertyList from "./PropertyList";
import MapSearch from "../MapSearch";

const PropertyListingPageContent = () => {
  const [selectedView, setSelectedView] = useState("Grid");
  const router = useRouter();
  const searchParams = useSearchParams();
  const listingType = searchParams.get("listingType");
  const cityName = searchParams.get("cityName");

  const onFilterRemove = () => {
    router.replace(`?`, { scroll: false });
  };
  return (
    <div className={`${styles.mainContainer} !bg-neutral-light px-4 sm:px-10 py-10`}>
      <div
        className={`${styles.innerContent} w-full flex-col md:flex-row text-[#212529]`}
      >
        <h1 className="text-secondary-pinkLight font-bold capitalize text-[30px] md:text-[40px]  mb-6">
          {`${listingType ? listingType?.toLowerCase() : ""} Property Listings`}
        </h1>
        <ActionFields />
        <AdvanceOptions
          setSelectedView={setSelectedView}
          selectedView={selectedView}
        />
        {selectedView === "Grid" && <PropertyList />}
        {selectedView === "Map" && <MapSearch />}
      </div>
    </div>
  );
};

export default PropertyListingPageContent;
