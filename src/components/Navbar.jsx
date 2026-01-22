
import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <h1 className="logo">JADA</h1>

      <ul className={`menu ${isOpen ? "active" : ""}`}>
        <li><a href="#home" className="link" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#gallery" className="link" onClick={() => setIsOpen(false)}>Gallery</a></li>
        <li><a href="#about" className="link" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#contact" className="link" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
