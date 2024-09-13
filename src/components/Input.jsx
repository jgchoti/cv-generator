import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";

const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
  isCheckbox,
  checked,
  disabled,
}) => (
  <div className="relative flex items-center mb-4">
    {isTextarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full lg:w-96 pl-14 pr-9 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder={placeholder}
        disabled={disabled}
      />
    ) : isCheckbox ? (
      <div className="relative flex items-center">
        <input
          type={type}
          name={name}
          id={name}
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-blue-600 border-slate-200 rounded-md focus:ring-blue-500"
        />
        <label htmlFor={name} className="ml-2 text-slate-600 text-sm">
          {placeholder}
        </label>
      </div>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="relative w-full lg:w-96 pl-14 pr-9 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    )}
    <FontAwesomeIcon
      icon={icons[name]}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-600"
    />
  </div>
);

export default Input;
