import React, { useContext } from "react";
import UserContext from "../context/userContext";

function User() {
  const { username, setUsername } = useContext(UserContext);
  
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      {username}
    </div>
  );
}

export default User;
