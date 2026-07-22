import React, { useState } from "react";

function ProfileCard({ info }) {
  const [show, setShow] = useState(false);

  return (
    <div id="card">
      <img src={info.image} alt={info.name} width={"150px"} height={"150px"} />
      <h1>{info.name}</h1>
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "10px",
          lineHeight: "30px",
        }}
      >
        <p>
          <i
            className="fa-regular fa-circle-user"
            style={{ color: "blue" }}
          ></i>{" "}
          Age: {info.age}
        </p>
        <p>
          <i className="fa-solid fa-book-open" style={{ color: "purple" }}></i>{" "}
          Course: {info.course}
        </p>
      </div>
      <br />
      <hr />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          color: info.status === "Online" ? "green" : "red",
        }}
      >
        <i className="fa-solid fa-circle" style={{ fontSize: "12px" }}></i>
        <h2 style={{ alignItems: "center" }}> {info.status}</h2>
      </div>

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "Show"} Details
      </button>
      {show ? <p id="info">This student is learning {info.course}</p> : ""}
    </div>
  );
}

export default ProfileCard;
