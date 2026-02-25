import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <p className="contact__kicker">CONTACT</p>
        <h2 className="contact__title">Let’s work together</h2>
        <p className="contact__text">
          For commissions, collaborations, or prints — send a message and I’ll
          reply as soon as possible.
        </p>

        <div className="contact__grid">
          <a className="contact__card" href="mailto:yourname@email.com">
            <span className="contact__label">Email</span>
            <span className="contact__value">jadaArts@gmail.com</span>
          </a>

           
          <a className="contact__card" href=" https://www.instagram.com/sskittle_zz" target="_blank" rel="noreferrer">
            <span className="contact__label">Instagram</span>
            <span className="contact__value">sskittle_zz</span>
          </a>

          <a className="contact__card" href="https://wa.me/254 706921211" target="_blank" rel="noreferrer">
            <span className="contact__label">WhatsApp</span>
            <span className="contact__value">+254 706921211</span>
          </a>
        </div>

        <p className="contact__note">
          
        </p>
      </div>
    </section>
  );
};

export default Contact;