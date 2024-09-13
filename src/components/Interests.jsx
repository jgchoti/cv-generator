import React, { useState } from "react";

const Interests = ({ handleAdd }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
  };

  const handleSubmit = () => {
    if (name.trim().toLowerCase()) {
      handleAdd({ name });
      setName("");
    }
  };

  return (
    <div className="skills-section">
      <div className="flex mb-4 justify-center">
        <input
          type="text"
          name="name"
          placeholder="Language"
          value={name}
          onChange={handleChange}
          className="mr-2 p-2 border rounded"
        />

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Interest
        </button>
      </div>
    </div>
  );
};

export default Interests;
