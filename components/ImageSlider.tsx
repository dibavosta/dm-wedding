import { useEffect, useState } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const slides = ["amsterdam.jpg", "bild.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className="my-slider-container">
      <div className="slider-wrapper">
        <div className="arrow left" onClick={goToPrevious}>
          ‹
        </div>
        <div className="arrow right" onClick={goToNext}>
          ›
        </div>
        <Image
          className="slide-image"
          src={require("../assets/" + slides[currentIndex])}
          alt="heh"
        />
        <div className="dots-container">
          {slides.map((slide, slideIndex) => (
            <div
              className={
                "dot " + (currentIndex === slideIndex ? "selected" : "")
              }
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ⬤
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
