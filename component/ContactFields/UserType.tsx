"use client";
import React, { useState } from "react";
import Button from "../UIFields/Button";

const UserType = () => {
  const [selectedType, setSelectedType] = useState("Buyer & Seller");

  return (
    <div className="flex flex-col text-[14px] gap-1">
      <p className="font-medium text-primary">I AM A (select up to 2 categories)</p>
      <div className="grid grid-cols-4 gap-3 flex-wrap">
        {["Buyer", "Seller", "Renter", "Other"].map((type) => (
          <label key={type} className="flex items-center gap-2 cursor-pointer">
            <Button className="!bg-transparent !text-black border border-secondary-pinkLight !px-4 w-full min-w-max">{type}</Button>
          </label>
        ))}
      </div>
    </div>
  );
};

export default UserType;
