import React, { useState } from "react";

const Languages = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("Beginner");

  const levels = ["Beginner", "Intermediate", "Fluent", "Native"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "level") {
      setLevel(value);
    }
  };

  const handleSubmit = () => {
    if (name.trim() && levels.includes(level)) {
      handleAdd({ name, level });
      setName("");
      setLevel("Beginner"); // Reset to default value
    } else {
      alert("Please enter a language and select a valid level.");
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
        <select
          name="level"
          value={level}
          onChange={handleChange}
          className="mr-2 p-2 border rounded"
        >
          {levels.map((level, index) => (
            <option key={index} value={level}>
              {level}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Language
        </button>
      </div>
    </div>
  );
};

export default Languages;
