import React from "react";

function Card({ image, name, price, arrow }) {
  return (
    <div
      style={{
        border: "1px solid",
        width: "200px",
        height: "320px",
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt=""
        height={"100px"}
        width={"100px"}
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <h1>{name}</h1>
      <h4>Rs. {price}</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "yellow",
          border: "none",
          borderRadius: "10px",
        }}
        onClick={arrow}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
