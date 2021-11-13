import React from "react";
import { useProfieInfo } from "../../context/ProfileContext";
import pic from "./profilepic.png";
import "./style.css";

export default function ProfileInfo() {
  const { userData } = useProfieInfo();
  
  
  return (
    <div className="flex profileInfo">
      <div className="profilePicture">
        <img
          className="text-lg font-bold avater"
          src={!userData.avatar ? pic : userData.avatar}
          alt="Github Avatar"
          width="100px"
          height="100px"
        />
      </div>
      <div className="infoSeciton">
        <div className="flex justify-between nameAndDate">
          <div className="grid grid-cols-1 grid-rows-1 name">
            <h1 className="nameHeader">{!userData.name ? "Your Name" : userData.name}</h1>
            <span className="username">@{!userData.username ? "@username" : userData.username}</span>
          </div>
          <div>
            <p className="joiningDate mt-2">{!userData.joined_date ? "Joined Date" : userData.setJoinedDate(userData.joined_date)}</p>
          </div>
        </div>
        <div className="bio">{!userData.bio ? "There is no bio." : userData.bio}</div>
        <div className="grid grid-cols-3 grid-row-2 repoFollowerFollowing">
          <div className="repo">Repos</div>
          <div className="followers">Followers</div>
          <div className="following">Following</div>
          <div className="repoCount">{!userData.repos ? "0" : userData.repos}</div>
          <div className="followersCount">{!userData.followers ? "0" : userData.followers}</div>
          <div className="followingCount">{!userData.following ? "0" : userData.following}</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 utility">
          <div className="location">{!userData.location ? "Location Unavailable" : userData.location}</div>
          <div className="twitter">{!userData.twitter ? "Twitter unavailable" : userData.twitter}</div>
          <div className="link">{!userData.website ? "Profile Link" : userData.website}</div>
          
        </div>
      </div>
    </div>
  );
}
