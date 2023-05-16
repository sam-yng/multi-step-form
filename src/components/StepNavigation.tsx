import React from "react";
import { useForm } from "../utils/FormContext";

type StepNavigationProps = {
  stepNum: string;
  description: string;
  form?: number;
};

const StepNavigation: React.FC<StepNavigationProps> = ({
  stepNum,
  description,
  form,
}: StepNavigationProps) => {
  const { activeForm } = useForm();

  return (
    <article
      className={`text-white ml-10 items-center flex flex-row text-[16px]`}
    >
      <h1
        className={`border-2 px-3 py-1.5 text-[15px] mr-4 rounded-full font-UbMedium ${
          form === activeForm
            ? "bg-[#bfe2fd] border-[#bfe2fd] text-black"
            : "border-white"
        }`}
      >
        {stepNum}
      </h1>
      <div className={`flex flex-col`}>
        <h1 className="font-UbRegular text-[#d6d9e6] text-[14px]">
          STEP {stepNum}
        </h1>
        <h2 className="font-UbMedium">{description}</h2>
      </div>
    </article>
  );
};

export default StepNavigation;
