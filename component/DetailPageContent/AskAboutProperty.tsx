"use client";
import React from "react";
import Image from "next/image";
import ContactFields from "../ContactFields";

const AskAboutProperty = () => {
  return (
    <div className="flex flex-col bg-white gap-4 sticky top-[110px] p-4 shadow-custom rounded-xl">
      <h3 className="text-[22px] text-secondary-pinkLight font-bold flex text-center justify-center">
        Ask about this property
      </h3>
      <div className="flex flex-wrap gap-2 md:items-center md:justify-center items-center mb-4">
        <Image
          src="/images/realtor.webp"
          alt="Profile"
          height={64}
          width={64}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-lg font-medium">{"Ashutosh Walia"}</p>
          <p className="text-sm text-gray-500">{"ashwaliarealty@gmail.com"}</p>
          <p className="text-sm text-gray-500">{"+16478084539"}</p>
        </div>
      </div>
      <ContactFields />
    </div>
  );
};

export default AskAboutProperty;
