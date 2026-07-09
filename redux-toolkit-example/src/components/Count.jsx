import React, { useState } from "react";
import { useSelector } from "react-redux";

function Count({count}) {
    const counter = useSelector(state=>state.counter);
    
//   const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{counter.value}</h1>
    </div>
  );
}

export default Count;
