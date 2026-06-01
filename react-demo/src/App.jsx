import "./App.css";
import Card from "./components/Card";

function App() {
  const alertFn = () => {
    alert("arrow Fn");
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Card
        title={"Persian Cat"}
        role={"Guardian"}
        arrow={alertFn}
        image={
          "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg"
        }
      />
      <Card image={"https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg"}/>
      <Card title={"Persian Cat"} role={"Guardian"} />
      <Card />
    </div>
  );
}

export default App;
