"use client";
import React, { FormEvent, useState } from "react";
import InputField from "../UIFields/InputField";
import TextareaField from "../UIFields/TextareaField";
import Button from "../UIFields/Button";
import { FaLongArrowAltRight } from "react-icons/fa";

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

const ContactFields = () => {
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
        className="py-3 text-white w-full flex align-center"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <FaLongArrowAltRight />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactFields;
