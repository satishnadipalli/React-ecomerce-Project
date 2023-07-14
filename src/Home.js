import React from "react";
import imgfirst from "./assets/imgfirst.png";
import imgsec from "./assets/imgsec.png";
import imgthird from "./assets/imgthird.png";
import Carousel from "./component/Carousel";
import ProductCategory from "./component/ProductCategory";
// import useWindowDimensions from "./customHook/useWindowDimensions";
const Home = () => {
  // const windowDimensions = useWindowDimensions();
  // console.log("width ", windowDimensions);
  const slides = [
    { img: imgfirst, title: "first" },
    { img: imgsec, title: "sec" },
    { img: imgthird, title: "third" },
  ];

  return (
    <div className="text-black relative">
      <div className={`w-full h-[170px] md:h-[280px] p-1`}>
        {slides.length > 0 && <Carousel slides={slides} parentWidth={500} />}
      </div>
      <div className="mt-3">
        <ProductCategory />
      </div>
      {/* <div className="mt-3">
        <Card />
      </div> */}
    </div>
  );
};

export default Home;
