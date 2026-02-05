import React, { useState, useRef, useEffect} from "react";
import "../styles/Gallery.css";
import paintings from "../data/artwork.js";
import themeIcon from "../assets/paintings/dark.png"

function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [darkMode, setDarkMode] = useState(false);


  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);


  /* Toggle Dark Mode */
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark");

    localStorage.setItem("darkMode", !darkMode);
  };

  // Open modal
  const openModal = (painting) => {
    setSelectedPainting(painting);
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
  };

  // Previous image
  const prevImage = () => {
    const currentIndex = paintings.findIndex(
      (p) => p.id === selectedPainting.id
    );

    const prevIndex =
      (currentIndex - 1 + paintings.length) % paintings.length;

    setSelectedPainting(paintings[prevIndex]);
  };

  /* Touch Start */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  /* Touch End */
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    handleSwipe();
  };

  /* Detect swipe */
  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;

    // Minimum swipe distance
    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      nextImage(); // Swipe left
    } else {
      prevImage(); // Swipe right
    }
  };


  return (
    <section  className={`gallery ${darkMode ? "dark" : ""}`}
  id="gallery" >
    {/* Dark Mode Button */}
{/* <button
  className="theme-toggle"
  onClick={toggleDarkMode}
>
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

            /* Swipe handlers */
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close */}
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            {/* Prev */}
            <button
              className="modal-nav modal-prev"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Next */}
            <button
              className="modal-nav modal-next"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Image */}
            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="modal-image"
            />

            {/* Details */}
            <h2 className="modal-title">{selectedPainting.title}</h2>

            <p className="modal-medium">
              <strong>Medium:</strong> {selectedPainting.medium}
            </p>

            <p className="modal-year">
              <strong>Year:</strong> {selectedPainting.year}
            </p>

            <p className="modal-description">
              {selectedPainting.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;