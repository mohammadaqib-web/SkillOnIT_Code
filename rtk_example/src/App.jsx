import React from "react";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter.value}</h1>
      <Counter />
    </div>
  );
}

export default App;
