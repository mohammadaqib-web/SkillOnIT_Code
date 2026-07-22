import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();

    formData.append("image", image);
    console.log(formData.get("image"));

    try {
      const upload = await axios.post(
        "http://localhost:5000/imageUpload",
        formData,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/png"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={uploadImage}>Submit</button>
    </div>
  );
}

export default App;
