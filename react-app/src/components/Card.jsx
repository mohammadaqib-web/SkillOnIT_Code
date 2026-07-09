function Card({ img, name, clickFn }) {
  return (
    <div id="card">
      <img src={img} alt="" width={"120px"} height={"120px"} />
      <h1>{name}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi libero
        corrupti quae rem repellat ullam quisquam, molestiae perferendis amet
        modi excepturi iste, voluptatibus deleniti, fuga facere veritatis!
        Maxime, quaerat corrupti!
      </p>
      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={clickFn}
      >
        Like
      </button>
    </div>
  );
}

export default Card;
