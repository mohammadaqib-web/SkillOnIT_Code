import React, { useContext } from "react";
import UserContext from "../context/userContext";

function UserData() {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1>User Data</h1>
      {username}
    </div>
  );
}

export default UserData;
