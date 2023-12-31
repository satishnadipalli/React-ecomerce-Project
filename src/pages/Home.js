import React, { useState, useEffect } from "react";
import Carousel from "../component/Carousel";
import ProductCategory from "../component/ProductCategory";
import CarouselImg from "../component/CarouselImg";
const Home = () => {
  const [slides, setSlides] = useState([{}]);
  const [isloading, setIsLoading] = useState(true);
  const id = "men's clothing"
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        const jsonData = await res.json();
        setIsLoading(false);
        const productsSlides = jsonData.map((x) => { return (<CarouselImg title={x.title} img={x.image} />) })
        // setProducts(jsonData);/
        setSlides(productsSlides);

      } catch (error) {
        setIsLoading(false);
        console.log("err ", error);
      }

    };
    fetchProducts();
  }, [id]);

  return (
    <div className="text-black relative">
      <div className={`w-full h-[170px] md:h-[280px] p-1 overflow-hidden`}>
        {slides.length > 0 && <Carousel slides={slides} isloading={isloading} />}
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
