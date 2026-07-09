import { useContext } from "react";
import "./App.css";
import User from "./components/User";
import UserData from "./components/UserData";
import UserContext from "./context/userContext";

function App() {
  const { password, setPassword, username, setUsername } =
    useContext(UserContext);

  console.log(password, username);

  return (
    <>
      <h1>Context A PI</h1>
      <User />
      <UserData />
    </>
  );
}

export default App;
