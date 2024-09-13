import React, { useState } from "react";
import Input from "./Input";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";

const Modal = (props) => {
  const [id, setID] = useState(0);
  const [formData, setFormData] = useState({});
  const [isCurrent, setIsCurrent] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      setIsCurrent(checked); // Set isCurrent if checkbox is "current"
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddValue = (newValue) => {
    const updatedFormData = {
      ...newValue,
    };

    setFormData(updatedFormData);
    props.handleAdd(updatedFormData);
    props.setHide(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newID = id + 1;
    setID(newID);
    const newFormData = { ...formData, id: newID };
    props.handleAdd(newFormData);
    setFormData({}); // Reset form data after submit
    setIsCurrent(false); // Reset checkbox state
    props.setHide(true); // Hide modal after submission
  };

  const handleClose = () => {
    props.setHide(true);
  };

  const isExperienceOrEducation =
    props.title === "Education" || props.title === "Experience";

  return (
    <div
      id="input-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add {props.title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleClose} // Close the modal when the user clicks the close button
            >
              <span className="sr-only">Close modal</span>
              &times;
            </button>
          </div>
          <div className="p-4 md:p-5">
            {isExperienceOrEducation ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {props.InputFields.map((InputField, index) => (
                  <Input
                    key={index}
                    name={InputField.name}
                    type={InputField.type}
                    value={formData[InputField.name] || ""}
                    placeholder={InputField.placeholder}
                    required={InputField.required}
                    onChange={handleChange}
                    isTextarea={InputField.type === "textarea"}
                    isCheckbox={InputField.type === "checkbox"}
                    checked={
                      InputField.type === "checkbox"
                        ? formData[InputField.name] || false
                        : undefined
                    }
                    disabled={InputField.name === "endDate" && isCurrent} // Disable endDate if "current" is checked
                  />
                ))}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            ) : props.title === "Skills" ? (
              <Skills handleAdd={handleAddValue} />
            ) : props.title === "Languages" ? (
              <Languages handleAdd={handleAddValue} />
            ) : (
              <Interests handleAdd={handleAddValue} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
