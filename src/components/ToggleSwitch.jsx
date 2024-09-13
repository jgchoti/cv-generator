import React, { useState } from "react";

const ToggleSwitch = ({ type, handleSwitch }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onSwitch = () => {
    setIsToggled(!isToggled);
    handleSwitch();
  };

  return (
    <div className="mt-3">
      <label
        htmlFor="switch-component-on"
        className={`text-slate-600 text-sm cursor-pointer mr-1 ${
          isToggled ? "opacity-50" : "font-bold"
        }`}
      >
        {type === "gender" ? "Female" : "Visible"}
      </label>

      <div className="relative inline-block w-11 h-5">
        <input
          onClick={onSwitch}
          id="switch-component-on"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="switch-component-on"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>

      <label
        htmlFor="switch-component-on"
        className={`text-slate-600 text-sm cursor-pointer ml-1 ${
          isToggled ? "font-bold" : "opacity-50"
        }`}
      >
        {type === "gender" ? "Male" : "Hide"}
      </label>
    </div>
  );
};

export default ToggleSwitch;
