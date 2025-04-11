"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { ChangeEvent, useEffect, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { MdUpload } from "react-icons/md";
import Swal from "sweetalert2";
import InputField from "../UIFields/InputField";
import Button from "../UIFields/Button";
import SelectField from "../UIFields/SelectField";

type Props = {
  userData: UserProfile;
};

export default function ProfileForm({ userData }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    country_code: "+91",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    country_code: "",
    phone: "",
  });

  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<string | File>("");
  const { setUser } = useGlobalContext();

  useEffect(() => {
    if (userData?.avatar) {
      setImageUrl(userData.avatar);
    }
    const initForm = { ...formData };
    if (userData?.name) {
      initForm.name = userData.name;
    }
    if (userData?.phone) {
      initForm.phone = userData.phone;
    }
    if (userData?.country_code) {
      initForm.country_code = userData.country_code;
    }
    setFormData((form) => ({ ...form, ...initForm }));
  }, [userData]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validFileTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validFileTypes.includes(file.type)) {
        Swal.fire({
          title: "Only JPEG, JPG and PNG formats are allowed.",
          icon: "error",
          timer: 1500,
        });
        return;
      }
      if (file.size > 1024 * 1024) {
        Swal.fire({
          title: "Max file size is 1MB",
          icon: "error",
          timer: 1500,
        });
        return;
      }

      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleValue = (
    name: "name" | "country_code" | "phone",
    value: string,
    type: string = "text"
  ) => {
    if (name === "name" && !value.match(/^[A-Za-z ]*$/)) return;
    if (type === "number" && !(value === "" || value.match(/^[1-9][0-9]*$/)))
      return;
    if (
      type === "float" &&
      !(
        value === "" ||
        value === "-" ||
        (value.endsWith(".") && (value.match(/\./g) || []).length <= 1) ||
        value.match(/^[-+]?\d*\.?\d+$/)
      )
    )
      return;
    setFormData((form) => ({ ...form, [name]: value }));
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleProfile = () => {
    const { name, country_code, phone } = formData;
    if (name.trim().length === 0 || name.trim().length > 40) {
      setErrors((err) => ({
        ...err,
        name:
          name.trim().length === 0
            ? "The name field is required"
            : "Name exceeds the 40 character limit.",
      }));
      return;
    }

    const parsedNumber = parsePhoneNumberFromString(country_code + phone);
    if (
      !phone ||
      (country_code === "+91"
        ? !/^[6789]\d{9}$/.test(phone)
        : parsedNumber
          ? !parsedNumber.isValid()
          : false)
    ) {
      setErrors((err) => ({ ...err, phone: "Enter valid phone number" }));
      return;
    }

    const payloadFormData = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value.trim().length > 0)
    );
    globalServices
      .update("/update-profile", payloadFormData)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Profile updated successfully",
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
      });

    if (imageFile) {
      const imageForm = new FormData();
      imageForm.append("avatar", imageFile);
      globalServices
        .post("/update-avatar", imageForm)
        .then((res) => {
          setImageFile("");
          const avatarLink = res.data?.data?.user?.avatar;
          if (avatarLink) {
            setImageUrl(avatarLink);
            setUser((user) => (user ? { ...user, avatar: avatarLink } : null));
          } else {
            setUser((user) =>
              user ? { ...user, avatar: String(image) } : null
            );
          }
        })
        .catch((err) => {
          if (err.status === 422) {
            if (err.response.data.errors) {
              setErrors((errors) => ({
                ...errors,
                ...err.response.data.errors,
              }));
            }
          }
        });
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4">
      <div className="flex items-center gap-6">
        <div className="relative">
          {image || imageUrl ? (
            <img
              src={image || imageUrl}
              alt="Uploaded"
              className="w-32 min-w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 min-w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="upload"
            className="w-[fit-content] mb-3 flex items-center gap-2 px-6 py-2 border border-[#FF9090] rounded-lg cursor-pointer"
          >
            <span className="text-[14px]">Upload Image</span>
            <MdUpload size={18} />
            <input
              id="upload"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept=".jpg, .jpeg, .png"
            />
          </label>
          <p className="text-sm text-gray-500 text-center">
            Max file size is 1MB, Minimum dimension: 330x300, and Suitable files
            are .jpg & .png.
          </p>
        </div>
      </div>

      <div className="flex w-full items-start flex-wrap md:flex-nowrap gap-6">
        <InputField
          value={formData.name}
          onChange={(event) => {
            const inputValue = event.target.value;
            handleValue("name", inputValue);
          }}
          placeholder="Name"
          type="text"
          error={errors.name}
          isInvalid={!!errors.name}
        />
      </div>

      <div className="flex w-full items-start gap-6">
        <SelectField
          disallowEmptySelection
          className="w-[120px] min-w-[100px]"
          placeholder="Country Code"
          selectedKeys={[formData.country_code]}
          onChange={(event) => handleValue("country_code", event.target.value)}
          options={[
            { key: "+1", label: "+1" },
            { key: "+91", label: "+91" },
          ]}
        />
        <InputField
          value={formData.phone}
          onChange={(event) => {
            const inputValue = event.target.value;
            handleValue("phone", inputValue, "number");
          }}
          placeholder="Phone"
          type="text"
          error={errors.phone}
          isInvalid={!!errors.phone}
        />
      </div>
      <InputField
        value={userData.email ?? ""}
        placeholder="Email"
        type="text"
        isDisabled
      />

      <Button onPress={handleProfile} className="idx-button mt-3">
        Save Profile
      </Button>
    </div>
  );
}
