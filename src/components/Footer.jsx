import React from "react";
import "../styles/Footer.css";
import instaIcon from "../assets/paintings/email.png";
import emailIcon from "../assets/paintings/insta.png";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2 className="footer-title">JADA ART STUDIO</h2>

        <div className="footer-links">
          {/* Email icon */}
          <a
            href="mailto:jada.artist@email.com"
            className="footer-link"
            aria-label="Email"
          >
            <img src={emailIcon} alt="Email" className="footer-icon" />
          </a>

          {/* Instagram icon */}
          <a
            href="https://www.instagram.com/sskittle_zz"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <img src={instaIcon} alt="Instagram" className="footer-icon" />
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Jada Art Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
