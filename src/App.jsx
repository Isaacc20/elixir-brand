import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import Topnav from "./Components/Topnav";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop";
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
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
