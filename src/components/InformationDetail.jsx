import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";

const InformationDetail = ({ formData, handleEdit }) => {
  // Extracting website and social links for separate handling
  const { name, description, github, linkedin, website, ...otherData } =
    formData;

  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* Name */}
      {name && (
        <h2 className="font-mono text-6xl font-bold mt-4 mb-4 text-sky-800">
          {name}
        </h2>
      )}

      {/* Description */}
      {description && (
        <h4 className="text-3xl font-bold mb-8 text-slate-400">
          {description}
        </h4>
      )}

      {/* Other Data */}
      {Object.entries(otherData).map(([key, value]) => (
        <div key={key} className="flex mb-4">
          {value && (
            <>
              <FontAwesomeIcon
                icon={icons[key]}
                className="mr-2 w-6 h-5 text-slate-600"
              />
              <p className="text-1xl ">{value}</p>
            </>
          )}
        </div>
      ))}

      {/* Social Media Links */}
      {(github || linkedin || website) && (
        <div className="flex justify-center mt-4 mb-4 space-x-8">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold"
            >
              <FontAwesomeIcon
                icon={icons.github}
                className="w-6 h-6 text-slate-600"
              />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold"
            >
              <FontAwesomeIcon
                icon={icons.linkedin}
                className="w-6 h-6 text-slate-600"
              />
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold"
            >
              <FontAwesomeIcon
                icon={icons.website}
                className="w-6 h-6 text-slate-600"
              />
            </a>
          )}
        </div>
      )}

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default InformationDetail;
