import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavbarLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarLayout;
