
import React, { useState } from "react";
import "../styles/Gallery.css";
import paintings from "../data/artwork.js";

function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="gallery-item"
            onClick={() => setSelectedPainting(painting)}
          >
            <img src={painting.image} alt={painting.title} />
            <p className="gallery-caption">{painting.title}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPainting && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPainting(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedPainting(null)}
            >
              ×
            </button>

            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="modal-image"
            />

            <h2 className="modal-title">{selectedPainting.title}</h2>
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
