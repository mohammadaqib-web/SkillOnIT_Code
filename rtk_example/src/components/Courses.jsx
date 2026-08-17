import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";

function Courses() {
    const navigate = useNavigate();
  const { name } = useParams();
  const [params] = useSearchParams();

  return (
    <div>
      {/* <Navbar /> */}
      Course Name: {name}
      <br />
      {params.get("page")}
      <br />
      {params.get("mode") === "classroom"
        ? "Classrom batch"
        : "  Live classes "}
      <button
        onClick={() => {
          navigate("?mode=online&page=1")
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          navigate("?mode=online&page=2")
        }}
      >
        2
      </button>
    </div>
  );
}

export default Courses;
