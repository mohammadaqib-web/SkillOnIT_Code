import React, { useState } from "react";
import UserContext from "./userContext";

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    {
      name: "Alex",
      age: 22,
      course: "React",
      status: "Online",
      image:
        "https://img.magnific.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Peter",
      age: 20,
      course: "Full Stack",
      status: "Offline",
      image:
        "https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "John",
      age: 18,
      course: "Node",
      status: "Offline",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
    {
      name: "John",
      age: 18,
      course: "Node",
      status: "Offline",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
    },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
