"use client";
import React from "react";
import { PropertyCard } from "../PropertyCard";
import properties from "@/public/propertyData.json";
import styles from "@/styles/Container.module.scss";
import Link from "next/link";
import Button from "../UIFields/Button";
import { useRouter } from "next/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Property {
  title: string;
  sqft: number | string;
  beds: number | string;
  baths: number;
  images: string[];
  address: string;
  price: string;
  listingKey: string;
  transactionType: string;
  isFavorite: boolean;
  createdAt: string;
}

const PropertyList = () => {
  const router = useRouter();

  const getData = (data: Property, index: number) => {
    return (
      <div
        key={index}
        className={`w-[100%] max-w-[440px] m-2 relative bg-white rounded-t-[20px] overflow-hidden text-[#212529] ${styles.cardWrapper}`}
        onClick={() => router.push(`/property-detail/${data.listingKey}`)}
      >
        <PropertyCard {...data} index={index} />
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={`${styles.innerContent} text-center py-[25px] px-8`}>
          <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]  mb-6">
            Features Projects
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-items-center lg:grid-cols-4">
            {properties.map((property: Property, index: number) =>
              getData(property, index)
            )}
          </div>
        </div>
        <div className="p-2 flex justify-center">
          <Link href="/property-list" className="w-max">
            <Button className="!bg-secondary-pinkLight px-10 h-[46px] rounded-full !text-16px text-white">
              View All Projects <FaLongArrowAltRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
