import React from "react";
import Input from "./Input";
import { InformationFields } from "../utils/InputFields";

const InformationForm = ({ formData, onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      {InformationFields.map((field, index) => (
        <Input
          key={index}
          type={field.type || "text"}
          name={field.name}
          value={formData[field.name]}
          onChange={onChange}
          placeholder={field.placeholder}
          require={field.required}
        />
      ))}
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default InformationForm;
