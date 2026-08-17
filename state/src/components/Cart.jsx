import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [isLogin, setIsLogin] = useState("false");
  const navigate = useNavigate();

  const navigateCheckout = () => {
    if (isLogin===false) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div id="card">
      <img
        src="https://m.media-amazon.com/images/I/61nv5TqjBoL._AC_AA360_.jpg"
        alt=""
        width={"100%"}
        height={"150px"}
        style={{ objectFit: "cover" }}
      />
      <h1>Voltas AC</h1>
      <h3>45,000</h3>
      <button id="buy" onClick={navigateCheckout}>
        Buy Now
      </button>
    </div>
  );
}

export default Cart;
