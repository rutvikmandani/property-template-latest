"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { MdAttachEmail } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useGlobalContext } from "@/context/GlobalContext";
import Skeleton from "../Skeleton";

const lineStyle = "flex items-center gap-2";

const Footer = () => {
  const { configuration, isConfigurationLoading } = useGlobalContext();

  // const {
  //   footer_logo,
  //   facebook_url,
  //   instagram_url,
  //   phone,
  //   email,
  //   address,
  //   agent_name,
  // } = configuration?.website || {};

  return (
    <footer className="bg-white text-black py-5 px-10">
      <div className="max-w-6xl mx-auto flex flex-row items-start sm:flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex-shrink-0">
          {isConfigurationLoading ? (
            <Skeleton className="h-[200px] w-[200px] " />
          ) : (
            <Link href="/">
              {/* {footer_logo && (
                <Image
                  src={footer_logo}
                  width={200}
                  height={200}
                  alt="logo"
                  className="mb-5"
                />
              )} */}
              <Image
                src="https://s3.ca-central-1.amazonaws.com/mls-trreb/119/website/logo.png"
                className="md:w-auto z-1"
                alt="logo"
                width={105}
                height={45}
              />
            </Link>
          )}
        </div>

        <div className="text-center md:text-left space-y-4">
          {isConfigurationLoading ? (
            <Skeleton className="h-[28px] w-[200px] " />
          ) : (
            // agent_name && (
            <h3 className="text-xl font-semibold flex justify-start">
              {/* {agent_name} */}
              Hetal Mehta | Realtor
            </h3>
            // )
          )}
          <ul className="space-y-2">
            {isConfigurationLoading ? (
              <li className={lineStyle}>
                <FaPhoneAlt />
                <Skeleton className="h-[24px] w-[100px] " />
              </li>
            ) : (
              <a className={lineStyle} href={`tel:416-731-7010`}>
                {/* <a className={lineStyle} href={`tel:${phone}`}> */}
                <FaPhoneAlt />
                {/* {phone} */}
                416-731-7010
              </a>
            )}

            {isConfigurationLoading ? (
              <li className={lineStyle}>
                <MdEmail />
                <Skeleton className="h-[24px] w-[100px] " />
              </li>
            ) : (
              <a className={lineStyle} href={`mailto:hetal.toronto@gmail.com`}>
                {/* <a className={lineStyle} href={`mailto:${email}`}> */}
                <MdEmail />
                {/* {email} */}
                hetal.toronto@gmail.com
              </a>
            )}

            {isConfigurationLoading ? (
              <li className={lineStyle}>
                <MdAttachEmail />
                <Skeleton className="h-[24px] w-[100px] " />
              </li>
            ) : (
              <div className={lineStyle}>
                <MdAttachEmail />
                {/* <span>{address}</span> */}
                <span>Mississauga, Ontario, L4T 0A7</span>
              </div>
            )}
          </ul>
          <div className="flex space-x-4 text-xl">
            {/* {facebook_url && (
              <Link
                target="_blank"
                className="text-[14px] text-white me-2"
                href={`${facebook_url}`}
              > */}
            <FaFacebook className="cursor-pointer hover:text-gray-400" />
            {/* </Link>
            )}
            {instagram_url && (
              <Link
                target="_blank"
                className="text-[14px] text-white"
                href={`${instagram_url}`}
              > */}
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            {/* </Link>
            )} */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 mt-6 text-center justify-center text-secondary-black2 text-xs flex gap-2">
        <p>
          © RE/MAX Millennium Real Estate Brokerage Independently Owned &
          Operated || Real Estate Agent Website Designed By{" "}
          <span className="font-bold">LOGO</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
