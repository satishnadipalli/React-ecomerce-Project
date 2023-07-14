import React from "react";
import { BiSearch } from "react-icons/bi";
import { WiAlien } from "react-icons/wi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-wrap bg-[#ff4d4d] py-2 px-2 text-white justify-between items-center">
      <Link to='/' className="text-purple-500 text-4xl"> 
      <WiAlien />
        {/* <img src="" alt="logo" /> */}
      </Link>
      <div className="w-[500px] order-last md:order-none mt-2 md:mt-0">
        <div className="flex bg-white text-center rounded-md px-2 ">
          <button className=" text-black mr-2">
            <BiSearch />
          </button>
          <input className=" rounded-md focus:outline-0 text-black text-sm py-1" type="text" placeholder="Search for products" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div>
          Cart{" "}
          <span className="relative bg-white text-black rounded-full p-1 text-xs">
            0
          </span>
        </div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
