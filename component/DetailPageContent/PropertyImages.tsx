"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "@/styles/Container.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const PropertyImages = ({ imgList, TransactionType }: any) => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          420: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        modules={[Navigation, Pagination]}
        pagination={false}
      >
        {imgList.map((property: any, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={property?.image_url}
              className={`w-full h-[340px] md:h-[490px] rounded-xl ${styles.detailPageImg}`}
              alt="sold img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`${styles.zIndex1} text-[18px] font-semibold absolute top-3 z-1 left-3 rounded-full bg-secondary-pinkLight py-2 px-4`}
      >
        <span className={"text-white"}>{TransactionType}</span>
      </div>
    </div>
  );
};

export default PropertyImages;
