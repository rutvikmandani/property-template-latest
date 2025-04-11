"use client";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
} from "@heroui/react";
import styles from "@/styles/SignPopup.module.scss";
import { useEffect, useState } from "react";
import { globalServices } from "@/services/global.services";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Swal from "sweetalert2";
import { usePathname } from "next/navigation";
import { useLoginModalContext } from "@/context/LoginModalContext";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useGlobalContext } from "@/context/GlobalContext";
import InputField from "./UIFields/InputField";
import SelectField from "./UIFields/SelectField";

const initialErrors = {
  name: "",
  email: "",
  country_code: "",
  phone: "",
  password: "",
  rePassword: "",
  checked: "",
};

export default function SignPopup() {
  const pathname = usePathname();
  const {
    isOpen,
    onOpenChange,
    onClose,
    onMetaOpen,
    isLogin,
    setIsLogin,
    isForgot,
    setIsForgot,
    setIsLogged,
  } = useLoginModalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const { setUser, setHasToken } = useGlobalContext();

  const resetForm = () => {
    setErrors(initialErrors);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRePassword("");
    setIsChecked(false);
    setIsPasswordVisible(false);
    setIsRePasswordVisible(false);
  };

  const handleForgotPassword = () => {
    setIsLoading(true);
    globalServices
      .post("/forgot-password", {
        email: email.trim(),
        redirect_url: window.location.origin,
      })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Reset password link sent to your mail",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          resetForm();
          onClose();
          setIsForgot(false);
        }
        setIsLoading(false);
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

  const updateStatistics = () => {
    const id = pathname.startsWith("/property-detail/")
      ? pathname.split("/").pop()
      : "";
    const fromSoldHistory = localStorage.getItem("fromSoldHistory");
    if (id) {
      globalServices
        .getAll(
          `/properties/${id}?actionFlag=true${fromSoldHistory ? "&soldHistory=true" : ""}`
        )
        .finally(() => {
          localStorage.removeItem("fromSoldHistory");
        });
    }
  };

  const handleLogin = () => {
    globalServices
      .post("/login", { email: email.trim(), password: password.trim() })
      .then((res) => {
        if (res.status === 200) {
          resetForm();
          onClose();
          localStorage.setItem("token", res.data.data.token);
          localStorage.removeItem("transactionType");
          setUser(res.data.data.user);
          if (!res.data.data.user.customer_meta_filled) {
            onMetaOpen();
          }
          setHasToken(true);
          Swal.fire({
            title: "Login Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          updateStatistics();
        }
        setIsLoading(false);
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

  const handleSignup = () => {
    setIsLoading(true);
    const transactionType = localStorage.getItem("transactionType") || "Other";
    globalServices
      .post("/register", {
        name: name.trim(),
        email: email.trim(),
        country_code: countryCode,
        phone: phone,
        password: password.trim(),
        password_confirmation: rePassword.trim(),
        lead_type: transactionType,
      })
      .then((res) => {
        if (res.status === 200) {
          resetForm();
          onClose();
          localStorage.setItem("token", res.data.data.token);
          localStorage.removeItem("transactionType");
          setUser(res.data.data.user);
          if (!res.data.data.user.customer_meta_filled) {
            onMetaOpen();
          }
          setHasToken(true);
          Swal.fire({
            title: "Registered Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          updateStatistics();
        }
        setIsLoading(false);
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

  const validatePassword = () => {
    if (password.trim().length < 8) {
      return "The password must be at least 8 characters long.";
    } else if (password.trim().length > 10) {
      return "The password must not exceed 10 characters.";
    } else {
      return "";
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      return "Please enter valid email";
    } else {
      return "";
    }
  };

  const handleValidate = () => {
    const parsedNumber = parsePhoneNumberFromString(countryCode + phone);
    const error = {
      name:
        !isForgot && !isLogin
          ? name.trim().length === 0
            ? "The name field is required"
            : name.trim().length > 40
              ? "Name exceeds the 40 character limit."
              : ""
          : "",
      email:
        email.trim().length === 0
          ? "The email field is required"
          : validateEmail(),
      phone:
        isForgot || isLogin
          ? ""
          : phone.trim().length === 0
            ? "The phone field is required"
            : (parsedNumber ? !parsedNumber.isValid() : true)
              ? "Enter valid phone number."
              : "",
      password: isForgot
        ? ""
        : password.trim().length === 0
          ? "The password field is required"
          : isLogin
            ? ""
            : validatePassword(),
      rePassword:
        !isForgot &&
        !isLogin &&
        password.trim().length > 0 &&
        password.trim() !== rePassword.trim()
          ? "Retype password does not match with password"
          : "",
      checked:
        isForgot || isLogin || isChecked ? "" : "Term & condition is required",
    };
    setErrors((err) => ({ ...err, ...error }));
    return !Object.values(error).some((value) => value !== "");
  };

  const submitForm = () => {
    const validate = handleValidate();
    if (!validate) return;
    setIsLogged(true);
    onOpenChange()
    // if (isForgot) {
    //   handleForgotPassword();
    // } else if (isLogin) {
    //   handleLogin();
    // } else {
    //   handleSignup();
    // }
  };

  useEffect(() => {
    resetForm();
  }, [isLogin, isForgot, String(isOpen)]);

  const removeError = (
    name: "name" | "checked" | "password" | "rePassword" | "phone" | "email"
  ) => {
    if (errors[name]) {
      setErrors((err) => ({ ...err, [name]: "" }));
    }
  };

  const handleKey = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitForm();
    }
  };

  return (
    <Modal
      className="w-[100%] max-w-[800px]"
      placement="center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <ModalBody className="flex-row p-0 gap-0">
            <div className="hidden md:block max-w-[368px] relative flex-shrink-[0] w-[60%]">
              <div className="absolute top-[45px] left-[30px] right-[30px] text-center text-[26px] leading-[36px] font-semibold">
                Welcome to Your Real Estate Website
              </div>
              <img
                src="/images/login.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="login"
              />
            </div>
            <div className={styles.rightBodyContent}>
              <p className="text-[26px] leading-[36px] font-semibold mb-[22px]">
                {isForgot
                  ? "Reset your password"
                  : isLogin
                    ? "Sign into your account"
                    : "Create an account"}
              </p>
              <div
                className={`flex flex-col gap-[15px] mb-[22px] ${styles.form}`}
                onKeyDown={handleKey}
              >
                {!isForgot && !isLogin && (
                  <InputField
                    className={`${styles.formInput}`}
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      if (inputValue.match(/^[A-Za-z ]*$/)) {
                        setName(inputValue);
                        removeError("name");
                      }
                    }}
                    isInvalid={!!errors.name}
                    error={errors.name}
                  />
                )}
                <InputField
                  placeholder="Email"
                  value={email}
                  type="email"
                  onChange={(event) => {
                    const inputValue = event.target.value;
                    setEmail(inputValue);
                    removeError("email");
                  }}
                  isInvalid={!!errors.email}
                  error={errors.email}
                />
                {!isForgot && !isLogin && (
                  <div className="flex items-start gap-2">
                    <SelectField
                      disallowEmptySelection
                      className="w-[120px]"
                      placeholder="Country Code"
                      selectedKeys={[countryCode]}
                      onChange={(event) => setCountryCode(event.target.value)}
                      options={[
                        { key: "+1", label: "+1" },
                        { key: "+91", label: "+91" },
                      ]}
                    />

                    <InputField
                      className={styles.formInput}
                      placeholder="Phone Number"
                      value={phone}
                      type="tel"
                      isInvalid={!!errors.phone}
                      onChange={(event) => {
                        const inputValue = event.target.value;
                        if (
                          inputValue === "" ||
                          inputValue.match(/^[1-9][0-9]*$/)
                        ) {
                          setPhone(inputValue);
                          removeError("phone");
                        }
                      }}
                      error={errors.phone}
                    />
                  </div>
                )}
                {!isForgot && (
                  <InputField
                    className={styles.formInput}
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      setPassword(inputValue);
                      removeError("password");
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    isInvalid={!!errors.password}
                    error={errors.password}
                    endContent={
                      <button
                        className="mx-[6px]"
                        onClick={() =>
                          setIsPasswordVisible((visible) => !visible)
                        }
                      >
                        {isPasswordVisible ? (
                          <MdOutlineVisibility />
                        ) : (
                          <MdOutlineVisibilityOff />
                        )}
                      </button>
                    }
                  />
                )}
                {!isForgot && !isLogin && (
                  <InputField
                    className={styles.formInput}
                    placeholder="Retype Password"
                    value={rePassword}
                    onChange={(event) => {
                      const inputValue = event.target.value;
                      setRePassword(inputValue);
                      removeError("rePassword");
                    }}
                    type={isRePasswordVisible ? "text" : "password"}
                    isInvalid={!!errors.rePassword}
                    error={errors.rePassword}
                    endContent={
                      <button
                        className="mx-[6px]"
                        onClick={() =>
                          setIsRePasswordVisible((visible) => !visible)
                        }
                      >
                        {isRePasswordVisible ? (
                          <MdOutlineVisibility />
                        ) : (
                          <MdOutlineVisibilityOff />
                        )}
                      </button>
                    }
                  />
                )}
                {!isForgot && (
                  <div className="flex justify-between items-center text-[14px]">
                    {!isLogin && (
                      <Checkbox
                        isInvalid={!!errors.checked}
                        isSelected={isChecked}
                        onValueChange={(value) => {
                          setIsChecked(value);
                          removeError("checked");
                        }}
                        classNames={{
                          wrapper:
                            "after:bg-black after:text-white group-data-[selected=true]:border-black",
                        }}
                      >
                        I agree with terms & conditions
                      </Checkbox>
                    )}
                    {isLogin && (
                      <Button
                        className="!bg-transparent hover:text-[#FF9090]"
                        variant="light"
                        onPress={() => setIsForgot(true)}
                      >
                        Lost your password?
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <Button
                onPress={submitForm}
                isDisabled={isLoading}
                className="mb-[22px] bg-secondary-pinkLight text-white idx-button h-[54px] !w-full"
              >
                {isForgot ? "Reset Password" : isLogin ? "Login" : "Register"}
              </Button>
              <div className="flex justify-center">
                <p>
                  {isForgot ? "" : isLogin ? "Not a member" : "Have an account"}
                  {!isForgot && "?"}{" "}
                  <span
                    className={styles.loginLinkText}
                    onClick={() => {
                      if (isForgot) {
                        setIsForgot(false);
                      } else {
                        setIsLogin((login) => !login);
                      }
                    }}
                  >
                    {isLogin && !isForgot ? "Register here" : "Log in"}
                  </span>
                </p>
              </div>
            </div>
            <div></div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
