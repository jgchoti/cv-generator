/* eslint-disable react/prop-types */
import React from "react";

const CreateTimeline = ({ item }) => {
  const formatDate = (current, startDate, endDate) => {
    const start = startDate
      ? new Date(startDate).toLocaleDateString("en-GB")
      : "";
    const end = endDate ? new Date(endDate).toLocaleDateString("en-GB") : "";

    if (current) {
      return start ? `${start} - Present` : "Present";
    }
    return start && end
      ? `${start} - ${end}`
      : start
      ? `From ${start}`
      : end
      ? `Until ${end}`
      : "";
  };

  return (
    <div className="flex gap-x-3 ml-20">
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
        </div>
      </div>

      <div className="grow pt-0.5 pb-10">
        <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
          {formatDate(item.current, item.startDate, item.endDate)}
        </h3>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {item.company || item.school} {item.location && `(${item.location})`}
        </h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {item.position || item.degree}{" "}
          {item.fieldOfStudy && `(${item.fieldOfStudy})`}
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default CreateTimeline;
