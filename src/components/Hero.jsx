import React from "react";
// import heroImage from "../assets/paintings/painting1.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="text">
        <h1 className="title">JADA </h1>
        <p className="subtitle">Painter & Visual Artist</p>
      </div>
      {/* <img src={heroImage} alt="Hero Painting" className="hero-image" /> */}
    </section>
  );
};

export default Hero;
