import React, { useState } from "react";
import InputField from "../UIFields/InputField";
import SelectField from "../UIFields/SelectField";

const ActionFields = () => {
  const [searchValue, setSearchValue] = useState({
    city: "",
    type: "Sale",
    price: "",
    bathBeds: "",
    propertyType: "",
  });

  const onChange = (key: string, value: string) => {
    setSearchValue((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 bg-white p-4 rounded-xl shadow-custom gap-4">
      <div className="grid grid-cols-[67%_30%] gap-4">
        <InputField
          value={searchValue?.city}
          className={`bg-fieldBg border-none !mr-4`}
          onChange={(e) => onChange("city", e.target.value)}
          placeholder={"Enter a City, Neighborhood, Address, MLS"}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Country Code"
          selectedKeys={[searchValue?.type]}
          onChange={(event) => onChange("type", event.target.value)}
          options={[
            { key: "sale", label: "Sale" },
            { key: "lease", label: "Lease" },
          ]}
          small
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <SelectField
          disallowEmptySelection
          placeholder="Price"
          selectedKeys={[searchValue?.price]}
          onChange={(event) => onChange("price", event.target.value)}
          options={[
            { key: "sale", label: "Sale" },
            { key: "lease", label: "Lease" },
          ]}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Beds & Baths"
          selectedKeys={[searchValue?.bathBeds]}
          onChange={(event) => onChange("bathBeds", event.target.value)}
          options={[
            { key: "sale", label: "Sale" },
            { key: "lease", label: "Lease" },
          ]}
          small
        />
        <SelectField
          disallowEmptySelection
          placeholder="Home Type"
          selectedKeys={[searchValue?.propertyType]}
          onChange={(event) => onChange("propertyType", event.target.value)}
          options={[
            { key: "sale", label: "Sale" },
            { key: "lease", label: "Lease" },
          ]}
          small
        />
      </div>
    </div>
  );
};

export default ActionFields;
