import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Skills";
import Languages from "./Languages";
import Interests from "./Interests";
import Section from "./Section";

const ResumeDetails = () => {
  const sectionsList = [
    {
      id: "education",
      component: <Section title="Education" />,
      title: "Education",
    },
    {
      id: "experience",
      component: <Section title="Experience" />,
      title: "Experience",
    },
    {
      id: "skills",
      component: <Section title="Skills" />,
      title: "Skills",
    },
    {
      id: "languages",
      component: <Section title="Languages" />,
      title: "Languages",
    },
    {
      id: "interests",
      component: <Section title="Interests" />,
      title: "Interests",
    },
  ];
  const [sections, setSections] = useState(sectionsList);

  const moveSectionUp = (index) => {
    if (index > 0) {
      const newSections = [...sections];
      newSections.map((section, i) => {
        if (i === index) {
          [newSections[i], newSections[i - 1]] = [
            newSections[i - 1],
            newSections[i],
          ];
        }
      });
      setSections(newSections);
    }
  };

  const moveSectionDown = (index) => {
    if (index < sections.length - 1) {
      const newSections = [...sections];
      newSections.map((section, i) => {
        if (i === index) {
          [newSections[i], newSections[i + 1]] = [
            newSections[i + 1],
            newSections[i],
          ];
        }
      });
      setSections(newSections);
    }
  };

  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="w-9/12 p-6 my-2 mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <div>
              <button
                onClick={() => moveSectionUp(index)}
                disabled={index === 0}
                className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                <FontAwesomeIcon icon={faAngleUp} />
              </button>
              <button
                onClick={() => moveSectionDown(index)}
                disabled={index === sections.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </div>
          <div>{section.component}</div>
        </div>
      ))}
    </div>
  );
};

export default ResumeDetails;
