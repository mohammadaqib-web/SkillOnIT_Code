import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToken } from "../redux/UserSlice";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const LogIn = await axios.post(
      `${import.meta.env.VITE_APP_BASEURL}/api/v1/auth/login`,
      {
        email: formData.email,
        password: formData.password,
      },
    );
    // console.log(LogIn);
    
    if (LogIn) {
      dispatch(AddToken({ token: LogIn.data.token }));
      navigate("/");
    }
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "1px solid",
        padding: "20px",
        textAlign: "center",
        borderRadius: "20px",
        backgroundColor: "rgba(255,255,255,0.3)",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "white" }}>LogIn</h1>

      <form onSubmit={handleSubmit}>
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
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LogIn;
