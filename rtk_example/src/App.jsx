import React from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    // <div style={{ textAlign: "center" }}>
    //   <h1>{counter.value}</h1>
    //   <Counter />
    // </div>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Counter />} />
        <Route path="about" element={<About />} />
        <Route path="course/:name" element={<Courses />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
