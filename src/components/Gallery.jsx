import React, { useState, useRef, useEffect, useMemo } from "react";
import "../styles/Gallery.css";
import paintings from "../data/artwork.js";
import openSound from "../assets/music/open.mp3";
import clickSound from "../assets/music/clk.mp3";

function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [loading, setLoading] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // audio (avoid new Audio each time)
  const openAudioRef = useRef(null);
  const clickAudioRef = useRef(null);

  useEffect(() => {
    openAudioRef.current = new Audio(openSound);
    clickAudioRef.current = new Audio(clickSound);
  }, []);

  const playAudio = (ref) => {
    const audio = ref.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const selectedIndex = useMemo(() => {
    if (!selectedPainting) return -1;
    return paintings.findIndex((p) => p.id === selectedPainting.id);
  }, [selectedPainting]);

  const preload = (src) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
  };

  const openModal = (painting) => {
    setSelectedPainting(painting);
    setLoading(true);
    playAudio(openAudioRef);
  };

  const closeModal = () => {
    setSelectedPainting(null);
  };

  const nextImage = () => {
    if (!selectedPainting) return;
    const nextIndex = (selectedIndex + 1) % paintings.length;
    setSelectedPainting(paintings[nextIndex]);
    setLoading(true);
    playAudio(clickAudioRef);
  };

  const prevImage = () => {
    if (!selectedPainting) return;
    const prevIndex = (selectedIndex - 1 + paintings.length) % paintings.length;
    setSelectedPainting(paintings[prevIndex]);
    setLoading(true);
    playAudio(clickAudioRef);
  };

  // swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) < 50) return;
    if (distance > 0) nextImage();
    else prevImage();
  };

  // lock scroll + keyboard controls + preload neighbors
  useEffect(() => {
    if (!selectedPainting) return;

    // scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // preload prev/next
    const nextIdx = (selectedIndex + 1) % paintings.length;
    const prevIdx = (selectedIndex - 1 + paintings.length) % paintings.length;
    preload(paintings[nextIdx]?.image);
    preload(paintings[prevIdx]?.image);

    // keyboard
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedPainting, selectedIndex]);

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {paintings.map((painting) => (
          <button
            key={painting.id}
            type="button"
            className="gallery-item"
            onClick={() => openModal(painting)}
            aria-label={`Open artwork: ${painting.title}`}
          >
            <img src={painting.image} alt={painting.title} loading="lazy" />
            <p className="gallery-caption">{painting.title}</p>
          </button>
        ))}
      </div>

      {selectedPainting && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>

            <button className="modal-nav modal-prev" onClick={prevImage} aria-label="Previous artwork">
              ‹
            </button>

            <button className="modal-nav modal-next" onClick={nextImage} aria-label="Next artwork">
              ›
            </button>

            {loading && <div className="spinner" aria-label="Loading" />}

            <img
              src={selectedPainting.image}
              alt={selectedPainting.title}
              className="modal-image"
              onLoad={() => setLoading(false)}
            />

            <h2 className="modal-title">{selectedPainting.title}</h2>

            <p className="modal-counter">
              {selectedIndex + 1} / {paintings.length}
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