"use client";
import Skeleton from "@/component/Skeleton";
// import { globalServices } from "@/services/global.services";
import styles from "@/styles/Container.module.scss";
// import { useQuery } from "@tanstack/react-query";

const wrapperClass = "flex flex-col text-primary items-center gap-2";
const descriptionText = "max-w-2xl text-lg";
const titleText = "text-xl font-semibold mb-2 text-secondary-pinkLight";
const cardDesign = "shadow-custom rounded-xl bg-white p-4";
const topSection = `grid md:grid-cols-2 items-center grid md:grid-cols-2 gap-10 ${cardDesign}`;
const bottomSection = `grid md:grid-cols-2 gap-4`;

// async function fetchAbout() {
//   const res = await globalServices.getAll(`/about`);
//   return res;
// }

export default function AboutUs() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["excludedQueryKey", "about-us-detail"],
  //   queryFn: fetchAbout,
  //   staleTime: 1000 * 60 * 5,
  // });

  // const aboutData = data?.data?.data;

  const { data, isLoading } = {
    data: {
      id: "67ec14c0d21d8bcc1c07c9e2",
      user_id: 1903,
      banner_title: "Real Estate Brokers",
      banner_subtitle: null,
      vision:
        "Have a network of clients that have true financial freedom through our guidance and hard work. Full transparency and fluid communication. Always working towards our clients best interests. Honesty and integrity even after the deal is done. Trust that the reciprocation of value we bring will be considered.",
      mission:
        "To curb the stigma that people associate with your typical realtor, that they are perceived as a sleazy used car salesman looking to just make a deal without compassion or care, and that they are just paid too much for doing too little. We are the new generation of realtors that are in it to build trust and empower clients with knowledge to make the best financial decisions and work with them every step of the way. We are not just brokers, we are partners in the house hunting journey and we are here to share what we know while working vigorously to negotiate the best deal for our clients.",
      about_title: "Real Estate Brokers",
      about_description:
        "First and foremost, We would like to thank you for taking the time to visit our page. Here is a little about ourselves and the services that we offer, We are both family man who take pride in everything that we do and owe much of my success again to our family, clients and friends!",
      about_image:
        "https://s3.ca-central-1.amazonaws.com/mls-trreb/idx/about/images/1903/1744215306_kevin.jpg",
      created_at: "2025-04-01T16:30:56.659000Z",
      updated_at: "2025-04-09T16:15:06.879000Z",
    },
    isLoading: false,
  };

  const aboutData = data;

  return (
    <div className={`${styles.mainContainer} px-4 sm:px-10 py-10`}>
      <div className={`${styles.innerContent} flex flex-col gap-6`}>
        {isLoading ? (
          <>
            <div className={wrapperClass}>
              <Skeleton className="h-[45px] md:h-[60px] w-[250px] " />

              <Skeleton className="h-[27px] w-[250px] " />
            </div>

            {/* Image & Text Section */}
            <div className={topSection}>
              {/* Image Skeleton */}
              <Skeleton className="h-[200px] w-full " />

              {/* Title + Description Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-[45px] md:h-[60px] w-[200px] " />

                <Skeleton className="h-[27px] w-[250px] " />
              </div>
            </div>

            {/* Vision & Mission */}
            <div className={bottomSection}>
              <div className={cardDesign}>
                <Skeleton className="h-[200px] w-full " />
              </div>
              <div className={cardDesign}>
                <Skeleton className="h-[200px] w-full " />
              </div>
            </div>
          </>
        ) : aboutData ? (
          <>
            <div className={wrapperClass}>
              {aboutData?.banner_title && (
                <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]">
                  {aboutData.banner_title}
                </h1>
              )}
              {aboutData?.banner_subtitle && (
                <p className="text-[18px]">{aboutData.banner_subtitle}</p>
              )}
            </div>

            <div className={topSection}>
              {aboutData?.about_image && (
                <img
                  src={aboutData.about_image}
                  alt="About Us"
                  className="w-full rounded-xl shadow-custom object-cover"
                />
              )}

              <div className="space-y-4">
                {aboutData?.about_title && (
                  <h2 className={titleText}>{aboutData.about_title}</h2>
                )}
                <p className={descriptionText}>
                  {aboutData.about_description ?? "-"}
                </p>
              </div>
            </div>

            <div className={bottomSection}>
              <div className={cardDesign}>
                <h2 className={titleText}>Vision</h2>
                <p className={descriptionText}>{aboutData?.vision ?? "-"}</p>
              </div>
              <div className={cardDesign}>
                <h2 className={titleText}>Mission</h2>
                <p className={descriptionText}>{aboutData?.mission ?? "-"}</p>
              </div>
            </div>
          </>
        ) : (
          <strong className="block text-[24px] text-center my-10">
            No Data Found
          </strong>
        )}
      </div>
    </div>
  );
}
