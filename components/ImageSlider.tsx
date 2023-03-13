import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const slides = [
    "amsterdam.jpg",
    "bild.jpg",
    "bus.JPG",
    "datatjej.JPG",
    "granna.JPG",
    "korea.JPG",
    "korea2.JPG",
    "philli.JPG",
    "philli2.JPG",
    "philli3.JPG",
    "philli4.JPG",
    "stockholm.JPG",
  ];

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

  const isSelected = (slideIndex: number) => {
    return currentIndex === slideIndex ? styles.selected : "";
  };

  return (
    <div>
      <div className={styles.outerImage}>
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.arrow} ${styles.left}`}
            onClick={goToPrevious}
          >
            ‹
          </div>

          <div className={styles.sliderWrapper}>
            <Image
              className={styles.slideImage}
              src={require("../assets/" + slides[currentIndex])}
              alt="heh"
            />
          </div>
          <div className={`${styles.arrow} ${styles.right}`} onClick={goToNext}>
            ›
          </div>
        </div>
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <div
            className={`${styles.dot} ${isSelected(slideIndex)}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ⬤
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
