function Card({ title, role, arrow,image }) {
  return (
    <>
      <div id="card" onClick={arrow}>
        <img src={image} />
        <h1>{title || "Cat"}</h1>
        <h3>{role || "eating food"}</h3>
        <h5>Description</h5>
      </div>
    </>
  );
}

export default Card;
