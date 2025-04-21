import React, { useState } from "react";
import logo from "../../assets/img/logo_svg.svg";
import { FaSearch, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavToggle = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="border-t border-gray-200 relative bg-white shadow-sm">
      <div className="w-full px-3 md:px-0 md:w-10/12 mx-auto py-5 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32" />
          </Link>
        </div>

        {/* Search */}
        <div className="md:flex items-center relative hidden">
          <input
            type="text"
            placeholder="Search your food..."
            className="border border-gray-200 py-2 px-3 w-[350px] rounded outline-none"
          />
          <button className="absolute right-0 bg-[#009d57] w-10 h-10 px-2 text-white rounded-r text-xl flex items-center justify-center">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-3">
          <div className="border border-gray-300 rounded-full p-3 hover:bg-[#009d57] hover:text-white cursor-pointer">
            <FaShoppingCart />
          </div>
          <Link to="/login">
            <div className="border border-gray-300 rounded-full p-3 hover:bg-[#009d57] hover:text-white cursor-pointer">
              <FaRegUser />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block md:hidden">
          <BiCategory
            className="text-4xl cursor-pointer"
            onClick={handleNavToggle}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {openNav && (
        <div className="absolute right-0 top-[100%] bg-[#009d57] w-3/4 md:hidden z-50 py-5">
          <ul className="text-white flex flex-col items-center py-4 gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
