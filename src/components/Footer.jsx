import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer " id="contact">
      <div className="footer-content">
        <h2 className="footer-title">JADA ART STUDIO</h2>

        <div className="footer-links">
          {/* Email link */}
          <a href="mailto:jada.artist@email.com" className="footer-link">
            jada.artist@email.com
          </a>

          {/* Instagram link */}
          <a
            href="https://www.instagram.com/sskittle_zz
"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
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
