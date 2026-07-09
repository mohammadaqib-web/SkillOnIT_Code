import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useContext } from "react";
import UserContext from "./context/userContext";
import User from "./components/User";

function App() {
  const { username, setUsername } = useContext(UserContext);
  console.log(username);

  return (
    <>
      <User />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}

export default App;
