import React, { forwardRef } from "react";
import { Input } from "@heroui/react";
import styles from "@/styles/Container.module.scss";
const smallInputClass = { input: "h-[40px] px-[6px]", inputWrapper: "h-[40px]" };
const inputClass = { input: "h-[54px] px-[6px]", inputWrapper: "h-[54px]" };

interface InputPropsList extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  endContent?: React.ReactNode;
  withBorder?: boolean;
  isDisabled?: boolean;
  small?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputPropsList>(
  (
    {
      label,
      error,
      className,
      onChange,
      value,
      type,
      withBorder = true,
      placeholder,
      isInvalid,
      endContent,
      isDisabled,
      small = false,
    },
    ref
  ) => {
    const extraProps: {
      variant?: "bordered" | "flat" | "faded" | "underlined" | undefined;
    } = {};
    if (withBorder) {
      extraProps.variant = "bordered";
    }
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-1 text-sm font-medium">{label}</label>
        )}
        <Input
          ref={ref}
          classNames={small ? smallInputClass : inputClass}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e)}
          className={`w-full rounded-[12px]  ${className} ${styles.inputWrapper}`}
          value={value?.toString()}
          type={type}
          isInvalid={isInvalid}
          endContent={endContent}
          isDisabled={isDisabled}
          {...extraProps}
        />
        {error && <p className="text-sm text-secondary-red mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "Input";
export default InputField;
