import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function About() {
    const navigate = useNavigate();
  
  const handleLogin = () => {
    //logic here
    console.log("login successful");
    
    navigate("/")
  };
  return (
    <div>
        {/* <Navbar/> */}
      <Link to={"/"}>Home</Link>
      About
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default About;
