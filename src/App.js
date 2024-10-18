import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home"; // Your Home component
import Bhutan from "./Components/Bhutan"; // Your Bhutan component
import Navbar from "./Components/Navbar"; // Your Navbar component for the home page
import InNavbar from "./Components/InNavbar";
import Footer from "./Components/Footer"; // Your Footer component
import Italy from "./Components/Italy";
import UAE from "./Components/UAE";

import ImageFormLayout from "./Components/ImageFormLayout";
const App = () => {
  // Custom hook to get the current path
  const location = useLocation();

  // Determine if we are on the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Render Navbar on Home page and InNavbar on all other pages */}
      {isHomePage ? <Navbar /> : <InNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageFormLayout" element={<ImageFormLayout />} />

        <Route path="/bhutan" element={<Bhutan />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/uae" element={<UAE />} />

        {/* Add more country pages as needed */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
