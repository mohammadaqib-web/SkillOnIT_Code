import React from "react";
import { useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from "../redux/CounterSlice";

function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
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
