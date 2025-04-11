"use client";

import { globalServices } from "@/services/global.services";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2";
import InputField from "../UIFields/InputField";
import Button from "../UIFields/Button";

const initialFormState = {
  old_password: "",
  password: "",
  password_confirmation: "",
};

const initialVisibleState = {
  old_password: false,
  password: false,
  password_confirmation: false,
};

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [visible, setVisible] = useState(initialVisibleState);
  const [errors, setErrors] = useState(initialFormState);

  const resetForm = () => {
    setFormData(initialFormState);
    setVisible(initialVisibleState);
  };

  const handleValueChange = (
    name: keyof typeof initialFormState,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleVisibility = (name: keyof typeof initialVisibleState) => {
    setVisible((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const validatePassword = (password: string) => {
    if (password.trim().length < 8) {
      return "The password must be at least 8 characters long.";
    } else if (password.trim().length > 10) {
      return "The password must not exceed 10 characters.";
    }
    return "";
  };

  const validateForm = (): boolean => {
    const updatedErrors = {
      old_password:
        formData.old_password.trim().length === 0
          ? "The old password field is required."
          : "",
      password:
        formData.password.trim().length === 0
          ? "The password field is required."
          : validatePassword(formData.password),
      password_confirmation:
        formData.password.trim() &&
        formData.password.trim() !== formData.password_confirmation.trim()
          ? "Confirmation password does not match the new password."
          : "",
    };

    setErrors(updatedErrors);
    return !Object.values(updatedErrors).some((error) => error !== "");
  };

  const handlePasswordUpdate = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    const trimmedFormData = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key as keyof typeof formData] =
          typeof formData[key as keyof typeof formData] === "string"
            ? formData[key as keyof typeof formData].trim()
            : formData[key as keyof typeof formData];
        return acc;
      },
      {} as Record<keyof typeof formData, string>
    );
    globalServices
      .update("/update-password", trimmedFormData)
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          resetForm();
          Swal.fire({
            title: "Password updated successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        const errorMessage = err.response?.data?.error;
        setIsLoading(false);
        if (errorMessage === "Old password does not match") {
          setErrors((prev) => ({ ...prev, old_password: errorMessage }));
        }
      });
  };

  const renderInput = (
    name: keyof typeof initialFormState,
    placeholder: string,
    isPassword = true
  ) => (
    <InputField
      isInvalid={!!errors[name]}
      error={errors[name]}
      value={formData[name]}
      onChange={(event) => {
        const inputValue = event.target.value;
        handleValueChange(name, inputValue);
      }}
      placeholder={placeholder}
      type={visible[name] && isPassword ? "text" : "password"}
      endContent={
        isPassword && (
          <button className="mx-[6px]" onClick={() => toggleVisibility(name)}>
            {visible[name] ? (
              <MdOutlineVisibility />
            ) : (
              <MdOutlineVisibilityOff />
            )}
          </button>
        )
      }
    />
  );

  return (
    <div className="flex flex-col gap-6 mt-4">
      {renderInput("old_password", "Old Password")}
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        {renderInput("password", "New Password")}
        {renderInput("password_confirmation", "Confirm New Password")}
      </div>
      <Button
        isDisabled={isLoading}
        onPress={handlePasswordUpdate}
        className="idx-button mt-3"
        type="submit"
      >
        Change Password
      </Button>
    </div>
  );
};

export default ChangePasswordForm;
