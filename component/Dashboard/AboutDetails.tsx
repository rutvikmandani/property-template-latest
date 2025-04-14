import React from "react";
import styles from "@/styles/Container.module.scss";

const AboutDetails = () => {
  return (
    <div className={`${styles.mainContainer} ${styles.aboutInfo} md:p-10`}>
      <div className={styles.innerContent}>
        <div
          className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr] justify-items-center md:gap-7 bg-secondary-pinkLight md:bg-transparent`}
        >
          <img
            src="/images/realtor.webp"
            alt="banner"
            className="w-full bottom-0 max-w-[300px] pt-3 md:pt-0 items-center object-contain h-full"
          />
          <div className="flex flex-col gap-4 text-secondary-blackLight rounded-t-[24px] md:rounded-xl items-center text-center md:items-start md:text-start bg-white p-4">
            <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]">
              Hey, I'm Hetal!
            </h1>
            <p>
              With over a decade of experience in the real estate industry,
              Hetal Mehta is a seasoned professional and a proud REMAX
              Millennium agent. Specializing in both residential and commercial
              properties, Hetal’s expertise and dedication have helped countless
              clients find their dream homes and investment opportunities.
            </p>
            <p>
              Hetal’s approach is client-centered, focusing on understanding the
              unique needs and goals of each individual. This personalized
              service, combined with extensive market knowledge and negotiation
              skills, ensures a seamless and successful real estate experience.
              Whether you’re buying, selling, or investing, Hetal Mehta is
              committed to delivering exceptional results and making your real
              estate journey a rewarding one.
            </p>
            <p>
              Explore the possibilities with Hetal Mehta, your trusted advisor
              in real estate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
