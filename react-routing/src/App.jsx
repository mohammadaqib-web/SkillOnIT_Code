import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
import DashboardUsers from "./components/DashboardUsers";
import DashboardProducts from "./components/DashboardProducts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<DashboardUsers />} />
          <Route path="products" element={<DashboardProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
