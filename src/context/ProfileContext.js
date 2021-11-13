import React, { useContext, useState } from "react";

const ProfileContext = React.createContext();

export function useProfieInfo() {
  return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
  const [userData, setUserData] = useState({});
  const value = {
    userData,
    setUserData,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
