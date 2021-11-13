import React, { useRef } from "react";
import { Octokit } from "@octokit/core";
import { useProfieInfo } from "../../context/ProfileContext";
import "./style.css";

export default function SearchBox() {
  const magnifyingGlass = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6087 0C4.7591 0 0 4.74609 0 10.5797C0 16.4133 4.75915 21.1594 10.6087 21.1594C13.2162 21.1594 15.6071 20.2163 17.4563 18.6542L22.575 23.747C22.7449 23.9157 22.9664 24 23.1884 24C23.4118 24 23.635 23.9145 23.8049 23.7438C24.1435 23.4032 24.142 22.8527 23.8017 22.5139L18.6893 17.4274C20.2652 15.5807 21.2174 13.189 21.2174 10.5797C21.2174 4.74609 16.4582 0 10.6087 0ZM16.9346 16.7705C18.5071 15.1744 19.4782 12.9879 19.4782 10.5797C19.4782 5.70488 15.4994 1.73908 10.6087 1.73908C5.71794 1.73908 1.73913 5.70488 1.73913 10.5797C1.73913 15.4542 5.71794 19.4203 10.6087 19.4203C13.0163 19.4203 15.2029 18.4591 16.8027 16.9016C16.8211 16.879 16.8407 16.8571 16.8617 16.836C16.885 16.8125 16.9094 16.7907 16.9346 16.7705Z"
        fill="#0079FF"
      />
    </svg>
  );

  const { userData, setUserData } = useProfieInfo();

  const usernameref = useRef();
  const months = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
  };
  const oktokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
  });

  // const [username, setUsername] = useState('');
  //   const [user, setUser] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // setUsername(usernameref.current.value);
    oktokit
      .request(`GET /users/${usernameref.current.value}`)
      .then((response) => {
        const userObj = {
          name: response.data.name,
          avatar: response.data.avatar_url,
          username: response.data.login,
          bio: response.data.bio,
          repos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following,
          location: response.data.location,
          website: response.data.html_url,
          twitter: response.data.twitter_username,
          joined_date: response.data.created_at,
          setJoinedDate: function(input) {
            const splitString = input.split('T')[0].split('-');
            const date = `Joined ${splitString[2]} ${months[splitString[1]]} ${splitString[0]}`;
            // this.joined_date = date;
            return date;
          }
        };
        setUserData(userObj);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex searchBox p-3 justify-between items-center">
        <div className="flex-1 flex pr-5">
          {magnifyingGlass}

          <input
            type="text"
            name="username"
            id=""
            className="searchInput items-center ml-5 text-lg w-full"
            ref={usernameref}
            placeholder="Github Username"
          />
        </div>
        <button type="submit" className="searchbtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
