"use client";
import React, { FormEvent, useState } from "react";
import InputField from "../UIFields/InputField";
import TextareaField from "../UIFields/TextareaField";
import Image from "next/image";
import Button from "../UIFields/Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const AskAboutProperty = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };
  const handleSubmit = async (e: FormEvent) => {};

  return (
    <div className="flex flex-col bg-white gap-4 sticky top-[110px] p-4 shadow rounded-xl">
      <h3 className="text-[20px] font-bold flex text-center justify-center">
        Ask about this property
      </h3>
      <div className="flex flex-wrap gap-2 md:items-center md:justify-center items-center mb-4">
        <Image
          src="/images/realtor.webp"
          alt="Profile"
          height={64}
          width={64}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-lg font-medium">{"Ashutosh Walia"}</p>
          <p className="text-sm text-gray-500">{"ashwaliarealty@gmail.com"}</p>
          <p className="text-sm text-gray-500">{"+16478084539"}</p>
        </div>
      </div>
      <form
        id="inquiry-form"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          isInvalid={!!errors.name}
          error={errors.name}
        />
        <InputField
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          isInvalid={!!errors.phone}
          error={errors.phone}
        />
        <InputField
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          isInvalid={!!errors.email}
          error={errors.email}
        />
        <TextareaField
          placeholder="Type your message here..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          isInvalid={!!errors.message}
          error={errors.message}
          rows={4}
        />
        <Button
          type="submit"
          className="py-3 text-white w-full"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message →"}
        </Button>
      </form>
    </div>
  );
};

export default AskAboutProperty;
