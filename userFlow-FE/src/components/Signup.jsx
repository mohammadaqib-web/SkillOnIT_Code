import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const signup = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/api/v1/auth/signUp`,
      {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      },
    );
    if (signup) {
      navigate("/");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        height: "360px",
        border: "1px solid",
        padding: "20px",
        textAlign: "center",
        borderRadius: "20px",
        backgroundColor: "rgba(255,255,255,0.3)",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "white" }}>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
          />
        </div>

        <br />

        <div>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>

        <br />

        <div>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>

        <br />

        <button
          type="submit"
          style={{
            marginTop: "20px",
            backgroundColor: "rgb(65, 2, 105)",
            color: "white",
            letterSpacing: "3px",
          }}
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
