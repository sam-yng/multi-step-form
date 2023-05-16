import React from "react";
import SideNav from "./SideNav";
import InfoForm from "./InfoForm";
import { useForm } from "../utils/FormContext";

const FormBox: React.FC = () => {
  const { activeFormId } = useForm();

  return (
    <main className="flex items-center justify-center h-screen">
      <article className="bg-white rounded-xl flex flex-row w-[70%] h-[70%] border-2 border-black">
        <SideNav />
        {activeFormId === "Info" ? <InfoForm /> : <InfoForm />}
      </article>
    </main>
  );
};

export default FormBox;
