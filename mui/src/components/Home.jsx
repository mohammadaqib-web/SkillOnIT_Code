import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const routingFN = ()=>{
        console.log("Action performed");
        navigate("/about")
    }
  return (
    <div>
      Home
    
      <Link to={"/about"}>About</Link>
      <button onClick={routingFN}>Task</button>
    </div>
  )
}

export default Home
