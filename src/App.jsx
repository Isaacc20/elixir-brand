import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import app from "./Firebase";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import Topnav from "./Components/Topnav";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop";
import View from "./Pages/View";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Completed from "./Pages/Completed";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import Login from "./Pages/Admin/Login";
import Add from "./Pages/Admin/Upload";
import Orders from "./Pages/Admin/Orders";
import Register from "./Pages/Admin/Register";
// import Home from "./Components/Home";

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-100 big-div">
        <Topnav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/view" element={<View />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/complete" element={<Completed />} />
          <Route path="/admin">
            <Route path="" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard">
              <Route path="" element={<Dashboard />} />
              <Route path="upload" element={<Add />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="registernewadmin" element={<Register />} />
          </Route>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
