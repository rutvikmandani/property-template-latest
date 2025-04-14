"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { RiHomeHeartLine } from "react-icons/ri";
import styles from "@/styles/Container.module.scss";
import Swal from "sweetalert2";
import { globalServices } from "@/services/global.services";
import { logout } from "@/utils/common";
import { useGlobalContext } from "@/context/GlobalContext";
import { useLoginModalContext } from "@/context/LoginModalContext";
import { HiOutlineBellAlert } from "react-icons/hi2";

const menuStyle =
  "flex items-center gap-2 text-[16px] rounded-xl hover:bg-secondary-redBg font-medium text-white h-12 px-3";

const activeStyle = "bg-secondary-redBg rounded-xl";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setHasToken, setUser } = useGlobalContext();
  const { setIsLogged } = useLoginModalContext();

  const tabsList = [
    {
      icon: <FaRegUser size={18} />,
      title: "My Profile",
      link: "/my-profile",
    },
    {
      icon: <RiHomeHeartLine size={18} />,
      title: "My Favorites",
      link: "/my-favorites",
    },
    {
      icon: <HiOutlineBellAlert size={18} />,
      title: "My Alerts",
      link: "/my-alerts",
    },
  ];

  const handleLogout = () => {
    setIsLogged(false);

    // Swal.fire({
    //   title: "Ready to leave?",
    //   text: "You will be logged out of your account.",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#ef4444",
    //   cancelButtonColor: "#22c55e",
    //   confirmButtonText: "Logout",
    //   cancelButtonText: "Stay",
    //   reverseButtons: true,
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     globalServices
    //       .post("/logout")
    //       .then(() => {
    //         setUser(null);
    //         setHasToken(false);
    //         logout();
    //         router.push("/");
    //         Swal.fire({
    //           title: "Logout!",
    //           text: "Logout Successfully",
    //           icon: "success",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log("login error", err);
    //       });
    //   }
    // });
  };

  return (
    <>
      <div
        className={`${styles.leftMenu} top-[84px] sm:top-[91px] bg-secondary-pinkLight sm:rounded-xl`}
      >
        <div className="menu-content">
          <ul className="flex flex-col gap-2 p-4 lg:p-4">
            {tabsList.map((tab, index) => (
              <li
                key={index}
                className={`${pathname === tab.link ? activeStyle : ""}`}
              >
                <Link href={tab.link} className={menuStyle}>
                  {tab.icon}
                  {tab.title}
                </Link>
              </li>
            ))}

            <button onClick={handleLogout} className={menuStyle}>
              <SlLogout size={20} />
              Logout
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
