import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  Radio,
  RadioGroup,
} from "@heroui/react";
import styles from "@/styles/SignPopup.module.scss";
import { useState } from "react";
import { globalServices } from "@/services/global.services";
import Swal from "sweetalert2";
import { useLoginModalContext } from "@/context/LoginModalContext";

const radioLabelClass = { label: "text-black" };
const radioGroupClass =
  "[&:has(input:checked)>span]:!border-black [&:has(input:checked)>span>span]:!bg-black";

const initForm = {
  firstTimeBuyer: "",
  buyTime: "",
  preQualified: "",
  houseToSell: "",
  hasAgent: "",
};

export default function AfterAfterSignPopup() {
  const { isMetaOpen, onMetaClose, onMetaOpenChange } = useLoginModalContext();
  const [formData, setFormData] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstTimeBuyer: "",
    buyTime: "",
    preQualified: "",
    houseToSell: "",
    hasAgent: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    // const payload = {
    //   first_time_home_buyer: formData.firstTimeBuyer === "yes",
    //   purchase_timeline: formData.buyTime,
    //   mortgage_prequalification: formData.preQualified === "yes",
    //   selling_existing_house: formData.houseToSell === "yes",
    //   has_agent: formData.hasAgent === "yes",
    // };
    // setIsLoading(true);
    // globalServices
    //   .post("/customer-meta", payload)
    //   .then(() => {
    //     setFormData(initForm);
    //     Swal.fire({
    //       title: "Form Submitted Successfully!",
    //       icon: "success",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     onMetaClose();
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  return (
    <Modal
      className="w-[100%] max-w-[800px]"
      isOpen={isMetaOpen}
      onOpenChange={onMetaOpenChange}
      hideCloseButton
      isKeyboardDismissDisabled={true}
      isDismissable={false}
    >
      <ModalContent>
        {() => (
          <ModalBody className="flex-row p-0 gap-0">
            <div className={styles.rightBodyContent}>
              <div className="text-center">
                <p className="text-[20px] leading-[26px] font-semibold mb-[14px]">
                  One Last Step
                </p>
                <p className="text-[14px] mb-[22px]">
                  Some questions will improve your estimate
                </p>
              </div>
              <Divider />

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4"
              >
                <RadioGroup
                  orientation="horizontal"
                  label="Are you a first time home buyer?"
                  isRequired
                  classNames={radioLabelClass}
                  onValueChange={(val) => handleChange("firstTimeBuyer", val)}
                >
                  <Radio className={radioGroupClass} value="yes">
                    Yes
                  </Radio>
                  <Radio className={radioGroupClass} value="no">
                    No
                  </Radio>
                </RadioGroup>

                <RadioGroup
                  classNames={radioLabelClass}
                  orientation="horizontal"
                  label="Within how many months do you plan to buy a home?"
                  isRequired
                  onValueChange={(val) => handleChange("buyTime", val)}
                >
                  <Radio className={radioGroupClass} value="0-1">
                    0-1
                  </Radio>
                  <Radio className={radioGroupClass} value="1-3">
                    1-3
                  </Radio>
                  <Radio className={radioGroupClass} value="3-6">
                    3-6
                  </Radio>
                  <Radio className={radioGroupClass} value="6-12">
                    6-12
                  </Radio>
                  <Radio className={radioGroupClass} value="12+">
                    12+
                  </Radio>
                </RadioGroup>

                <RadioGroup
                  classNames={radioLabelClass}
                  orientation="horizontal"
                  label="Have you been pre-qualified for a mortgage?"
                  isRequired
                  color={errors.preQualified ? "danger" : "default"}
                  onValueChange={(val) => handleChange("preQualified", val)}
                >
                  <Radio className={radioGroupClass} value="yes">
                    Yes
                  </Radio>
                  <Radio className={radioGroupClass} value="no">
                    No
                  </Radio>
                </RadioGroup>

                <RadioGroup
                  classNames={radioLabelClass}
                  orientation="horizontal"
                  label="Do you have a house to sell first?"
                  isRequired
                  color={errors.houseToSell ? "danger" : "default"}
                  onValueChange={(val) => handleChange("houseToSell", val)}
                >
                  <Radio className={radioGroupClass} value="yes">
                    Yes
                  </Radio>
                  <Radio className={radioGroupClass} value="no">
                    No
                  </Radio>
                </RadioGroup>

                <RadioGroup
                  classNames={radioLabelClass}
                  orientation="horizontal"
                  label="Do you have an agent already?"
                  isRequired
                  color={errors.hasAgent ? "danger" : "default"}
                  onValueChange={(val) => handleChange("hasAgent", val)}
                >
                  <Radio className={radioGroupClass} value="yes">
                    Yes
                  </Radio>
                  <Radio className={radioGroupClass} value="no">
                    No
                  </Radio>
                </RadioGroup>

                <Button
                  isDisabled={isLoading}
                  type="submit"
                  className="idx-button text-white bg-secondary-pinkLight mt-4"
                >
                  Submit
                </Button>
              </form>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
