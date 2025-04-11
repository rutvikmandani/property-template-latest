import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="bg-black text-white text-center py-8 px-8">
      <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto font-black text-secondary-pinkLight leading-tight mb-4">
        It all starts with a single conversation.
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-4">
        Building your real estate empire doesn’t have to be confusing, scary or
        overwhelming. If you have questions, want to start the process or just
        want some guidance, you can book a call on my calendar right here:
      </p>
      <div className="flex justify-center">
        <Link href="/contact-us">
          <button className="border-2 border-secondary-pinkLight text-white px-6 py-3 rounded-full hover:bg-secondary-pinkLight hover:text-black transition duration-300 flex items-center gap-2 text-lg font-medium">
            Schedule A Call
            <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
