"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import InputField from "../UIFields/InputField";
import SelectField from "../UIFields/SelectField";
import { Slider } from "@heroui/react";
import Button from "../UIFields/Button";
import { useLoginModalContext } from "@/context/LoginModalContext";
import styles from "@/styles/Container.module.scss";

const marks = [
  {
    value: 1,
    label: "1%",
  },
  {
    value: 20,
    label: "10%",
  },
  {
    value: 40,
    label: "20%",
  },
  {
    value: 60,
    label: "30%",
  },
  {
    value: 80,
    label: "40%",
  },
  {
    value: 100,
    label: "Max",
  },
];

const NewListingPageContent = () => {
  const searchParams = useSearchParams();
  const listingType = searchParams.get("listingType") ?? "";
  const existingId = searchParams.get("id") ?? "";
  const { onOpen, setIsForgot, setIsLogin, logged } = useLoginModalContext();

  const [fieldsValue, setFieldsValue] = React.useState({
    type: "",
    location: "",
    transactionType: "",
    basement: "",
    garageSpace: "",
    squareFeet: "",
    bathrooms: "",
    bedrooms: "",
    minPrice: "",
    maxPrice: "",
    daysOnMarket: "",
    openHouse: "",
    priceDrop: [20, 40],
  });

  const fieldList = [
    {
      name: "Property Type",
      placeholder: "Property Type",
      key: "type",
      options: [
        { key: "commercial", label: "Commercial" },
        { key: "condo", label: "Condo" },
        { key: "detached", label: "Detached" },
        { key: "semi-detached", label: "Semi-Detached" },
        { key: "townhouse", label: "Townhouse" },
      ],
    },

    {
      name: "Transaction Type",
      placeholder: "Transaction Type",
      key: "transactionType",
      options: [
        { key: "For Sale", label: "For Sale" },
        { key: "For Lease", label: "For Rent" },
      ],
    },
    {
      name: "Basement",
      placeholder: "Basement",
      key: "basement",
      options: [
        { key: "finished", label: "Finished" },
        { key: "unfinished", label: "Unfinished" },
        { key: "partiallyFinished", label: "Partially Finished" },
        { key: "crawlSpace", label: "Crawl Space" },
        { key: "walkOut", label: "Walk Out" },
        { key: "full", label: "Full" },
        { key: "other", label: "Other" },
      ],
    },
    {
      name: "Garage Space",
      placeholder: "Garage Space",
      key: "garageSpace",
      options: [
        { key: "1", label: "1" },
        { key: "2", label: "2" },
        { key: "3", label: "3" },
        { key: "4", label: "4" },
        { key: "5+", label: "5+" },
      ],
    },
    {
      name: "Square Feet",
      placeholder: "Square Feet",
      key: "squareFeet",
      options: [
        { key: "500+sqft", label: "500+ sqft" },
        { key: "750+sqft", label: "750+ sqft" },
        { key: "1000+sqft", label: "1000+ sqft" },
        { key: "1250+sqft", label: "1250+ sqft" },
        { key: "1500+sqft", label: "1500+ sqft" },
        { key: "1750+sqft", label: "1750+ sqft" },
        { key: "2000+sqft", label: "2000+ sqft" },
        { key: "2250+sqft", label: "2250+ sqft" },
        { key: "2500+sqft", label: "2500+ sqft" },
        { key: "2750+sqft", label: "2750+ sqft" },
        { key: "3000+sqft", label: "3000+ sqft" },
        { key: "3250+sqft", label: "3250+ sqft" },
        { key: "3500+sqft", label: "3500+ sqft" },
      ],
    },
    {
      name: "Bathrooms",
      placeholder: "Bathrooms",
      key: "bathrooms",
      options: [
        { key: "1", label: "1+" },
        { key: "2", label: "2+" },
        { key: "3", label: "3+" },
        { key: "4", label: "4+" },
        { key: "5", label: "5+" },
        { key: "6", label: "6+" },
      ],
    },
    {
      name: "Bedrooms",
      placeholder: "Bedrooms",
      key: "bedrooms",
      options: [
        { key: "1", label: "1+" },
        { key: "2", label: "2+" },
        { key: "3", label: "3+" },
        { key: "4", label: "4+" },
        { key: "5", label: "5+" },
        { key: "6", label: "6+" },
      ],
    },
    {
      name: "Min Price",
      placeholder: "Min Price",
      key: "minPrice",
      options: [
        { key: "0", label: "0" },
        { key: "25k", label: "25k" },
        { key: "35k", label: "35k" },
        { key: "45k", label: "45k" },
        { key: "75k", label: "75k" },
        { key: "100k", label: "100k" },
        { key: "150k", label: "150k" },
        { key: "200k", label: "200k" },
        { key: "250k", label: "250k" },
        { key: "300k", label: "300k" },
        { key: "350k", label: "350k" },
        { key: "400k", label: "400k" },
        { key: "450k", label: "450k" },
        { key: "500k", label: "500k" },
        { key: "550k", label: "550k" },
        { key: "600k", label: "600k" },
        { key: "650k", label: "650k" },
        { key: "700k", label: "700k" },
        { key: "750k", label: "750k" },
        { key: "800k", label: "800k" },
        { key: "850k", label: "850k" },
        { key: "900k", label: "900k" },
        { key: "950k", label: "950k" },
        { key: "1M", label: "1M" },
        { key: "1.5M", label: "1.5M" },
        { key: "2M", label: "2M" },
        { key: "2.5M", label: "2.5M" },
        { key: "3M", label: "3M" },
        { key: "3.5M", label: "3.5M" },
        { key: "4M", label: "4M" },
        { key: "4.5M", label: "4.5M" },
        { key: "5M", label: "5M" },
        { key: "5.5M", label: "5.5M" },
        { key: "6M", label: "6M" },
        { key: "6.5M", label: "6.5M" },
        { key: "7M", label: "7M" },
        { key: "7.5M", label: "7.5M" },
        { key: "8M", label: "8M" },
        { key: "8.5M", label: "8.5M" },
        { key: "9M", label: "9M" },
        { key: "9.5M", label: "9.5M" },
        { key: "10M", label: "10M" },
        { key: "12M", label: "12M" },
        { key: "13M", label: "13M" },
        { key: "15M", label: "15M" },
        { key: "20M", label: "20M" },
        { key: "25M", label: "25M" },
        { key: "30M", label: "30M" },
        { key: "40M", label: "40M" },
      ],
    },
    {
      name: "Max Price",
      placeholder: "Max Price",
      key: "maxPrice",
      options: [
        { key: "0", label: "0" },
        { key: "25k", label: "25k" },
        { key: "35k", label: "35k" },
        { key: "45k", label: "45k" },
        { key: "75k", label: "75k" },
        { key: "100k", label: "100k" },
        { key: "150k", label: "150k" },
        { key: "200k", label: "200k" },
        { key: "250k", label: "250k" },
        { key: "300k", label: "300k" },
        { key: "350k", label: "350k" },
        { key: "400k", label: "400k" },
        { key: "450k", label: "450k" },
        { key: "500k", label: "500k" },
        { key: "550k", label: "550k" },
        { key: "600k", label: "600k" },
        { key: "650k", label: "650k" },
        { key: "700k", label: "700k" },
        { key: "750k", label: "750k" },
        { key: "800k", label: "800k" },
        { key: "850k", label: "850k" },
        { key: "900k", label: "900k" },
        { key: "950k", label: "950k" },
        { key: "1M", label: "1M" },
        { key: "1.5M", label: "1.5M" },
        { key: "2M", label: "2M" },
        { key: "2.5M", label: "2.5M" },
        { key: "3M", label: "3M" },
        { key: "3.5M", label: "3.5M" },
        { key: "4M", label: "4M" },
        { key: "4.5M", label: "4.5M" },
        { key: "5M", label: "5M" },
        { key: "5.5M", label: "5.5M" },
        { key: "6M", label: "6M" },
        { key: "6.5M", label: "6.5M" },
        { key: "7M", label: "7M" },
        { key: "7.5M", label: "7.5M" },
        { key: "8M", label: "8M" },
        { key: "8.5M", label: "8.5M" },
        { key: "9M", label: "9M" },
        { key: "9.5M", label: "9.5M" },
        { key: "10M", label: "10M" },
        { key: "12M", label: "12M" },
        { key: "13M", label: "13M" },
        { key: "15M", label: "15M" },
        { key: "20M", label: "20M" },
        { key: "25M", label: "25M" },
        { key: "30M", label: "30M" },
        { key: "40M", label: "40M" },
      ],
    },
    {
      name: "Days On Market",
      placeholder: "Days On Market",
      key: "daysOnMarket",
      options: [
        { key: "7+", label: "7+ Days" },
        { key: "14+", label: "14+ Days" },
        { key: "30+", label: "30+ Days" },
        { key: "60+", label: "60+ Days" },
      ],
      display: [
        "New Listings Alerts",
        "Open House Alerts",
        "Price Drop Alerts",
      ].includes(listingType),
    },
    {
      name: "Open House",
      placeholder: "Open House",
      key: "openHouse",
      options: [
        { key: "7+", label: "7+ Days" },
        { key: "14+", label: "14+ Days" },
        { key: "30+", label: "30+ Days" },
        { key: "60+", label: "60+ Days" },
      ],
      display: ["Open House Alerts"].includes(listingType),
    },
    {
      name: "Alert Frequency",
      placeholder: "Alert Frequency",
      key: "alertFrequency",
      options: [
        { key: "7+", label: "7+ Days" },
        { key: "14+", label: "14+ Days" },
        { key: "30+", label: "30+ Days" },
        { key: "60+", label: "60+ Days" },
      ],
    },
  ].filter(({ display = true }) => display);

  const onChange = (key: string, value: any) => {
    setFieldsValue((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmitClick = () => {
    if (logged) return;
    localStorage.removeItem("fromSoldHistory");
    setIsForgot(false);
    setIsLogin(true);
    onOpen();
  };

  return (
    <div className={`${styles.mainContainer} !bg-secondary-bg px-4 sm:px-10 py-10`}>
      <div
        className={`max-w-[750px] w-full bg-white flex flex-col gap-4 rounded-xl p-4 text-[#212529] shadow-custom`}
      >
        <h1 className="text-secondary-pinkLight underline underline-offset-4 text-center font-bold text-[30px] md:text-[40px] mb-2">
          Customize Your {listingType}
        </h1>
        <InputField
          value={fieldsValue?.location}
          onChange={(e) => onChange("location", e.target.value)}
          placeholder={"Enter a City, Neighborhood, Address, MLS"}
          small
        />
        {fieldList.map((a, index) => (
          <SelectField
            key={index}
            selectionMode={a.key === "type" ? "multiple" : "single"}
            disallowEmptySelection
            placeholder={a.placeholder}
            selectedKeys={
              a.key === "type"
                ? fieldsValue?.[a.key].split(",")
                : [fieldsValue[a.key as keyof typeof fieldsValue] as string]
            }
            onChange={(event) => onChange(a.key, event.target.value)}
            options={a.options}
            small
          />
        ))}

        {"Price Drop Alerts" === listingType && (
          <div className="flex flex-col gap-2">
            <div className="font-medium">{`Price Drop (${fieldsValue?.priceDrop[0]}% - ${fieldsValue?.priceDrop[1]}%):`}</div>
            <Slider
              className="w-full"
              value={fieldsValue?.priceDrop}
              formatOptions={{ style: "percent" }}
              onChange={(value) => onChange("priceDrop", value)}
              marks={marks}
              maxValue={100}
              minValue={1}
              size="sm"
            />
          </div>
        )}
        <Button
          onPress={onSubmitClick}
          className="idx-button text-white bg-secondary-pinkLight mt-4"
        >
          {existingId ? "Update" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default NewListingPageContent;
