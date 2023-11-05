import React, { useCallback, useEffect, useRef, useState } from "react";
import CarouselImg from "./CarouselImg";

const Carousel = ({ slides, isloading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className="h-full relative text-black carousel">
      <div
        className="z-20 absolute left-arrow"
        onClick={goToPrevious}
      >
        &#10096;
      </div>
      <div className="carousel-content">
        {isloading ? <CarouselImg /> : slides[currentIndex]}
      </div>
      <div
        className="z-10 absolute right-arrow"
        onClick={goToNext}
      >
        &#10097;
      </div>
    </div>
  );
};

export default Carousel;

