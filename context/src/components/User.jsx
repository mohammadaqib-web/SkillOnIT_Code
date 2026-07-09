import React from "react";
import { useContext } from "react";
import UserContext from "../context/userContext";

function User() {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export default User;
