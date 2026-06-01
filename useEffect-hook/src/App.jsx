import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Subtract Count
      </button>

      {data.map((item, index) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
