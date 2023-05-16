import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
}: InputProps) => {
  return (
    <>
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`font-UbMedium border-2 border-[#d6d9e6] rounded-lg p-3 mb-4`}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

export default Input;
