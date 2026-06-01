import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about?page=1&minPrice=3000"}>About</Link>
    </div>
  );
};

export default Home;
