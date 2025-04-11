import React, { useState } from "react";
import InputField from "../UIFields/InputField";
import SelectField from "../UIFields/SelectField";
import { TbZoomReset } from "react-icons/tb";
import Button from "../UIFields/Button";
import { FaArrowAltCircleRight } from "react-icons/fa";

const statusOptions = [
  { key: "For Sale", label: "For Sale" },
  { key: "For Lease", label: "For Rent" },
];

const typeOptions = [
  { key: "commercial", label: "Commercial" },
  { key: "condo", label: "Condo" },
  { key: "detached", label: "Detached" },
  { key: "semi-detached", label: "Semi-Detached" },
  { key: "townhouse", label: "Townhouse" },
];

const numberOptions = [
  { key: "1", label: "1+" },
  { key: "2", label: "2+" },
  { key: "3", label: "3+" },
  { key: "4", label: "4+" },
  { key: "5", label: "5+" },
  { key: "6", label: "6+" },
];

const priceList: string[] = [
  "0",
  "25k",
  "35k",
  "45k",
  "75k",
  "100k",
  "150k",
  "200k",
  "250k",
  "300k",
  "350k",
  "400k",
  "450k",
  "500k",
  "550k",
  "600k",
  "650k",
  "700k",
  "750k",
  "800k",
  "850k",
  "900k",
  "950k",
  "1M",
  "1.5M",
  "2M",
  "2.5M",
  "3M",
  "3.5M",
  "4M",
  "4.5M",
  "5M",
  "5.5M",
  "6M",
  "6.5M",
  "7M",
  "7.5M",
  "8M",
  "8.5M",
  "9M",
  "9.5M",
  "10M",
  "12M",
  "13M",
  "15M",
  "20M",
  "25M",
  "30M",
  "40M",
];

const ActionFields = () => {
  const [searchValue, setSearchValue] = useState({
    searchValue: "",
    transactionType: "Sale",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    minPrice: "",
    maxPrice: "",
  });

  const onChange = (key: string, value: string) => {
    setSearchValue((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mb-4 grid grid-cols-1 bg-white p-4 rounded-xl shadow-custom gap-4">
      <div className="grid  gap-4">
        <InputField
          value={searchValue?.searchValue}
          onChange={(e) => onChange("searchValue", e.target.value)}
          placeholder={"Enter a City, Neighborhood, Address, MLS"}
          small
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <SelectField
          disallowEmptySelection
          placeholder="Transaction Type"
          selectedKeys={[searchValue?.transactionType]}
          onChange={(event) => onChange("transactionType", event.target.value)}
          options={statusOptions}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Property Type"
          selectedKeys={[searchValue?.propertyType]}
          onChange={(event) => onChange("propertyType", event.target.value)}
          options={typeOptions}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Bedrooms"
          selectedKeys={[searchValue?.bedrooms]}
          onChange={(event) => onChange("bedrooms", event.target.value)}
          options={numberOptions}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Bathrooms"
          selectedKeys={[searchValue?.bathrooms]}
          onChange={(event) => onChange("bathrooms", event.target.value)}
          options={numberOptions}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Min Price"
          selectedKeys={[searchValue?.minPrice]}
          onChange={(event) => onChange("minPrice", event.target.value)}
          options={priceList.map((a) => ({ key: a, label: a }))}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Max Price"
          selectedKeys={[searchValue?.maxPrice]}
          onChange={(event) => onChange("maxPrice", event.target.value)}
          options={priceList.map((a) => ({ key: a, label: a }))}
          small
        />
      </div>
      <div className="flex w-full justify-between">
        <Button className="w-max">
          <TbZoomReset size={20} />
        </Button>
        <Button className="!bg-secondary-pinkLight px-10 h-[46px] rounded-full font-medium !text-20px text-white">
          Search
          <FaArrowAltCircleRight />
        </Button>
      </div>
    </div>
  );
};

export default ActionFields;
