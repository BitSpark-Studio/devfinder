import React from "react";
import { useProfieInfo } from "../../context/ProfileContext";
import pic from "./profilepic.png";
export default function ProfileInfo() {
  const { userData } = useProfieInfo();
  let profilePic = "";
  if (!userData.avatar) {
    profilePic = pic;
  } else {
    profilePic = userData.avatar;
  }
  return (
    <div className="profileInfo">
      <div className="profilePicture">
        <img
          className="text-lg font-bold rounded-full"
          src={profilePic}
          alt="Github Avatar"
          width="100px" height="100px"
        />
      </div>
    </div>
  );
}
