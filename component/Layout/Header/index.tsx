"use client";

import React from "react";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Link from "next/link";
import styles from "@/styles/Container.module.scss";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const buttonStyle = `hidden lg:flex cursor-pointer text-[14px] border-3 border-secondary-pinkLight font-medium px-2 py-1 rounded-full px-6 py-3 flex gap-1`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <button className={`flex items-center gap-1 w-full hover:text-secondary-pinkLight ${styles.navName}`}>
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
                <ul className="lg:absolute left-0 mt-2 cursor-pointe p-1 flex flex-col w-full lg:w-[200px] bg-white rounded-xl shadow-lg opacity-0 scale-y-0 origin-top transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-100">
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

  return (
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
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
        <div className="hidden lg:flex gap-6">
          <div className={buttonStyle}>Login</div>
          <div className={buttonStyle}>
            Schedule A Call
            <span>→</span>
          </div>
        </div>
      </header>

      {isOpen && (
        <ul
          className={`lg:hidden flex flex-col space-y-4 py-4 ${
            isOpen ? styles.slideDownAnimation : styles.slideUpAnimation
          }`}
        >
          {getTabSection()}
          <div className="flex gap-6">
            <div className=" cursor-pointer text-[14px] border-3 border-secondary-pinkLight font-medium px-2 py-1 rounded-full px-6 py-3">
              Login
            </div>
            <div className=" cursor-pointer text-[14px] border-3 border-secondary-pinkLight font-medium px-2 py-1 rounded-full px-6 py-3">
              Schedule A Call
              <span>→</span>
            </div>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Header;
