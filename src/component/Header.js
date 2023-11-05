import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import alien from '../assets/alien.png';

const Header = ({ cartCount, setCount }) => {
  return (
    <div className="bg-[#0073e6] py-2 md:py-1 px-2 text-white flex justify-between items-center">
      <Link to="/" className="w-12 h-12 md:w-16 md:h-16 overflow-hidden object-contain transition-transform hover:scale-105">
        <img src={alien} alt="Logo" className="w-full h-full object-contain" />
      </Link>
      <div className="w-[500px] order-last md:order-none mt-2 md:mt-0 rounded-full shadow bg-white">
        <div className="flex items-center">
          <button className="text-black mr-2">
            <BiSearch />
          </button>
          <input className="search focus:outline-0 text-black text-md py-3 w-full" type="text" placeholder="Search for products" />
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link to="/cart" className="flex items-center">
          <div className="relative">
            <BiSearch className="text-black mr-2" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-white text-center">
              {cartCount}
            </div>
          </div>
          Cart
        </Link>
        <div className="text-blue-500 hover:text-blue-700">Login</div>
      </div>
    </div>
  );
};

export default Header;

