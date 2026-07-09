import React, { useState } from "react";
import Count from "./components/Count";
import { useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from "./redux/CounterSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <Count />
      <br />
      <button
        onClick={() => {
          dispatch(Increment({number:10,name:"increase"}));
        }}
      >
        Increment
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

export default App;
