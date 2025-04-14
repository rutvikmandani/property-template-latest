"use client";
import ProfileForm from "./ProfileForm";
import SocialMediaForm from "./SocialMediaForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { useState, useEffect } from "react";
import { globalServices } from "@/services/global.services";
import { UserProfile } from "@/src/types/user";
import { useGlobalContext } from "@/context/GlobalContext";
import { FullPageLoader } from "../Loader";

const boxStyle = `bg-white shadow-custom rounded-xl p-6`;

const Profile = () => {
  const { setUser } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserProfile>({
    name: "",
    email: "",
    country_code: "",
    phone: "",
    status: false,
    updated_at: "",
    created_at: "",
    social_media: {
      facebook_url: "",
      twitter_url: "",
      instagram_url: "",
      linkedin_url: "",
    },
    location: {
      friendly_address: "",
    },
    avatar: "",
    web: "",
    country: "",
    description: "",
  });
  const getUserData = () => {
    setIsLoading(true);
    globalServices
      .getAll("/get-profile")
      .then((res) => {
        if (res.data.data.user) {
          setUserData(res.data.data.user);
          setUser(res.data.data.user);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // getUserData();
  }, []);

  const getHeader = (name: string) => {
    return (
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-secondary-black3 pb-2">
        {name}
      </h3>
    );
  };

  return (
    <div className="text-primary">
      <div className="text-[26px] font-semibold">My Profiles</div>
      <div className="mb-4">We are glad to see you again!</div>
      <div className="flex flex-col gap-8">
        <div className={boxStyle}>
          {getHeader("Profile Information")}
          <ProfileForm userData={userData} />
        </div>
        <div className={boxStyle}>
          {getHeader("Social Media")}
          <SocialMediaForm userData={userData} />
        </div>
        <div className={boxStyle}>
          {getHeader("Change Password")}
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
