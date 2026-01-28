
import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <h1 className="logo">JADA</h1>

      <ul className={`menu ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" className="link" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#gallery" className="link" onClick={closeMenu}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#about" className="link" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="link" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
