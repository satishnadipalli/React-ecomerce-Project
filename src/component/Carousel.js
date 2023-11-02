import React, { useCallback, useEffect, useRef, useState } from "react";
import CarouselImg from "./CarouselImg";

const Carousel = ({ slides, isloading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const goToPrevious = () => {
    const isFirstSlides = currentIndex === 0;
    const newIndex = isFirstSlides ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlides = currentIndex === slides.length - 1;
    const newIndex = isLastSlides ? 0 : currentIndex + 1;
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

  const goToSlide = (i) => {
    setCurrentIndex(i);
  };
  return (
    <div className="h-full relative text-black">
      <div
        className="z-20 absolute top-1/2 left-[32px] -translate-y-1/2 text-[22px] md:text-[55px] text-black cursor-pointer"
        onClick={goToPrevious}
      >
        &#10096;
      </div>
      {/* <div
        className="w-full h-full rounded-[10px] bg-no-repeat bg-contain bg-center"
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
      ></div> */}
      <div 
        className="w-full h-full rounded-[10px] bg-no-repeat bg-contain bg-center"
        >{isloading ?  <CarouselImg /> : slides[currentIndex]}</div>
      <div
        className="absolute top-1/2 right-[32px] -translate-y-1/2 text-[22px] md:text-[55px] text-black z-10 cursor-pointer"
        onClick={goToNext}
      >
        &#10097;
      </div>
      
    </div>
  );
};

export default Carousel;
