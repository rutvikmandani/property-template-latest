"use client";
import { useDisclosure } from "@heroui/react";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type LoginModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  onClose: () => void;
  isMetaOpen: boolean;
  onMetaOpen: () => void;
  onMetaOpenChange: () => void;
  onMetaClose: () => void;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
  isForgot: boolean;
  setIsForgot: Dispatch<SetStateAction<boolean>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  logged: boolean;
};

const LoginModalContext = createContext<LoginModalContextType | undefined>(
  undefined
);

export const LoginModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [logged, setIsLogged] = useState(false);
  const {
    isOpen: isMetaOpen,
    onOpen: onMetaOpen,
    onOpenChange: onMetaOpenChange,
    onClose: onMetaClose,
  } = useDisclosure();

  return (
    <LoginModalContext.Provider
      value={{
        isLogin,
        isForgot,
        setIsLogin,
        setIsForgot,
        isOpen,
        onOpen,
        onOpenChange,
        onClose,
        isMetaOpen,
        onMetaOpen,
        onMetaOpenChange,
        onMetaClose,
        setIsLogged,
        logged,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModalContext = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error(
      "useLoginModalContext must be used within a LoginModalProvider"
    );
  }
  return context;
};
