import React from "react";

type ButtonProps = {
  classNames?: string;
  handleSubmit: React.MouseEventHandler;
};

const Button: React.FC<ButtonProps> = ({
  classNames,
  handleSubmit,
}: ButtonProps) => {
  return (
    <button
      onClick={handleSubmit}
      className={`${classNames} justify-end mx-20 font-UbMedium text-[16px] mt-20 flex border-2 border-[#02295a] rounded-lg py-3 px-6 bg-[#02295a] text-white ml-auto`}
    >
      Next Step
    </button>
  );
};

export default Button;
