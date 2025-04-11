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

const menuStyle =
  "flex items-center gap-2 text-[16px] rounded-xl hover:bg-secondary-redBg font-medium text-white h-12 px-3";

const activeStyle = "bg-secondary-redBg rounded-xl";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setHasToken, setUser } = useGlobalContext();
  const {setIsLogged} = useLoginModalContext()

  const handleLogout = () => {
    setIsLogged(false)
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
    //     // globalServices.post("/logout")
    //     // .then(() => {
    //     //   setUser(null);
    //     //   setHasToken(false);
    //     //   logout();
    //     //   router.push("/");
    //     //   Swal.fire({
    //     //     title: "Logout!",
    //     //     text: "Logout Successfully",
    //     //     icon: "success",
    //     //     showConfirmButton: false,
    //     //     timer: 1500
    //     //   });
    //     // })
    //     // .catch((err) => {
    //     //   console.log("login error", err)
    //     // });
    //   }
    // });
  };

  return (
    <>
      <div
        className={`${styles.leftMenu}  top-[84px] bg-secondary-pinkLight sm:rounded-xl`}
      >
        <div className="menu-content">
          <ul className="flex flex-col gap-2 p-1 lg:p-4">
            <li className={`${pathname === "/my-profile" ? activeStyle : ""}`}>
              <Link href="/my-profile" className={menuStyle}>
                <FaRegUser size={18} />
                My Profile
              </Link>
            </li>
            <li
              className={`${pathname === "/my-favorites" ? activeStyle : ""}`}
            >
              <Link href="/my-favorites" className={menuStyle}>
                <RiHomeHeartLine size={20} />
                My Favorites
              </Link>
            </li>
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
