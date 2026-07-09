import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitFn = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{6,}$/;

    if (user.username.length < 3) {
      return alert("Username must be of 3 characters");
    } else if (!passwordRegex.test(user.password)) {
      return alert("Password is incorrect");
    }

    console.log("form submitted", user);
  };

  return (
    <div>
      {/* <h1>{username}</h1>
      <h1>{password}</h1> */}
      <input
        type="text"
        placeholder="Enter username"
        value={user.username}
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      />
      <br />
      <br />
      {user.username.length && user.password.length > 5 ? (
        <button
          onClick={submitFn}
          disabled={
            user.username.length && user.password.length > 5 ? false : true
          }
          style={{
            cursor:
              user.username.length && user.password.length > 5
                ? "pointer"
                : "not-allowed",
            backgroundColor:
              user.username.length && user.password.length > 5
                ? "blue"
                : "white",
          }}
        >
          Login
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
