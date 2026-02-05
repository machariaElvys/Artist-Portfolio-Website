import React, { useState, useRef, useEffect } from "react";
import "../styles/Gallery.css";
import paintings from "../data/artwork.js";
// import themeIcon from "../assets/paintings/dark.png";
import openSound from "../assets//music/open.mp3";
import clickSound from "../assets//music/clk.mp3";


function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Load dark mode from localStorage (optional)
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // Toggle dark mode (optional)
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  // Open modal
  const openModal = (painting) => {
    setSelectedPainting(painting);
    setLoading(true); // Reset spinner whenever modal opens

     const audio = new Audio(openSound);
     audio.play();

  };

  // Close modal
  const closeModal = () => {
    setSelectedPainting(null);
  };

  // Next image
  const nextImage = () => {
    const currentIndex = paintings.findIndex(
      (p) => p.id === selectedPainting.id
    );
    const nextIndex = (currentIndex + 1) % paintings.length;
    setSelectedPainting(paintings[nextIndex]);
    setLoading(true);

     const audio = new Audio(clickSound);
     audio.play();
  };

  // Previous image
  const prevImage = () => {
    const currentIndex = paintings.findIndex(
      (p) => p.id === selectedPainting.id
    );
    const prevIndex = (currentIndex - 1 + paintings.length) % paintings.length;
    setSelectedPainting(paintings[prevIndex]);
    setLoading(true);

     const audio = new Audio(clickSound);
     audio.play();
  };

  // Touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Touch end
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  // Swipe detection
  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return; // Minimum swipe distance
    if (distance > 0) nextImage(); // swipe left
    else prevImage(); // swipe right
  };

  return (

    <section className={`gallery ${darkMode ? "dark" : ""}`} id="gallery">
      {/* Dark Mode Button (optional) */}
      {/* <button className="theme-toggle" onClick={toggleDarkMode}>
        <img src={themeIcon} alt="Toggle theme" />
      </button> */}

      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="gallery-item"
            onClick={() => openModal(painting)}
          >
            <img src={painting.image} alt={painting.title} />
            <p className="gallery-caption">{painting.title}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPainting && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            {/* Prev */}
            <button className="modal-nav modal-prev" onClick={prevImage}>
              ‹
            </button>

            {/* Next */}
            <button className="modal-nav modal-next" onClick={nextImage}>
              ›
            </button>

            {/* Loading spinner */}
            {loading && <div className="spinner"></div>}

            {/* Image */}
            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="modal-image"
              onLoad={() => setLoading(false)}
            />

            {/* Details */}
            <h2 className="modal-title">{selectedPainting.title}</h2>

            <p className="modal-counter">
              {paintings.findIndex((p) => p.id === selectedPainting.id) + 1} /{" "}
              {paintings.length}
            </p>

            <p className="modal-medium">
              <strong>Medium:</strong> {selectedPainting.medium}
            </p>

            <p className="modal-year">
              <strong>Year:</strong> {selectedPainting.year}
            </p>

            <p className="modal-description">{selectedPainting.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;