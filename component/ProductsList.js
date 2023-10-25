import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState("loader");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        const jsonData = await res.json();
        // console.log("Res ", jsonData);
        setIsLoading("success");
  
        setProducts(jsonData);
      } catch (error) {
        setIsLoading("fail");
        console.log("err ", error);
      }
      // .then((res) => res.json())
      // .then((json) => {
      //   console.log(json);
      //   setProducts(json);
      // });
    };
    fetchProducts();
  }, [id]);


  return (
    <div className="flex flex-col justify-center ">
      {isloading === "loader" ? (
        <div className="flex justify-center items-center h-screen text-base md:text-4xl">
          Loading...
        </div>
      ) : isloading === "success" ? (
        <div className="">
          {products.length &&
            products.map((x, i) => (
              <div key={i} className="flex flex-col md:flex-row  text-[12px] md:text-[17px]  gap-4 px-3 py-2">
                <div className="basis-1/2 ">
                  <div className="m-[6px] w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto">
                    <img
                      className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] "
                      src={x.image}
                      alt={x.category}
                    />
                  </div>
                </div>
                <div className="basis-full ">
                  <p className="text-base md:text-lg font-semibold">
                    {x.title}
                  </p>
                  <div className="text-xs md:text-sm my-1">
                    <span className="pl-1 py-[1px] bg-green-700 text-white rounded-md w-[55px]">
                      {x.rating.rate} &#9733;{" "}
                    </span>
                    <span className="pl-1 py-[1px] text-gray-500 rounded-md w-[55px]">
                      {" "}
                      {x.rating.count} Ratings
                    </span>
                  </div>
                  <p className="text-xs md:text-sm">
                    Description: {x.description}
                  </p>
                  <p className="text-base md:text-lg font-semibold my-2">
                    &#8377; {x.price}
                  </p>
                  <button className="text-base md:text-lg my-2 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen text-base md:text-4xl">
          Something went wrong
        </div>
      )}
    </div>
  );
};

export default ProductsList;
