import React from "react";
import "../css/index.css";
import Container from "../components/Container";
import { FormProvider } from "../utils/FormContext";

const App: React.FC = () => {
  return (
    <FormProvider>
      <main className="bg-[#F0F6FF] h-screen">
        <Container />
      </main>
    </FormProvider>
  );
};

export default App;
