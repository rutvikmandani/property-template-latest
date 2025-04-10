import ContactFields from "@/component/ContactFields";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { TbMessageUser } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const ContactUs = () => {
  return (
    <div className="px-6 py-10 flex flex-col gap-6">
      <div className="flex flex-col text-primary items-center">
        <h1 className="text-secondary-pinkLight font-bold text-[30px] md:text-[40px]">
          Contact Us
        </h1>
        <p className="text-[18px]">We're here to help. Reach out anytime.</p>
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow overflow-hidden grid md:grid-cols-2">
          <div className="bg-secondary-pinkLight text-white py-10 px-6 flex gap-1 flex-col">
            <h2 className="text-3xl font-medium pb-2">{"Ashutosh Walia"}</h2>
            <div className="flex gap-2 items-center">
              <SlLocationPin size={18} />
              <p className="text-[18px]">{"Mississauga, Ontario, L4T 0A7"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FiPhone size={18} />
              <p className="text-[18px]">{"ashwaliarealty@gmail.com"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <TbMessageUser size={18} />
              <p className="text-[18px]">{"+16478084539"}</p>
            </div>
          </div>

          <div className="py-10 px-6">
            <ContactFields />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
