import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
    >
      <FontAwesomeIcon icon={faXmark} /> Delete
    </button>
  );
};

export default DeleteButton;
