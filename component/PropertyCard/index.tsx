"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "@/styles/Container.module.scss";
import { TbBed } from "react-icons/tb";
import { MdOutlineBathtub } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import "swiper/css";
import "swiper/css/pagination";
import { Tooltip } from "@heroui/react";
import moment from "moment";

type PropertyCardProps = {
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
  index: number;
};

export const PropertyCard = ({
  images,
  price,
  address,
  beds,
  baths,
  sqft,
  listingKey,
  transactionType,
  createdAt,
}: PropertyCardProps) => {
  const handleRedirect = () => {};

  const timeAgo = (utcTimestamp: string): string => {
    const localTime = moment.utc(utcTimestamp).local();
    return localTime.fromNow();
  };

  return (
    <div className="w-full overflow-hidden cursor-pointer bg-white flex flex-col">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          observeParents={true}
          observer={true}
          navigation={{
            nextEl: ".homes-next",
            prevEl: ".homes-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={10}
          className={styles.imgSwiperContainer}
        >
          {images?.length !== 0 ? (
            images.slice(0, 4).map((img: any, index: number) => (
              <SwiperSlide key={img + index}>
                <div className=" w-full h-full" onClick={handleRedirect}>
                  <img
                    src={img}
                    className={styles.image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide key={"static"}>
              <div className="w-full h-full" onClick={handleRedirect}>
                <img
                  src={"/images/slider-properties-2.jpg"}
                  className={styles.image}
                  alt={`Image`}
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        {transactionType && (
          <div
            className={`${styles.zIndex1} text-[12px] font-semibold absolute top-2 z-1 left-2 rounded-full bg-secondary-pinkLight py-1 px-2`}
          >
            <span className={"text-white"}>{transactionType}</span>
          </div>
        )}

        {createdAt && (
          <div
            className={`${styles.zIndex1} text-[12px] font-semibold absolute bottom-2 z-1 right-2 rounded-full bg-secondary-black2 text-white py-1 px-2`}
          >
            {timeAgo(createdAt)}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <Tooltip content={address ?? "NA"} showArrow={true}>
          <div className="grid grid-cols-[auto_1fr] gap-[4px]  items-center">
            <SlLocationPin size={16} />
            <p className={`text-lg font-semibold truncate`}>
              {address ?? "NA"}
            </p>
          </div>
        </Tooltip>
        <div className={`px-2 pt-3`}>
          <div className="flex justify-between items-center mb-2">
            <p className={styles.price}>${price}</p>
            <p className="text-[#3d3e3f] text-[12px] font-semibold">
              MLS ID&reg; {listingKey}
            </p>
          </div>

          <div
            className={
              "flex border-t pt-2 flex justify-between flex-wrap items-center"
            }
          >
            <span className="flex items-center gap-2">
              <TbBed size={18} /> {beds} Beds
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineBathtub size={18} />
              {baths} Baths
            </span>
            <span className="flex items-center gap-2">
              <BsCopy size={18} />
              {sqft} Sqft
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
