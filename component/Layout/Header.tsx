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

const buttonStyle = `flex cursor-pointer text-[14px] border-3 border-secondary-pinkLight font-medium px-2 py-1 rounded-full px-6 py-3 flex gap-1 items-center`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { configuration } = useGlobalContext();
  const { onOpen, setIsForgot, setIsLogin } = useLoginModalContext();

  const listMenuTabs = [
    "Residential",
    "Condo",
    "Commercial",
    "Open House",
    "Pre Construction",
  ];

  const navTabs = [
    {
      name: "Buy",
      subMenus: listMenuTabs,
      path: "",
    },
    {
      name: "Rent",
      subMenus: listMenuTabs,
      path: "",
    },
    {
      name: "Blogs",
      subMenus: [],
      path: "/blogs",
    },
    {
      name: "Useful Tools",
      subMenus: [],
      path: "/blogs",
    },
    {
      name: "About Us",
      subMenus: [],
      path: "/about-us",
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
              <Link href={a.path}>{getMenu(a)}</Link>
            ) : (
              getMenu(a)
            )}

            {!!a.subMenus.length && (
              <div className="h-0 group-hover:h-auto transition-all duration-300 overflow-hidden rounded-xl shadow">
                <ul className="lg:absolute left-0 cursor-pointe p-1 flex flex-col w-full lg:w-[200px] bg-white rounded-xl shadow-lg opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100 border border-secondary-black3">
                  {a.subMenus.map((a) => (
                    <Link
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
    onOpen();
  };

  const getButtons = () => {
    return (
      <>
        {/* <div className={buttonStyle} onClick={handleLogin}>
          Login
        </div> */}
        <Link href="/my-profile" className={buttonStyle}>
          User
        </Link>
        <Link href="/contact-us" className={buttonStyle}>
          Schedule A Call
          <FaLongArrowAltRight />
        </Link>
      </>
    );
  };

  return (
    <>
      <nav
        className={`bg-primary-light text-primary max-w-full py-5 w-full sticky px-10 top-0 ${styles.navbarWrapper}`}
      >
        <header className="container w-full max-w-full flex justify-between items-center">
          <Link href="/">
            <Image
              src="https://s3.ca-central-1.amazonaws.com/mls-trreb/119/website/logo.png"
              className="w-auto z-1"
              alt="logo"
              width={105}
              height={45}
            />
          </Link>

          <div className="hidden lg:flex flex-col">
            <ul className="hidden lg:flex space-x-6 items-center font-medium text-nav">
              {getTabSection()}
            </ul>
          </div>
          <div className="lg:hidden rounded bg-secondary-pinkLight p-2 flex">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose size={28} color="white" />
              ) : (
                <IoMenu size={28} color="white" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex gap-6">{getButtons()}</div>
        </header>

        {isOpen && (
          <ul
            className={`lg:hidden flex flex-col space-y-4 pt-4 ${
              isOpen ? styles.slideDownAnimation : styles.slideUpAnimation
            }`}
          >
            {getTabSection()}
            <div className="flex gap-6">{getButtons()}</div>
          </ul>
        )}
      </nav>
      <SignPopup />
      <AfterAfterSignPopup />
    </>
  );
};

export default Header;
