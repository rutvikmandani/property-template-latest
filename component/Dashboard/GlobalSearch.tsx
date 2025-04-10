import React, { useEffect, useState } from "react";
import InputField from "../UIFields/InputField";
import Button from "../UIFields/Button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Container.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";

const GlobalSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [isOptionShow, setIsOptionShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsOptionShow(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`h-[410px] relative top-0 left-0 overflow-hidden w-full sm:h-[500px] md:h-[calc(100vh-100px)]`}
    >
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-1 w-full bg-primary-opacity5 top-0 left-0 w-full flex items-center flex-col gap-2 justify-center h-full">
        <div className="grid  w-full px-8 gap-3 py-2 md:py-14 flex-col md:grid-cols-[max-content_auto_max-content] items-center max-w-7xl">
          <div className="flex justify-center items-center">
            <div className="flex flex-row md:flex-col items-center justify-center gap-2 relative">
              <AnimatePresence>
                {isOptionShow && (
                  <motion.button
                    key="btn1"
                    initial={
                      !isMobile ? { opacity: 0, y: 0 } : { opacity: 0, x: 0 }
                    }
                    animate={
                      !isMobile
                        ? { opacity: 1, y: -50 }
                        : { opacity: 1, x: -120 }
                    }
                    exit={
                      !isMobile ? { opacity: 0, y: 0 } : { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute bg-secondary-pinkLight text-white px-6 py-1 rounded-full"
                  >
                    Buy
                  </motion.button>
                )}
              </AnimatePresence>

              <Button
                onPress={() => setIsOptionShow((prev) => !prev)}
                className="!bg-secondary-pinkLight px-10 h-[46px] rounded-full font-medium !text-20px text-white"
              >
                {selectedOption}{" "}
                {isOptionShow ? (
                  <MdOutlineHorizontalRule />
                ) : (
                  <IoIosArrowDown />
                )}
              </Button>

              <AnimatePresence>
                {isOptionShow && (
                  <motion.button
                    key="btn3"
                    animate={
                      !isMobile ? { opacity: 1, y: 50 } : { opacity: 1, x: 120 }
                    }
                    initial={
                      !isMobile ? { opacity: 0, y: 0 } : { opacity: 0, x: 0 }
                    }
                    exit={
                      !isMobile ? { opacity: 0, y: 0 } : { opacity: 0, x: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      setSelectedOption("Rent");
                      setIsOptionShow(false);
                    }}
                    className="absolute bg-secondary-pinkLight text-white px-6 py-1 rounded-full"
                  >
                    Rent
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          <InputField
            value={searchValue}
            className={styles.globalSearch}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={"Enter a City, Neighborhood, Address, MLS"}
          />
          <Button className="!bg-secondary-pinkLight px-10 h-[46px] rounded-full font-medium !text-20px text-white">
            Search
            <FaArrowAltCircleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
