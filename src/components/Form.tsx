/* eslint-disable indent */
import React from "react";
import { useForm } from "../utils/FormContext";
import Info from "./Info";
import Plan from "./Plan";
import Button from "./Button";

const Form: React.FC = () => {
  const { activeForm, setActiveForm } = useForm();

  const conditionalForm = () => {
    switch (activeForm) {
      case 1:
        return <Info />;
      case 2:
        return <Plan />;
      default:
        return <Info />;
    }
  };

  const handleSubmit = () => {
    console.log(activeForm);
    setActiveForm(activeForm + 1);
    console.log(activeForm);
  };

  return (
    <main className="flex flex-col w-[67%]">
      {conditionalForm()}
      <Button handleSubmit={handleSubmit} />
    </main>
  );
};

export default Form;
