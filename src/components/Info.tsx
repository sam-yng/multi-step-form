import React from "react";
import Input from "./Input";

const Info: React.FC = () => {
  return (
    <form className={`mx-20 flex flex-col mt-12 h-[65%]`}>
      <h1 className="text-[35px] font-UbBold text-[#02295a]">Personal Info</h1>
      <p className={`text-[20px] text-[#9699ab]`}>
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col justify-center mt-8 font-UbRegular text-[#02295a]">
        <Input label="Name" placeholder="e.g. Stephen King" name="name" />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          name="phone"
        />
      </div>
    </form>
  );
};

export default Info;
