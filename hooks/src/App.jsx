import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import UseAPICall from "./customHooks/useAPICall";
import Posts from "./components/Posts";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const initialState = { value: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { value: state.value + 1 };
      case "decrement":
        return { value: state.value - 1 };
      case "reset":
        return { value: 0 };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    console.log(userRef, passwordRef.current);
    userRef.current.disabled = true;
    if (!username) {
      userRef.current.focus();
      return alert("Username and password must be filled");
    } else if (!password) {
      passwordRef.current.focus();
      return alert("Username and password must be filled");
    }

    alert("Login Successfull!");
  };

  // useEffect(() => {
  //   UseAPICall("https://jsonplaceholder.typicode.com/users");
  // }, []);

  // const callAPI = () => {
  const { data, loading } = UseAPICall(
    "https://jsonplaceholder.typicode.com/users",
  );
  console.log(data, loading);
  // };

  return (
    <>
      <h1>{state.value}</h1>
      {/* <button onClick={}>callAPI</button> */}
      <Posts/>

      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
