"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-5 px-10">
      <div className="max-w-6xl mx-auto flex flex-row items-start sm:flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="https://s3.ca-central-1.amazonaws.com/mls-trreb/119/website/logo.png"
              className="md:w-auto z-1"
              alt="logo"
              width={105}
              height={45}
            />
          </Link>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold flex justify-start">
            Hetal Mehta | Realtor
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:4167317010">416-731-7010</a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail />
              <a href="mailto:hetal.toronto@gmail.com">
                hetal.toronto@gmail.com
              </a>
            </li>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Mississauga, Ontario, L4T 0A7</span>
            </div>
          </ul>
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 mt-6 text-center justify-center text-secondary-black2 text-xs flex gap-2">
        <p>Copyright@2025 Hetal Mehta | Powered By</p>
        <p className="font-bold">LOGO</p>
      </div>
    </footer>
  );
};

export default Footer;
