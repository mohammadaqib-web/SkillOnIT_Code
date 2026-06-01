import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./redux/CounterSlice";

function App() {
  const [count, setCount] = useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      {counter.value}
      <button onClick={() => {dispatch(Increment())}}>Increment</button>
      <button onClick={() => {dispatch(Decrement())}}>Decrement</button>
      <button onClick={() => {dispatch(Reset())}}>Reset</button>
    </>
  );
}

export default App;
