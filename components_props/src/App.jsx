import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      {/* <div style={{display:"flex",gap:"15px"}}>
        <Card image="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" text="Eye Lense" price="4000"/>
        <Card image="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" text="Bird" price="3000"/>
        <Card image="https://object.pixocial.com/pixocial/bqnqy3h6i7rlj0j70lqq71dt.jpg" text="Dog" price="5000"/>
        <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrov0oVDv34j2hnZk8sTwbpZbeZzOA8Zyks9L-w57uXUX39dmBWA0OUCkc&s=10" text="Dog" price="7000"/>
      </div> */}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count+1)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count-1)
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0)
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
