import React from "react";
import "../styles/About.css";

import portrait from "../assets/paintings/jada.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__card">
          <p className="about__kicker">ABOUT</p>
          <h2 className="about__title">Artist statement</h2>

          <p className="about__text">
            I’m a painter and visual artist focused on creating calm, expressive
            works inspired by nature, emotion, and personal reflection. My
            process blends soft color choices with bold focal points to tell
            quiet stories—pieces that feel intimate, warm, and alive.
          </p>

          <p className="about__text">
            I work mainly with acrylic on canvas, and I also create digital
            artwork. Each piece is treated as a small world—built with patience,
            texture, and careful detail.
          </p>

          <div className="about__highlights">
            <div className="about__pill">
              <span className="about__pillLabel">Medium</span>
              <span className="about__pillValue">Acrylic • Digital</span>
            </div>

            <div className="about__pill">
              <span className="about__pillLabel">Themes</span>
              <span className="about__pillValue">Nature • Emotion • Calm</span>
            </div>

            <div className="about__pill">
              <span className="about__pillLabel">Available for</span>
              <span className="about__pillValue">Commissions</span>
            </div>
          </div>

          <div className="about__actions">
            <a className="about__btn about__btn--primary" href="#gallery">
              Explore Works
            </a>
            <a className="about__btn about__btn--ghost" href="#contact">
              Commission Info
            </a>
          </div>
        </div>

        <div className="about__media">
          <div className="about__mediaFrame">
            {/* Replace with your portrait later if you want */}
            
          
            <img className="about__image" src={portrait} alt="Artist portrait" />
           
          </div>

          <div className="about__note">
            <span className="about__noteDot" />
            <p className="about__noteText">
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;