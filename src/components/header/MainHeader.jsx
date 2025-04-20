import React, { useState } from "react";
import logo from "../../assets/img/logo_svg.svg";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";


const MainHeader = () => {
  const [openNav,setOpenNav]=useState(false);

  const handleNavToggle=()=>{
    setOpenNav(!openNav)
  }
  return (
    <div className="border-t border-gray-200 relative ">
      <div className="w-full px-3 md:px-0 md:w-10/12 mx-auto py-5 flex justify-between ">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-32" />
        </div>
        {/* search */}
        <div className="md:flex items-center relative hidden ">
          <input
            type="text"
            name=""
            id=""
            placeholder="search your food..."
            className="border border-gray-200 py-2 px-3 w-[350px] rounded outline-none"
          />
          <button className="absolute right-0 bg-[#009d57] w-10 h-10.5 px-2 text-white rounded-r text-2xl">
         <FaSearch  />

          </button>
          

        </div>
        {/* content */}
        <div className="hidden md:flex gap-3">
          
          <div className="border border-gray-300 rounded-full px-3 py-3 hover:bg-[#009d57] hover:text-white ">
            <FaShoppingCart />
          </div>
          <div className="border border-gray-300 rounded-full px-3 py-3 hover:bg-[#009d57] hover:text-white">
            <FaRegUser />
          </div>
        </div>
        {/* mobile  */}
        <div className="block md:hidden">
        <BiCategory  className="text-4xl" onClick={handleNavToggle}/>


        </div>
        <div className="absolute top-18 right-0 ">
          {
            openNav && <div className="bg-green-500 w-[300px] flex flex-col justify-center items-center py-2 md:hidden">

              <ul className="text-white">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Menu</Link>
                </li>
                <li>
                  <Link to="#">Reservations</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">About us</Link>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
