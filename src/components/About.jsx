import "../styles/About.css";
import heroImage from "../assets/paintings/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About</h2>

      <div className="about-content">
        <div className="about-image">
          <img src={heroImage} alt="Artist portrait" />
        </div>

        <div className="about-text">
          <p>
            Jada is a visual artist exploring emotion, identity, and everyday
            beauty through painting and digital art.
          </p>

          <p>
            Her work invites viewers to pause, feel, and connect with quiet
            moments often overlooked.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
