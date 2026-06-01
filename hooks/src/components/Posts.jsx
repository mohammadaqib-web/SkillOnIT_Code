import React from "react";
import UseAPICall from "../customHooks/useAPICall";

function Posts() {
  const { data, loading } = UseAPICall(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              {item.id}- {item.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
