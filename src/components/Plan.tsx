import React from "react";
import PlanSelect from "./PlanSelect";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const Plan: React.FC = () => {
  return (
    <form className={`mx-20 flex flex-col mt-12 h-[65%]`}>
      <h1 className="text-[35px] font-UbBold text-[#02295a]">
        Select your plan
      </h1>
      <p className={`text-[20px] text-[#9699ab]`}>
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-8 flex flex-row justify-between">
        <PlanSelect icon={arcade} plan="Arcade" price="9" monthly={true} />
        <PlanSelect icon={advanced} plan="Advanced" price="12" monthly={true} />
        <PlanSelect icon={pro} plan="Pro" price="15" monthly={true} />
      </div>
      <div className="bg-blue-100 h-10 rounded-lg"></div>
    </form>
  );
};

export default Plan;
