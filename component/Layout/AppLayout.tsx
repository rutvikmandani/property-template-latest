"use client";

import React, { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { redirect } from "next/navigation";
import { FullPageLoader } from "../Loader";
import Sidebar from "./Sidebar";
import styles from "@/styles/Container.module.scss";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { hasToken } = useGlobalContext();

  // useEffect(() => {
  //   if(hasToken === false){
  //     redirect('/')
  //   }
  // }, [hasToken])
  // return hasToken === true ? (
  return true ? (
    <div className={`${styles.mainContainer} p-0 sm:p-8`}>
      <div
        className={`${styles.innerContent} flex flex-wrap lg:flex-nowrap gap-[20px] lg:gap-[40px]`}
      >
        <Sidebar />
        <div className="flex-grow-[1]">{children}</div>
      </div>
    </div>
  ) : (
    <FullPageLoader />
  );
}
