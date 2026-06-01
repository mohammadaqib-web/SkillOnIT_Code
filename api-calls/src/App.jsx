import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axiosAPICall();
  }, []);

  const apiCall = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };

  const axiosAPICall = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUserData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>API Calls</h1>
      <button onClick={apiCall}>Api call</button>
      <button onClick={axiosAPICall}>Axios Api call</button>
      {userData.map((item, index) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <h3>
              {item.username} - {item.address.city}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default App;
