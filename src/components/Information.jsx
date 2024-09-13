import React, { useEffect, useState } from "react";
import InformationForm from "./InformationForm";
import InformationDetail from "./InformationDetail";

const Information = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phone: "",
    address: "",
    github: "",
    linkedin: "",
    website: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    setIsSubmitted(!isSubmitted);
  };

  const handleEdit = () => {
    setIsSubmitted(false); // Go back to editing mode
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col max-w-screen-lg w-full p-4">
        {isSubmitted ? (
          <InformationDetail formData={formData} handleEdit={handleEdit} />
        ) : (
          <InformationForm
            formData={formData}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Information;
