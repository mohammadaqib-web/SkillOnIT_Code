import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const passwordCheck =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (formData.name.length < 3 || formData.password.length < 8) {
      return alert("Missing mandatory fields");
    } else if (!passwordCheck.test(formData.password)) {
      return alert(
        "Password must include 1 small case character, 1 uppercase, 1 number and 1 special character",
      );
    }

    console.log("All clear", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="form">
        <h1>Log In</h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type={passwordType}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <p
            onClick={() => {
              setPasswordType(
                passwordType === "password" ? "text" : "password",
              );
            }}
          >
            {passwordType === "password" ? "Show" : "Hide"} Password
          </p>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
