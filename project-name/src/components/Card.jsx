function Card({ title, Description, imageLink }) {
  //   console.log(props);

  return (
    <>
      <div className="card">
        <img src={imageLink} height={"200px"} width={"100%"} />
        {title.length > 22 ? (
          <abbr title={title || "User"}>
            <h1
              style={{
                fontSize: "20px",
                width: "100%",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {title || "User"}
            </h1>
          </abbr>
        ) : (
          <h1
            style={{
              fontSize: "20px",
              width: "100%",
            }}
          >
            {title || "User"}
          </h1>
        )}
        <h5>
          {Description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia quaerat omnis obcaecati evenie."}
        </h5>
      </div>
    </>
  );
}

export default Card;
