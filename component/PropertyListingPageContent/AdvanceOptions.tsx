import React, { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import SelectField from "../UIFields/SelectField";

function AdvanceOptions({
  selectedView,
  setSelectedView,
}: {
  selectedView: string;
  setSelectedView: (view: string) => void;
}) {
  const viewList = ["Grid", "Map"];
  const [sortType, setSortType] = useState("low-high");

  return (
    <div className="flex justify-between flex-wrap items-center gap-4 bg-white mb-4 p-4 shadow-custom rounded-xl">
      <div className="flex gap-2  ">
        {viewList.map((a) => (
          <button
            key={a}
            onClick={() => setSelectedView(a)}
            className={`shadow-custom rounded-xl p-3 ${a === selectedView && "bg-secondary-pinkLight"}`}
          >
            {a === "Map" ? <FaMapMarkedAlt /> : <IoGridOutline />}
          </button>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <div>Sort By:</div>
        <SelectField
          disallowEmptySelection
          placeholder="Sort"
          className="w-[160px]"
          selectedKeys={[sortType]}
          onChange={(event) => setSortType(event.target.value)}
          options={[
            { key: "low-high", label: "Price (Low-High)" },
            { key: "high-low", label: "Price (High-Low)" },
            { key: "new-old", label: "(New-Old)" },
            { key: "old-new", label: "(Old-New)" },
          ]}
          small
        />
      </div>
    </div>
  );
}

export default AdvanceOptions;
