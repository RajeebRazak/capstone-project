import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Spare from "./Components/Service/Spare";
import Service from "./Components/Service/Service";
import Gallery from "./Components/Service/Gallery";
import Cusform from "./Components/Service/Form";
import Register from "./Components/Login/Register";
import Cusprice from "./Components/Service/Cusprice";
import Admin from "./Components/Admin/Admin";
import Cart from "./Components/Service/Cart";
import Contact from "./Components/contact/Contact";
import About from "./Components/contact/About";
import Erorrhandling from "./Components/Erorrhandling";
import CustomNavbar from "./Components/Home/Navbar";

function App() {
  // Get the current location
  const location = useLocation();

  // Check if the current route is not the login, register, or admin route
  const isNotNavbarRoute =
    !location.pathname.startsWith("/login") &&
    !location.pathname.startsWith("/register") &&
    !location.pathname.startsWith("/admin");

  // Render the navbar conditionally
  const renderNavbar = isNotNavbarRoute && <CustomNavbar />;

  return (
    <div>
      {renderNavbar}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spare" element={<Spare />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/form" element={<Cusform />} />
        <Route path="/register" element={<Register />} />
        <Route path="/price" element={<Cusprice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="*" element={<Erorrhandling />} />
      </Routes>
    </div>
  );
}

export default App;
