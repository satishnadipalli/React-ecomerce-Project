import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import alien from '../assets/alien.png'
const Header = () => {
  const cart = 0
  return (
    <div className="flex flex-wrap bg-[#ff4d4d] py-2 md:py-1 px-2 text-white justify-between items-center">
      <Link to="/" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] overflow-hidden object-contain">
        <img src={alien} alt="" className="w-full h-full object-contain" />
      </Link>
      <div className="w-[500px] order-last md:order-none mt-2 md:mt-0">
        <div className="flex bg-white text-center rounded-md px-2 ">
          <button className=" text-black mr-2">
            <BiSearch />
          </button>
          <input className=" rounded-md focus:outline-0 text-black text-sm py-1" type="text" placeholder="Search for products" />
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center ">
        {cart > 0 && <div>
          Cart{" "}
          <div className="ml-2 text-black bg-white inline-block w-[30px] h-[30px] rounded-full text-center">
            0
          </div>
        </div>}
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
