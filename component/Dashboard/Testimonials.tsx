import React from "react";
import styles from "@/styles/Container.module.scss";

const Testimonials = () => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Samantha Ray",
      review:
        "Absolutely amazing! The service was outstanding and I felt taken care of from start to finish.",
      role: "Marketing Manager",
    },
    {
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      name: "Jason Lee",
      review:
        "Professional and prompt support. I’d definitely recommend them to anyone looking for great service.",
      role: "Product Manager",
    },
    {
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Watson",
      review:
        "Fast, friendly, and exceeded all my expectations. Couldn’t be happier!",
      role: "CEO, Startup Co.",
    },
  ];
  return (
    <div className="text-center py-[25px] px-8 text-secondary-black2">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]  mb-2">
          What Our Clients Say
        </h1>
        <p>Real stories from real customers</p>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((a, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-2xl shadow-md text-center max-w-[440px] ${styles.cardWrapper}`}
          >
            <img
              src={a.img}
              alt="User"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className=" italic mb-4">{a.review}</p>
            <h4 className="font-semibold text-secondary-pinkLight text-lg">
              {a.name}
            </h4>
            <span className="text-sm ">{a.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
