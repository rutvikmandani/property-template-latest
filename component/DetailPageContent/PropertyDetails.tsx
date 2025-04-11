"use client";
import React, { useMemo } from "react";
import { GrLocation } from "react-icons/gr";
import { FaBed, FaBath } from "react-icons/fa";
import moment from "moment";
import { TiGroupOutline } from "react-icons/ti";
import { TbBuildings } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { LiaKeySolid } from "react-icons/lia";

const cardStyle = `bg-white shadow rounded-xl p-6`;

const PropertyDetails = ({
  CityRegion,
  UnparsedAddress,
  ListPrice,
  BathroomsTotalInteger,
  BedroomsAboveGrade,
  BedroomsBelowGrade,
  BedroomsTotal,
  LivingAreaRange,
  ListingKey,
  ListOfficeName,
  TaxAnnualAmount,
  PropertyType,
  TransactionType,
  City,
  DirectionFaces,
  Sewer,
  KitchensTotal,
  RoomsTotal,
  Cooling,
  Basement,
  HeatSource,
  HeatType,
  CoveredSpaces,
  GarageType,
  TaxYear,
  PostalCode,
  Country,
  CountyOrParish,
  ModificationTimestamp,
  OriginalEntryTimestamp,
  OccupantType,
  PossessionDetails,
  OtherStructures,
  ParkingTotal,
  ParkingSpaces,
  WaterSource,
  LotSizeSource,
  PoolFeatures,
  LotSizeRangeAcres,
  CrossStreet,
  PropertyFeatures,
  FireplaceYN,
  DenFamilyroomYN,
  SpecialDesignation,
  Waterfront,
  Topography,
  soldDetail,
}: any) => {
  const data = {
    Address: [
      { label: "Zip/Postal Code", value: PostalCode ?? "NA" },
      { label: "City", value: City ?? "NA" },
      { label: "Community", value: CityRegion ?? "NA" },
      { label: "State/County", value: CountyOrParish ?? "NA" },
      { label: "Country", value: Country ?? "NA" },
    ],
    "Listing Information": [
      { label: "MLS ID", value: ListingKey ?? "NA" },
      {
        label: "List",
        value: `$${(ListPrice ?? 0).toLocaleString("en-US")}`,
      },
      {
        label: "Original List",
        value: `$${(ListPrice ?? 0).toLocaleString("en-US")}`,
      },
      {
        label: "Contract Date",
        value: OriginalEntryTimestamp
          ? moment(OriginalEntryTimestamp).format("YYYY-MM-DD")
          : "NA",
      },
      { label: "Expiry Date", value: "NA" },
      {
        label: "Last Updated",
        value: ModificationTimestamp
          ? moment(ModificationTimestamp).format("YYYY-MM-DD")
          : "NA",
      },
      {
        label: "Taxes",
        value: `$${(TaxAnnualAmount ?? 0)?.toLocaleString("en-US")}`,
      },
      { label: "Tax Year", value: TaxYear ?? "NA" },
      { label: "PIN#", value: "NA" },
      { label: "Seller/Landlord Name", value: "NA" },
      { label: "Seller Property Info Statement", value: "NA" },
      { label: "Commission Co-Op Brokerage", value: "NA" },
      { label: "Contact After Expired", value: "NA" },
      { label: "Holdover", value: "NA" },
      { label: "Legal Description", value: "NA" },
      { label: "Status", value: "NA" },
      {
        label: "Possession Remarks",
        value: PossessionDetails ?? "NA",
      },
      { label: "Permission To Advertise", value: "NA" },
    ],
    "Property Information": [
      {
        label: "Bedrooms",
        value:
          BedroomsAboveGrade !== null && BedroomsBelowGrade !== null
            ? `${BedroomsAboveGrade}+${BedroomsBelowGrade}`
            : (BedroomsTotal ?? 0),
      },
      { label: "Bathrooms", value: BathroomsTotalInteger ?? 0 },
      { label: "Kitchens", value: KitchensTotal ?? "NA" },
      { label: "Fronting On", value: DirectionFaces ?? "NA" },
      { label: "Rooms", value: RoomsTotal ?? "NA" },
      { label: "A/C", value: getValue(Cooling) },
      {
        label: "Water Source",
        value: getValue(WaterSource),
      },
      { label: "Sewers", value: getValue(Sewer) },
      { label: "Heating Type", value: HeatType ?? "NA" },
      { label: "Heating Source", value: HeatSource ?? "NA" },
      {
        label: "Parking Drive Spaces",
        value: ParkingSpaces ?? "NA",
      },
      {
        label: "Total Parking Spaces",
        value: ParkingTotal ?? "NA",
      },
      { label: "Garage Type", value: GarageType ?? "NA" },
      {
        label: "Garage Parking Spaces",
        value: CoveredSpaces ?? "NA",
      },
      {
        label: "Other Structures",
        value: getValue(OtherStructures),
      },
      { label: "Dir/Cross St", value: CrossStreet ?? "NA" },
      { label: "Acres", value: LotSizeRangeAcres ?? "NA" },
      { label: "Pool", value: getValue(PoolFeatures) },
      { label: "Basement", value: getValue(Basement) },
      { label: "Lot Size Source", value: LotSizeSource ?? "NA" },
      { label: "Utilities-Cable", value: "NA" },
      { label: "Utilities-Hydro", value: "NA" },
      { label: "Utilities-Telephone", value: "NA" },
      { label: "Utilities-Gas", value: "NA" },
      { label: "Lot Size", value: "NA" },
      { label: "Water", value: "NA" },
      { label: "Exterior", value: "NA" },
      { label: "Drive", value: "NA" },
      { label: "Parking/Drive", value: "NA" },
    ],
    Waterfront: [
      {
        label: "Topography",
        value: getValue(Topography),
      },
      {
        label: "Waterfront",
        value: getValue(Waterfront),
      },
    ],
  };
  const quickFacts = [
    {
      label: "Listed By",
      value: ListOfficeName ?? "NA",
      icon: TiGroupOutline,
    },
    {
      label: "Property Type",
      value: PropertyType ?? "NA",
      icon: TbBuildings,
    },
    {
      label: "Property Status",
      value: TransactionType ?? "NA",
      icon: MdOutlineMapsHomeWork,
    },
    {
      label: "Starting Price From",
      value: `$${(ListPrice ?? 0).toLocaleString("en-US")}`,
      icon: IoPricetagsOutline,
    },
    {
      label: "Property Size",
      value: `${LivingAreaRange ?? 0} Sq Ft`,
      icon: TbArrowAutofitWidth,
    },
    { label: "Occupancy", value: OccupantType ?? "NA", icon: LiaKeySolid },
    {
      label: "Bedrooms",
      value: `${BedroomsAboveGrade !== null && BedroomsBelowGrade !== null ? `${BedroomsAboveGrade}+${BedroomsBelowGrade}` : (BedroomsTotal ?? 0)} Bedrooms`,
      icon: FaBed,
    },
    {
      label: "Bathrooms",
      value: `${BathroomsTotalInteger ?? 0} Bathrooms`,
      icon: FaBath,
    },
  ];

  const additionalFeatures = useMemo(() => {
    const features = [];
    if (DenFamilyroomYN) {
      features.push("Family Room");
    }
    if (FireplaceYN) {
      features.push("Fireplace/Stove");
    }
    if (PropertyFeatures && PropertyFeatures?.length > 0) {
      features.push(...PropertyFeatures);
    }
    return features;
  }, [PropertyFeatures, FireplaceYN, DenFamilyroomYN]);

  const extraInfo = {
    Features: additionalFeatures,
    "Special Designation": SpecialDesignation,
  };

  function getValue(value: string[]) {
    return !!value.length ? (value?.join(", ") ?? "NA") : "NA";
  }

  const getHeader = (name: string) => {
    return (
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-secondary-black3 pb-2">
        {name}
      </h3>
    );
  };

  return (
    <div className="bg-neutral rounded flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-between items-center py-4 sm:flex-row">
        <div className="flex flex-col gap-3 items-start">
          <h3 className="text-3xl font-bold">{CityRegion}</h3>
          <div className="location flex gap-1 items-center">
            <GrLocation className="min-w-4" size={16} />
            <div className="text-content">{UnparsedAddress}</div>
          </div>
        </div>
        <div className="price !text-[30px]">
          ${(ListPrice ?? 0).toLocaleString("en-US")}
        </div>
      </div>

      <div className="bg-secondary-black3 p-4 shadow rounded-xl">
        <h3 className="text-lg text-[16px] font-semibold">Description</h3>
        <p className="text-secondary-blackLight text-[14px] mt-2 text-sm">
          Conveniently located in the heart of North York, this one bedroom
          condo is one that cannot be beat. This amazing layout features a
          spacious open floor plan and a large open balcony; the perfect place
          to wind down after a long day. Everything you need is right at your
          doorstep with direct underground access to North York Centre Subway
          station, Loblaws, and countless restaurants and businesses. Travel
          through the city is easily accessible with both the 401 and DVP
          located in your backyard. This unit also features an extra long
          parking spot and two lockers. Amenities feature a fitness room,
          theatre, yoga room, billiards, party room, steam/sauna room, outdoor
          terrace, and guest suites. Some images have been virtually staged.
        </p>
      </div>
      <div className={cardStyle}>
        {getHeader("Quick Facts")}
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {quickFacts.map((item, j) => (
            <li
              key={j}
              className="grid grid-cols-[max-content_1fr] text-sm text-primary gap-2 items-center"
            >
              {<item.icon size={32} color={"#FF9090"} />}
              <div className="flex flex-col">
                <span className="font-medium">{item.label}</span>
                <span className="text-gray-500">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {Object.entries(data).map(([key, list], i) => (
        <div key={i} className={cardStyle}>
          {getHeader(key)}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-col-2">
            {list.map((item, j) => (
              <li
                key={j}
                className={`flex justify-between text-sm text-primary py-1 gap-1 ${j % 2 === 0 ? "md:border-r-2 md:border-secondary-black3 md:pr-2" : "md:pl-2"}`}
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-gray-500">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {Object.entries(extraInfo).map(([key, list], i) => (
        <div key={i} className={cardStyle}>
          {getHeader(key)}
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {list.map((feature: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-green-600">✔️</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {soldDetail && Array.isArray(soldDetail) && soldDetail.length > 0 && (
        <div className={cardStyle}>
          {getHeader("Sold History")}
          <p className="text-sm text-gray-600 mb-4">
            Listing records and last sold date for{" "}
            <strong>{UnparsedAddress}</strong>
          </p>

          <div className="overflow-auto rounded-lg border border-gray-200">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-left text-gray-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">MLS</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {soldDetail.map((detail, index) => (
                  <tr className="border-t" key={index + "-" + detail.ListPrice}>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {detail.ListingKey}
                    </td>
                    <td className="px-4 py-3">
                      {detail.ExpiredDate
                        ? moment(detail.ExpiredDate).format("MMM-DD-YYYY")
                        : ""}
                    </td>
                    <td className="px-4 py-3 font-semibold text-blue-600">
                      {detail.TransactionType}
                    </td>
                    <td className="px-4 py-3 font-semibold text-gray-900">
                      {detail?.ListPrice
                        ? `$${(detail?.ListPrice ?? 0).toLocaleString("en-US")}`
                        : "NA"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {UnparsedAddress && (
        <div className={cardStyle}>
          {getHeader("Map")}
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAP_KEY}&q=${encodeURIComponent(UnparsedAddress)}`}
            title="google map"
            height={400}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
