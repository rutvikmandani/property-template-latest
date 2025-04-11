"use client";

import React from "react";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import styles from "@/styles/Container.module.scss";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import SignPopup from "@/component/SignPopup";
import AfterAfterSignPopup from "@/component/AfterSignPopup";
import { useGlobalContext } from "@/context/GlobalContext";
import { useLoginModalContext } from "@/context/LoginModalContext";
import Skeleton from "../Skeleton";
import { alertsList, listMenuTabs } from "@/lib/Constant";

const buttonStyle = `flex cursor-pointer text-[14px] border-3 border-secondary-pinkLight font-medium px-2 py-1 rounded-full px-6 py-3 flex gap-1 items-center`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    configuration,
    hasToken,
    user,
    isUserDataLoading,
    isConfigurationLoading,
  } = useGlobalContext();
  const { onOpen, setIsForgot, setIsLogin, logged } = useLoginModalContext();

  const navTabs = [
    {
      name: "Home",
      subMenus: [],
      path: "/",
    },
    {
      name: "Listings",
      subMenus: listMenuTabs,
      path: "",
    },
    {
      name: "Useful Tools",
      subMenus: alertsList,
      path: "/blogs",
    },
    {
      name: "About Us",
      subMenus: [],
      path: "/about-us",
    },
    {
      name: "Blogs",
      subMenus: [],
      path: "/blogs",
    },
    {
      name: "Contact Us",
      subMenus: [],
      path: "/contact-us",
    },
  ];

  const getMenu = (data: {
    name: string;
    subMenus: string[];
    path: string;
  }) => {
    return (
      <button
        className={`flex items-center gap-1 w-full hover:text-secondary-pinkLight ${styles.navName}`}
      >
        {data.name}{" "}
        {!!data.subMenus.length && <MdOutlineArrowDropDown color="#000" />}
      </button>
    );
  };

  const getTabSection = () => {
    return (
      <>
        {navTabs.map((a, index) => (
          <li className={`relative group ${styles.navItem}`} key={index}>
            {a.path?.length > 0 ? (
              <Link href={a.path} onClick={dropDownClose}>
                {getMenu(a)}
              </Link>
            ) : (
              getMenu(a)
            )}

            {!!a.subMenus.length && (
              <div className="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden rounded-xl shadow-custom">
                <ul className="lg:absolute left-0 cursor-pointe p-1 flex flex-col w-full lg:w-[200px] bg-white rounded-xl shadow-custom opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100 border border-secondary-black3">
                  {a.subMenus.map((a) => (
                    <Link
                      onClick={dropDownClose}
                      href={`/property-list?listingType=${a}`}
                      key={a}
                      className="px-4 py-2 hover:bg-secondary-pinkLight hover:text-white rounded-xl"
                    >
                      {a}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </>
    );
  };

  const handleLogin = () => {
    localStorage.removeItem("fromSoldHistory");
    setIsForgot(false);
    setIsLogin(true);
    dropDownClose();
    onOpen();
  };

  const dropDownClose = () => {
    console.log("first");
    setIsOpen(false);
  };

  const getButtons = () => {
    return (
      <>
        {/* {hasToken ? ( */}
        {logged ? (
          <div className={`${buttonStyle} !py-0 !px-0`}>
            {isUserDataLoading ? (
              <Skeleton className="h-10 mx-6 min-w-[100px] " />
            ) : (
              <Link
                className="w-full h-full flex px-6 items-center"
                onClick={dropDownClose}
                href="/my-profile"
              >
                {/* {user?.avatar && (
                  <Image
                    className={`rounded-full me-4 ${styles.profileLogo}`}
                    width={40}
                    height={40}
                    src={user?.avatar}
                    alt="profile"
                  />
                )}
                {user?.name} */}
                User
              </Link>
            )}
          </div>
        ) : (
          <div className={buttonStyle} onClick={handleLogin}>
            Login
          </div>
        )}
        <Link
          onClick={dropDownClose}
          href="/contact-us"
          className={`${buttonStyle} hidden md:flex`}
        >
          Schedule A Call
          <FaLongArrowAltRight />
        </Link>
      </>
    );
  };

  return (
    <>
      <nav
        className={`bg-primary-light text-primary max-w-full py-5 w-full sticky px-10 top-0 shadow-custom ${styles.navbarWrapper}`}
      >
        <header className="container w-full max-w-full flex  gap-1 justify-between items-center">
          {isConfigurationLoading ? (
            <Skeleton className="h-[45px] w-[140px]" />
          ) : // ) : configuration?.website?.logo ? (
          true ? (
            <Link href="/" onClick={dropDownClose}>
              {/* <Image
                style={{
                  maxHeight: "45px",
                  minWidth: "105px",
                  objectFit: "cover",
                }}
                src={configuration?.website?.logo ?? ""}
                width={105}
                height={45}
                alt="logo"
              /> */}
              <Image
                src="https://s3.ca-central-1.amazonaws.com/mls-trreb/119/website/logo.png"
                className="w-auto z-1"
                alt="logo"
                width={105}
                height={45}
              />
            </Link>
          ) : (
            <div></div>
          )}

          <div className="hidden lg:flex flex-col">
            <ul className="hidden lg:flex space-x-6 items-center font-medium text-nav">
              {getTabSection()}
            </ul>
          </div>
          <div className="lg:hidden flex gap-2 sm:gap-4">
            <div className="flex gap-4">{getButtons()}</div>
            <button
              className="bg-secondary-pinkLight p-2 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <IoClose size={28} color="white" />
              ) : (
                <IoMenu size={28} color="white" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex gap-4">{getButtons()}</div>
        </header>

        {isOpen && (
          <ul
            className={`lg:hidden flex flex-col space-y-4 pt-4 ${
              isOpen ? styles.slideDownAnimation : styles.slideUpAnimation
            }`}
          >
            {getTabSection()}
          </ul>
        )}
      </nav>
      <SignPopup />
      <AfterAfterSignPopup />
    </>
  );
};

export default Header;
