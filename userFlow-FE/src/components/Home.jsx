import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  console.log(user);

  const handlePost = async () => {
    const formData = new FormData();

    formData.append("text", text)
    formData.append("image", image)
    try {
      const post = await axios.post(
        `${import.meta.env.VITE_APP_BASEURL}/api/v1/post/createPost`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type="file" accept="image/png" onChange={(e)=>setImage(e.target.files[0])}/>
      <br />
      <button onClick={handlePost}>POST</button>
    </div>
  );
}

export default Home;
