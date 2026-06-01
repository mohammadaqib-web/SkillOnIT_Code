import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  console.log(params.get("minPrice"));
  

  const clicked = () => {
    //api call
    navigate("/");
  };

  return (
    <div>
      <button onClick={clicked}>Home</button>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default About;
