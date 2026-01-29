import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import About from "./components/About";
// import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      {/* <Contact /> */}
       <Footer/>
    </div>
  );
}

export default App;
