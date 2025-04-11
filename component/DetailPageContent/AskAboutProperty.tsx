"use client";
import React from "react";
import Image from "next/image";
import ContactFields from "../ContactFields";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AskAboutProperty = () => {
  return (
    <>
      <div className="flex flex-col bg-white gap-4 p-4 shadow-custom rounded-xl mb-4">
        <h3 className="text-[22px] text-secondary-pinkLight font-bold">
          Presented By:
        </h3>
        <div className="flex flex-wrap sm:grid sm:grid-cols-[max-content_1fr] gap-2 md:items-center items-center mb-4">
          <Image
            src="/images/realtor.webp"
            alt="Profile"
            height={110}
            width={110}
            className="w-[110px] h-[110px] object-contain rounded-xl border border-secondary-black3"
          />
          <div>
            <h3 className="text-lg font-medium">{"Ashutosh Walia"}</h3>
            <p className="text-[12px] font-medium text-gray-500 pb-2">
              Sales Representative & Mortgage Agent RE/MAX Millennium Real
              Estate, Brokerage
            </p>

            <a
              className={"flex items-center gap-2 text-sm text-gray-500"}
              href={`tel:+16478084539`}
            >
              <FaPhoneAlt />
              16478084539
            </a>
            <a
              className={"flex items-center gap-2 text-sm text-gray-500"}
              href={`mailto:hetal.toronto@gmail.com`}
            >
              <MdEmail />
              ashwaliarealty@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white gap-4 sticky sm:top-[110px] p-4 shadow-custom rounded-xl">
        <h3 className="text-[22px] text-secondary-pinkLight font-bold">
          Request More Information
        </h3>
        <ContactFields />
      </div>
    </>
  );
};

export default AskAboutProperty;
