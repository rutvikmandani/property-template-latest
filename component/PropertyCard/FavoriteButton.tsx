import { globalServices } from "@/services/global.services";
import { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import Button from "../UIFields/Button";

interface FavoriteButtonProps {
  isFavorite: boolean;
  listingKey: string;
}

export default function FavoriteButton({
  isFavorite,
  listingKey,
}: FavoriteButtonProps) {
  const [isFavoriteProperty, setIsFavoriteProperty] = useState(isFavorite);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsFavoriteProperty(isFavorite);
  }, [isFavorite]);

  const handleClick = () => {
    // setIsFavoriteProperty((prev) => !prev);
    // setIsLoader(true);
    // globalServices.post(`/customers/favorites/toggle`, {
    //   propertyListingKey: listingKey
    // })
    // .finally(() => {
    //   setIsLoader(false);
    // })
  };

  return (
    <Button
      disableRipple
      isIconOnly
      isDisabled={isLoader}
      radius="full"
      size="sm"
      onPress={handleClick}
      className={`md:opacity-100 opacity-100 absolute right-[10px] z-[1] top-[10px] bg-red-200 group transition-all active:scale-90`}
    >
      {isLoader ? (
        <AiOutlineLoading3Quarters
          style={{ animation: "spin 1s linear infinite" }}
        />
      ) : isFavoriteProperty ? (
        <AiFillHeart
          className="transition-all duration-300 animate-pulse"
          size={20}
        />
      ) : (
        <AiOutlineHeart
          className="text-gray-500 transition-all duration-300"
          size={20}
        />
      )}
    </Button>
  );
}
