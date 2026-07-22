import React, { useContext } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import UserContext from "./context/userContext";

function App() {
  const {users,setUsers} = useContext(UserContext)
  // const { username, setUsername } = useContext(UserContext);
  // let studentInfo = [
    
  // ];

  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      {/* <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/> */}
      {users.map((item, index) => {
        return (
          <div key={index}>
            <ProfileCard info={item} />
          </div>
        );
      })}
      <button onClick={()=>setUsers([])}>delete</button>
    </div>
  );
}

export default App;
