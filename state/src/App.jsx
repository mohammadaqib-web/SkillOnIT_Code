import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${inputValue}`)
      .then((res) => res.json())
      .then((data2) => {
        if (data2) setData(data2);
      });
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {data.length>0 && data?.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              {item.id}- {item.name}
            </h1>
            <h3>{item.email}</h3>
            <h3>{item.phone}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
