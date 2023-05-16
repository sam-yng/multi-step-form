import React from "react";
import Button from "./Button";

type InfoFormProps = {
  id?: string;
};

const InfoForm: React.FC<InfoFormProps> = ({ id }: InfoFormProps) => {
  return (
    <form id={id}>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input placeholder="e.g. Stephen King" name="name" />
        <label>Email Address</label>
        <input placeholder="e.g. stephenking@lorem.com" />
        <label>Phone Number</label>
        <input placeholder="e.g. +1 234 567 890" />
      </div>
      <Button />
    </form>
  );
};

export default InfoForm;
