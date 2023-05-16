import React from "react";
import "../css/index.css";
import FormBox from "../components/FormBox";
import { FormProvider } from "../utils/FormContext";

const App: React.FC = () => {
  return (
    <FormProvider>
      <main className="bg-[#F0F6FF] h-screen">
        <FormBox />
      </main>
    </FormProvider>
  );
};

export default App;
