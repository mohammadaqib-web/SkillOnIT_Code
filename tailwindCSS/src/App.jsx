import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState();
  let user = {
    name: "John",
    age: 20,
    address: {
      pincode: 430001,
    },
  };

  localStorage.setItem("item","sample item")

  console.error("Error");
  console.log(localStorage.removeItem("item"));
  console.warn("warning")

  return (
    <>
      <div className="bg-teal-600 text-white w-full">Hello</div>
      {count?.map((item, index) => {
        return <>user</>;
      })}
    </>
  );
}

export default App;
