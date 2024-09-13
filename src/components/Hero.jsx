import React from "react";
import Information from "./Information";
import ProfileImg from "./ProfileImg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-r from-gray-50 to-blue-300">
      <div className="flex flex-col sm:flex-row max-w-screen-lg w-full p-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <ProfileImg />
        <Information />
      </div>
    </div>
  );
};

export default Hero;
