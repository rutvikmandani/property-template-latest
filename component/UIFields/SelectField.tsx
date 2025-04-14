import React, { forwardRef } from "react";
import { Select, SelectItem } from "@heroui/react";
import styles from "@/styles/Container.module.scss";

const smallSelectClass = { innerWrapper: "px-[6px]", trigger: "h-[40px]" };
const selectClass = { innerWrapper: "px-[6px]", trigger: "h-[54px]" };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { key: string; label: string }[];
  label?: string;
  placeholder?: string;
  error?: string;
  disallowEmptySelection?: boolean;
  selectedKeys?: string[] | number[];
  small?: boolean;
  selectionMode?: "single" | "multiple";
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      placeholder = "Select an option",
      error,
      className,
      onChange,
      disallowEmptySelection,
      selectedKeys,
      small = false,
      selectionMode = "single",
    },
    ref
  ) => {
    return (
      <div className="relative">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}

        <Select
          classNames={small ? smallSelectClass : selectClass}
          disallowEmptySelection={disallowEmptySelection}
          variant="bordered"
          selectedKeys={selectedKeys}
          placeholder={placeholder}
          className={`appearance-none rounded-[12px]
              ${className} ${styles.selectWrapper} selectWrapper`}
          onChange={(e) => {
            onChange?.(e);
          }}
          selectionMode={selectionMode}
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>

        {error && <p className="text-sm text-secondary-red mt-1">{error}</p>}
      </div>
    );
  }
);

SelectField.displayName = "Select";
export default SelectField;
