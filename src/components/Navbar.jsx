import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="logo">Artist Name</h1>
      <ul className="menu">
        <li><a href="#home" className="link">Home</a></li>
        <li><a href="#gallery" className="link">Gallery</a></li>
        <li><a href="#about" className="link">About</a></li>
        <li><a href="#contact" className="link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
