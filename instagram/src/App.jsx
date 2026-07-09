import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const fn = () => {
    console.log("arrow function");
  };

  return (
    <>
      <Navbar name={"Username"} age={20} arrFn={fn} />
      Landing Page
      <button onClick={fn}>Click</button>
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <Card
          image={
            "https://media.magnific.com/images/home/tools/reimagine-an-image.webp"
          }
          name={"Flower"}
          price={200}
          arrow={fn}
        />
        <Card
          image={
            "https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"
          }
          name={"Camera"}
          price={20000}
        />
        <Card
          image={
            "https://media.magnific.com/images/home/tools/reimagine-an-image.webp"
          }
          name={"Flower"}
          price={200}
        />
        <Card
          image={
            "https://media.magnific.com/images/home/tools/reimagine-an-image.webp"
          }
          name={"Flower"}
          price={200}
        />
      </div>
    </>
  );
}

export default App;
