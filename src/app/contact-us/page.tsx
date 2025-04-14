"use client";
import ContactFields from "@/component/ContactFields";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useGlobalContext } from "@/context/GlobalContext";
import Skeleton from "@/component/Skeleton";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "@/styles/Container.module.scss";

const lineStyle = "flex items-center gap-2 text-[18px] leading-[28px]";

const ContactUs = () => {
  // const { configuration, isConfigurationLoading } = useGlobalContext();
  const { isConfigurationLoading } = useGlobalContext();

  // const { phone, email, address, agent_name } = configuration?.website || {};

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`px-6 py-8 flex flex-col gap-6 ${styles.innerContent}`}>
        <div className="flex flex-col text-primary items-center">
          <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]">
            Contact Us
          </h1>
          <p className="text-[18px]">
            {"We're here to help. Reach out anytime."}
          </p>
        </div>

        <div className="flex items-center justify-center ">
          <div className="w-full bg-white rounded-2xl shadow-custom overflow-hidden grid md:grid-cols-2">
            <div className="bg-secondary-pinkLight text-white py-10 px-6 flex gap-1 flex-col items-center justify-center">
              <Image
                src="/images/realtor.webp"
                alt="Profile"
                height={130}
                width={130}
                className="w-[130px] h-[130px] bg-white object-contain rounded-xl border border-secondary-black3"
              />
              {isConfigurationLoading ? (
                <Skeleton className="h-[44px] w-[150px] mb-3" />
              ) : (
                <h2 className="text-3xl font-medium pb-2">
                  {/* {agent_name} */}
                  Ashutosh Walia
                </h2>
              )}

              {isConfigurationLoading ? (
                <li className={lineStyle}>
                  <FiPhone size={18} />
                  <Skeleton className="h-[28px] w-[150px] " />
                </li>
              ) : (
                <a className={lineStyle} href={`tel:+16478084539`}>
                  {/* <a className={lineStyle} href={`tel:${phone}`}> */}
                  <FiPhone size={18} />
                  {/* {phone} */}
                  +16478084539
                </a>
              )}

              {isConfigurationLoading ? (
                <li className={lineStyle}>
                  <MdOutlineAttachEmail size={18} />
                  <Skeleton className="h-[28px] w-[150px] " />
                </li>
              ) : (
                <a
                  className={lineStyle}
                  href={`mailto:ashwaliarealty@gmail.com`}
                >
                  {/* <a className={lineStyle} href={`mailto:${email}`}> */}
                  <MdOutlineAttachEmail size={18} />
                  {/* {email} */}
                  ashwaliarealty@gmail.com
                </a>
              )}

              {isConfigurationLoading ? (
                <li className={lineStyle}>
                  <SlLocationPin size={18} />
                  <Skeleton className="h-[28px] w-[150px] " />
                </li>
              ) : (
                <div className={lineStyle}>
                  <SlLocationPin size={18} />
                  {/* <span>{address}</span> */}
                  {"Mississauga, Ontario, L4T 0A7"}
                </div>
              )}
              <div className="flex gap-2 mt-3">
                <FaFacebook size={18} className="cursor-pointer" />
                <FaInstagram size={18} className="cursor-pointer" />
              </div>
            </div>

            <div className="py-10 px-6">
              <ContactFields />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
