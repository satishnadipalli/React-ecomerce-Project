import React from "react";
import { Link } from "react-router-dom";
import elec from "../assets/elec.jpg";
import jewel from "../assets/jewel.jpg";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
const ProductCategory = () => {
  const categories = [
    { title: "electronics", img: elec },
    { title: "jewelery", img: jewel },
    { title: "men's clothing", img: men },
    { title: "women's clothing", img: women },
  ];
  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   const fetchProducts = async () => {
  //     const res = await fetch(
  //       "https://fakestoreapi.com/products/category/women's clothing"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setCategories(json);
  //       });
  //   };


//   <label>
//     Choose a browser from this list:
//     <input list="browsers" name="myBrowser" />  
// </label>   
// <datalist id="browsers">
//     <option value="Chrome" />
//     <option value="Firefox" />
//     <option value="Internet Explorer" />
//     <option value="Opera" />
//     <option value="Safari" />
//     <option value="Microsoft Edge" />   
// </datalist>

  return (
    <div className="flex justify-evenly flex-wrap text-[12px] md:text-[17px] leading-none rounded-full px-2 py-0 ">
      {categories.length &&
        categories.map((x, i) => (
          <Link to={`/category/${x.title}`} className="m-5 " key={i}>
            <div className="m-[6px] w-[100px] h-[100px] md:w-[200px] md:h-[200px] mx-auto ">
              <img
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] "
                src={x.img}
                alt={x.title}
              />
            </div>
            <p className="mx-auto text-center ">{x.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default ProductCategory;
