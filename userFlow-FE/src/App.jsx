import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url(https://img.magnific.com/free-vector/background-wave-gradient-colorful-illustration_483537-895.jpg?semt=ais_hybrid&w=740&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Login />
      <hr /> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
