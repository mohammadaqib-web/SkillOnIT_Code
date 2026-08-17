import React from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from "../redux/CounterSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <Navbar/> */}
      <Link to={"/about"}>About</Link>
      <button
        onClick={() => {
          dispatch(Increment(1));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(Increment(10));
        }}
      >
        Increment by 10
      </button>
      <button
        onClick={() => {
          dispatch(Decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(Reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
