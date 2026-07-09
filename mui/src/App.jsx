import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import NavbarLayout from "./components/NavbarLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<Users />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
