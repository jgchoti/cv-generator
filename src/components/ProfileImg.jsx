import React, { useState, useEffect } from "react";
import femaleAvatar from "../assets/female_avatar.svg";
import maleAvatar from "../assets/male_avatar.svg";
import ToggleSwitch from "./ToggleSwitch";

const ProfileImg = () => {
  const [isMale, setIsMale] = useState(false);
  const [imgURL, setImgURL] = useState(femaleAvatar);
  const [isVisible, setIsVisible] = useState(true);

  const handleGenderSwitch = () => {
    setIsMale(!isMale);
  };

  const handleVisibilitySwitch = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isMale) {
      setImgURL(maleAvatar);
    } else {
      setImgURL(femaleAvatar);
    }
  }, [isMale]);

  return (
    <div className="basic-1/4 flex flex-col justify-center items-center min-w-40">
      {isVisible && <img src={imgURL} alt="profile" className="w-60 mb-4" />}
      <ToggleSwitch type="visibility" handleSwitch={handleVisibilitySwitch} />
      {isVisible && (
        <ToggleSwitch type="gender" handleSwitch={handleGenderSwitch} />
      )}
    </div>
  );
};

export default ProfileImg;
