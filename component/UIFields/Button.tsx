import React from "react";
import { ButtonProps, Button as HeroUIButton } from "@heroui/react";

interface ButtonProp extends ButtonProps {
  isForgot?: boolean;
  isLogin?: boolean;
  className?: string;
}

const Button = ({
  children,
  onPress,
  isLoading = false,
  isForgot,
  className,
  isLogin,
  ...rest
}: ButtonProp) => {
  return (
    <HeroUIButton
      onPress={onPress}
      isDisabled={isLoading}
      className={`text-white bg-secondary-pinkLight idx-button ${className}`}
      {...rest}
    >
      {children}
    </HeroUIButton>
  );
};

export default Button;
