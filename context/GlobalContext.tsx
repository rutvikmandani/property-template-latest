"use client";
import { globalServices } from "@/services/global.services";
import { Config } from "@/src/types/configuration";
import { UserProfile } from "@/src/types/user";
import { useQuery } from "@tanstack/react-query";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useLoginModalContext } from "./LoginModalContext";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

type GlobalContextType = {
  configuration: Config;
  isDropdownOpen: boolean;
  setIsDropdownOpen: SetState<boolean>;
  hasToken: {} | undefined;
  user: UserProfile | null;
  setUser: SetState<UserProfile | null>;
  setHasToken: SetState<string | boolean>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

async function fetchConfiguration() {
  // const res = await globalServices.getAll(`/configuration`);
  // if (res.data.status === 200) {
  //   return res.data.data;
  // } else {
  //   return res;
  // }
}

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [hasToken, setHasToken] = useState<string | boolean>("");
  const [configuration, setConfiguration] = useState({
    siteSettings: {
      logo: "",
      favicon: "",
      primary_color: "",
      secondary_color: "",
      default_currency: "",
      default_language: "",
      default_timezone: "",
      default_country: "",
      default_city: "",
    },
    header: {
      menu: {},
    },
    preDefinedSearches: {},
    popularCities: [],
    website: {
      id: "",
      agent_name: "",
      email: "",
      phone: "",
      address: "",
      domain: "",
      facebook_url: "",
      instagram_url: "",
      logo: "",
      favicon: "",
      footer_logo: "",
      status: "",
      created_at: "",
      updated_at: "",
      live_date: "",
      agent_pic: "",
    },
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const { onMetaOpen } = useLoginModalContext();

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const authToken = localStorage.getItem("token");
      setHasToken(!!authToken);
      // if (authToken) {
      //   globalServices
      //     .getAll("/get-profile")
      //     .then((res) => {
      //       if (res.status === 200) {
      //         setHasToken(true);
      //         setUser(res.data.data.user);
      //         if (!res.data.data.user.customer_meta_filled) {
      //           onMetaOpen();
      //         }
      //       }
      //     })
      //     .catch((err) => {
      //       setHasToken(false);
      //       localStorage.removeItem("token");
      //       localStorage.setItem("transactionType", "");
      //     });
      // } else {
      //   setHasToken(false);
      // }
    }
    if (typeof navigator !== "undefined") {
      const prevCity = localStorage.getItem("city");
      const prevCountry = localStorage.getItem("country");

      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by this browser.");
        return;
      }

      const success = async (position: GeolocationPosition) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${process.env.NEXT_PUBLIC_MAP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "OK" || data.results.length === 0) {
          throw new Error("Location not found");
        }

        let city = "";
        let country = "";

        for (const component of data.results[0].address_components) {
          if (component.types.includes("locality")) {
            city = component.long_name;
          }
          if (component.types.includes("country")) {
            country = component.long_name;
          }
        }

        localStorage.setItem("city", city);
        localStorage.setItem("country", country);

        if (prevCity !== city || prevCountry !== country) {
          window.location.reload();
        }
      };

      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);

  const configurationData = useQuery({
    queryKey: ["configuration"],
    queryFn: fetchConfiguration,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (configurationData?.data) {
      // setConfiguration(configurationData.data);
    }
  }, [configurationData?.data]);

  return (
    <GlobalContext.Provider
      value={{
        configuration,
        isDropdownOpen,
        setIsDropdownOpen,
        hasToken,
        user,
        setUser,
        setHasToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
