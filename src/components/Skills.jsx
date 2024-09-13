import React, { useState } from "react";

const Skills = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "level") {
      setLevel(Number(value));
    }
  };

  const handleSubmitSkill = () => {
    if (name.trim() && level >= 1 && level <= 10) {
      handleAdd({ name, level });
      setName("");
      setLevel(1);
    } else {
      alert("Please enter a skill and level between 1-10");
    }
  };

  return (
    <div className="skills-section">
      <div className="flex mb-4 justify-center">
        <input
          type="text"
          name="name"
          placeholder="Skill"
          value={name}
          onChange={handleChange}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="number"
          name="level"
          placeholder="Level (1-10)"
          value={level}
          min="1"
          max="10"
          onChange={handleChange}
          className="mr-2 p-2 border rounded"
        />
        <button
          onClick={handleSubmitSkill}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
