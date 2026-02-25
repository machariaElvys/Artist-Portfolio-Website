import React from "react";
import heroImage from "../assets/paintings/jada3.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">JADA ART STUDIO</p>

          <h1 className="hero__title">
            Contemporary paintings that feel calm, expressive, and alive.
          </h1>

          <p className="hero__subtitle">
            I create acrylic and digital pieces inspired by nature, emotion, and
            quiet beauty. Explore selected works and commission info below.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#gallery">
              View Gallery
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            <img className="hero__image" src={heroImage} alt="Featured artwork" />
          </div>

          <div className="hero__meta">
            <span className="hero__metaDot" />
            <p className="hero__metaText">
              Featured work • Acrylic on canvas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;