// import React, { useState } from "react";
// import UserContext from "./userContext";

import { useState } from "react";
import UserContext from "./userContext";

// function UserContextProvider({ children }) {
//   const [username, setUsername] = useState("Alex");

//   return (
//     <>
//       <UserContext.Provider value={{ username, setUsername }}>
//         {children}
//       </UserContext.Provider>
//     </>
//   );
// }

// export default UserContextProvider;

function UserContextProvider({ children }) {
  const [username, setUsername] = useState("User");
  const [password, setPassword] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{ password, setPassword, username, setUsername }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
