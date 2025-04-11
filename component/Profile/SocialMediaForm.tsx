"use client";

import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import InputField from "../UIFields/InputField";
import Button from "../UIFields/Button";

const initialFormState = {
  facebook_url: "",
  twitter_url: "",
  instagram_url: "",
  linkedin_url: "",
};

const socialMediaPatterns: Record<string, { regex: RegExp; hint: string }> = {
  facebook_url: {
    regex: /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9_.-]+\/?$/,
    hint: "Enter valid Facebook profile link, e.g., https://www.facebook.com/yourusername",
  },
  twitter_url: {
    regex: /^https?:\/\/(www\.)?twitter\.com\/[A-Za-z0-9_]+\/?$/,
    hint: "Enter valid Twitter handle, e.g., https://twitter.com/yourusername",
  },
  instagram_url: {
    regex: /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_.-]+\/?$/,
    hint: "Enter valid Instagram profile link, e.g., https://www.instagram.com/yourusername",
  },
  linkedin_url: {
    regex: /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/,
    hint: "Enter valid LinkedIn profile link, e.g., https://www.linkedin.com/in/yourusername",
  },
};

type Props = {
  userData: UserProfile;
};

const SocialMediaForm = ({ userData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormState);

  useEffect(() => {
    if (userData?.social_media && userData.social_media) {
      setFormData((form) => ({ ...form, ...userData.social_media }));
    }
  }, [userData]);

  const handleValueChange = (
    name: keyof typeof initialFormState,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateUrl = (key: string, url: string): string => {
    if (!url) return "";
    const patternData = socialMediaPatterns[key];
    if (patternData && !patternData.regex.test(url)) {
      return `${patternData.hint}`;
    }

    return "";
  };

  const validateForm = (): boolean => {
    const updatedErrors = Object.keys(initialFormState).reduce(
      (acc, key) => {
        const field = key as keyof typeof initialFormState;
        const value = formData[field].trim();
        acc[field] = value.length === 0 ? "" : validateUrl(field, value);
        return acc;
      },
      {} as typeof initialFormState
    );

    setErrors(updatedErrors);
    return !Object.values(updatedErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    globalServices
      .update(
        "/update-social-media",
        Object.fromEntries(
          Object.entries(formData).filter(
            ([, value]) => value.trim().length > 0
          )
        )
      )
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          Swal.fire({
            title: "Social media links updated successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        if (err.status === 422) {
          if (err.response.data.errors) {
            setErrors((errors) => ({ ...errors, ...err.response.data.errors }));
          }
        }
        setIsLoading(false);
      });
  };

  const renderInput = (
    name: keyof typeof initialFormState,
    placeholder: string
  ) => (
    <InputField
      value={formData[name]}
      onChange={(event) => {
        const inputValue = event.target.value;
        handleValueChange(name, inputValue);
      }}
      isInvalid={!!errors[name]}
      error={errors[name]}
      placeholder={placeholder}
      type="text"
    />
  );

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        {renderInput("facebook_url", "Facebook URL")}
        {renderInput("twitter_url", "Twitter URL")}
      </div>
      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        {renderInput("instagram_url", "Instagram URL")}
        {renderInput("linkedin_url", "LinkedIn URL")}
      </div>
      <Button
        isDisabled={
          isLoading ||
          !Object.values(formData).some((value) => value.trim().length > 0)
        }
        onPress={handleSubmit}
        className="idx-button mt-3"
      >
        Update
      </Button>
    </div>
  );
};

export default SocialMediaForm;
