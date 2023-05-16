import React from "react";
import StepNavigation from "./StepNavigation";

const SideNav: React.FC = () => {
  return (
    <nav className="nav-bg w-[28%] h-[95%] m-4 rounded-xl">
      <div className="h-[50%] mt-10 flex flex-col justify-between">
        <StepNavigation stepNum="1" description="YOUR INFO" form={1} />
        <StepNavigation stepNum="2" description="SELECT PLAN" form={2} />
        <StepNavigation stepNum="3" description="ADD-ONS" form={3} />
        <StepNavigation stepNum="4" description="SUMMARY" form={4} />
      </div>
    </nav>
  );
};

export default SideNav;
