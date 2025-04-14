"use client";
import { Switch } from "@heroui/react";
import React from "react";
import Button from "../UIFields/Button";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

const boxStyle = `bg-white shadow-custom rounded-xl p-6`;

const MyAlerts = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div className="px-4 sm:px-0 text-primary pb-4 sm:pb-0">
      <div className="text-[26px] font-semibold mb-4">My Alerts</div>
      <div className="grid md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className={boxStyle} key={index}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-secondary-black3 flex items-center justify-between pb-2">
              Neighbourhood Alert{" "}
              <Switch
                isSelected={isSelected}
                onValueChange={setIsSelected}
              ></Switch>
            </h3>
            <div className="grid grid-cols-[max-content_1fr] gap-4">
              <div>
                <h4>City:</h4>
                <h4>Areas:</h4>
                <h4>Listing Type(s):</h4>
                <h4>Frequency:</h4>
              </div>
              <div>
                <h4>Toronto, ON, Canada</h4>
                <h4>Brampton North</h4>
                <h4>Commercial, Condo</h4>
                <h4>Daily</h4>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t-2 border-secondary-black3 pt-2">
              <Link
                href={`/new-listing?listingType=${"Neighbourhood Alert"}&id=${index}`}
              >
                <Button>
                  <FaRegEdit />
                  Edit{" "}
                </Button>
              </Link>
              <Button>
                <AiOutlineDelete />
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAlerts;
