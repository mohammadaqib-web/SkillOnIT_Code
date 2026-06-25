function Card({image,text,price}) {
    
  return (
    <>
      <div
        style={{
          height: "330px",
          width: "200px",
          border: "1px solid grey",
          borderRadius: "10px",
          padding:"10px"
        }}
      >
        <img
          src={image}
          alt=""
          width={"100%"}
          height={"200px"}
          style={{ objectFit: "cover" }}
        />
        <h1 style={{marginTop:"0px"}}>{text}</h1>
        <h3 style={{marginTop:"-10px"}}>Rs. {price}</h3>
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "yellow",
            color: "black",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Card;
