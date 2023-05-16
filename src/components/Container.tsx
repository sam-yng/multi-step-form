import React from "react";
import SideNav from "./SideNav";
import Form from "./Form";

const Container: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <article className="bg-white rounded-xl flex flex-row w-[70%] h-[75%] border-2">
        <SideNav />
        <Form />
      </article>
    </main>
  );
};

export default Container;
