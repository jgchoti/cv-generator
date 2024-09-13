import React, { useState } from "react";
import Modal from "./Modal";
import CreateTimeline from "../utils/CreateTimeline";
import DeleteButton from "./DeleteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { educationFields, experienceFields } from "../utils/InputFields";
import { RandomEmojis } from "../utils/RandomEmojis";
import { GetEmojis } from "../utils/GetEmojis";

const Section = ({ title }) => {
  const [sectionData, setSectionData] = useState([]);
  const [hide, setHide] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const getInputFields = () => {
    switch (title) {
      case "Education":
        return educationFields;
      case "Experience":
        return experienceFields;
      default:
        return [];
    }
  };

  const handleAdd = (formData) => {
    setSectionData([...sectionData, formData]);
    console.log(title);
    console.log("Form data submitted in parent: ", formData);
  };

  const handleRemove = (index) => {
    const newSectionData = [...sectionData];
    newSectionData.splice(index, 1);
    setSectionData(newSectionData);
  };

  const handleClickItem = (index) => {
    // Toggle the selected index for the delete button visibility
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className={`${title}-section`}>
      <div className="flex justify-end ">
        <button
          onClick={() => setHide(false)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {!hide && (
        <Modal
          InputFields={getInputFields()}
          handleAdd={handleAdd}
          setHide={setHide}
          title={title}
        />
      )}

      <div className="mt-4">
        {/* Education and Experience Section */}
        {(title === "Education" || title === "Experience") &&
          sectionData.length > 0 && (
            <ul>
              {sectionData.map((item, index) => (
                <li
                  key={index}
                  className="mb-4"
                  onClick={() => handleClickItem(index)}
                >
                  <CreateTimeline item={item} />
                  {selectedIndex === index && (
                    <DeleteButton onDelete={() => handleRemove(index)} />
                  )}
                </li>
              ))}
            </ul>
          )}

        {/* Skills Section */}
        {title === "Skills" && sectionData.length > 0 && (
          <ul className="skills-list">
            {sectionData.map((skill, index) => (
              <li
                key={index}
                className="flex justify-center"
                onClick={() => handleClickItem(index)}
              >
                <div className="mx-4 mb-2">
                  <h4 className="text-lg font-bold">
                    {RandomEmojis()}
                    {"  "}
                    {skill.name.toUpperCase()}
                  </h4>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5 w-6/12 mt-2">
                  <div
                    className="bg-gradient-to-r from-violet-200 to-pink-200 h-2.5 rounded-full"
                    style={{ width: `${(skill.level / 10) * 100}%` }}
                  ></div>
                </div>
                {selectedIndex === index && (
                  <DeleteButton onDelete={() => handleRemove(index)} />
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Languages Section */}
        {title === "Languages" && sectionData.length > 0 && (
          <ul>
            {sectionData.map((language, index) => (
              <li
                key={index}
                className="flex justify-center"
                onClick={() => handleClickItem(index)}
              >
                <div className="mx-4 mb-2">
                  <h4 className="text-lg font-bold">
                    🌐 {language.name.toUpperCase()} - {language.level}
                  </h4>
                </div>
                {selectedIndex === index && (
                  <DeleteButton onDelete={() => handleRemove(index)} />
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Interests Section */}
        {title === "Interests" && sectionData.length > 0 && (
          <ul>
            {sectionData.map((interest, index) => (
              <li
                key={index}
                className="flex justify-center"
                onClick={() => handleClickItem(index)}
              >
                <div className="mx-4 mb-2">
                  <h4 className="text-lg font-bold">
                    {GetEmojis(interest.name)} {"  "}
                    {interest.name.toUpperCase()}
                  </h4>
                </div>
                {selectedIndex === index && (
                  <DeleteButton onDelete={() => handleRemove(index)} />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Section;
