import React, { useEffect, useState } from "react";
import "./Slider.css";
import imagem1 from "../../public/images/img1.jpg";
import imagem2 from "../../public/images/img2.jpg";
import imagem3 from "../../public/images/img3.jpg";
import imagem4 from "../../public/images/img4.jpg";
import imagem5 from "../../public/images/img5.jpg";
import imagem6 from "../../public/images/img6.jpg";
import imagem7 from "../../public/images/img7.jpg";

const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Adiciona a última e a primeira imagem para criar o efeito de loop infinito
  const imagesLooped = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Quando chegar ao final da sequência de loop, "teleporta" de volta ao primeiro slide real
    if (currentIndex === imagesLooped.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Redefine para o primeiro slide real
      }, 500); // Aguarda a transição terminar antes de teleportar
    }

    // Quando atingir o primeiro slide duplicado, redefine para o último slide real
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(imagesLooped.length - 2); // Redefine para o último slide real
      }, 500);
    }
  }, [currentIndex, imagesLooped.length]);

  const handleTransitionEnd = () => {
    setIsTransitioning(true); // Reactiva a transição após o "teleporte"
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index + 1); // Ajusta o índice para corresponder ao slide real
    setIsTransitioning(true);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd} // Chama quando a transição termina
      >
        {imagesLooped.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index + 1 === currentIndex ? "active-dot" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
