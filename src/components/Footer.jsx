import React from "react";

import { MdFacebook } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import payment from "../assets/img/footer/payment.png";
// import logo from "../assets/img/logo_svg.svg"
import img1 from "../assets/img/footer/cms-footer-1.png"
import img2 from "../assets/img/footer/cms-footer-2.png"
import { Link } from "react-router-dom";
import truck from "../assets/img/footer/truck.png"
import time from "../assets/img/footer/timing.png"
import seller from "../assets/img/footer/best-seller.png"
import store from "../assets/img/footer/store.png"

const Footer = () => {
  return (
    <div>
      <div className="bg-[#00A149]">
        <div className="w-10/12 mx-auto py-5">
        <div className="block space-y-5 md:space-y-0 md:flex justify-between gap-10">

        <div className="parent">
          <div className="flex items-center gap-2">
            <img src={truck} alt="" className="w-12"/>
            <p className="text-white text-xl font-bold">Free Shipping</p>
          </div>
          <p className="text-white text-sm">Sign up for updates and get free shipping</p>
        </div>

        <div className="parent">
          <div className="flex items-center gap-2">
            <img src={time} alt="" className="w-12"/>
            <p className="text-white text-xl font-bold">Fast Delivery</p>
          </div>
          <p className="text-white">We deliver goods around the world</p>
        </div>

        <div className="parent">
          <div className="flex items-center gap-2">
            <img src={seller} alt="" className="w-12"/>
            <p className="text-white text-xl font-bold">Best Quality
            </p>
          </div>
          <p className="text-white">We are international chain of restaurants.

</p>
        </div>

        <div className="parent ">
          <div className="flex items-center gap-2">
            <img src={store} alt="" className="w-12"/>
            <p className="text-white text-xl font-bold">Our Store</p>
          </div>
          <p className="text-white">You can see our “here and now” products

</p>
        </div>
        </div>

        </div>
      </div>

    <div className="bg-[#1E1D23]">
      <div className="w-10/12 mx-auto pt-10 pb-5">
      {/* footer link  */}
      

             
      
              {/* Footer Links */}
              <div className="w-full flex flex-col md:flex-row  md:justify-between gap-6 py-20 text-white">
                {/* Category */}
                <div className="w-full md:w-32 ">
                  <h2 className=" text-xl font-bold mb-2 ">Category</h2>
                  <div className="border-b border-gray-200 mb-3" />
                  <ul className="space-y-3 text-sm ">
                    <li><Link to="/menu" >Burger</Link></li>
                    <li><Link to="/menu">Pizza</Link></li>
                    <li><Link to="/menu">Dessert</Link></li>
                   
                    <li><Link to="/menu">Drinks</Link></li>
                    <li><Link to="/menu">Salad</Link></li>
                   
                  </ul>
                </div>
      
                {/* Company */}
                <div className="w-full md:w-32">
                  <h2 className=" text-xl font-bold mb-2 ">Company</h2>
                  <div className="border-b border-gray-200 mb-3" />
                  <ul className="space-y-3 text-sm  ">
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">Delivery</Link></li>
                    <li><Link to="#">Legal Notice</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                    <li><Link to="#">Secure Payment</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </div>
      
                {/* Account */}
                <div className="w-full md:w-32">
                  <h2 className=" text-xl font-bold mb-2 ">Account</h2>
                  <div className="border-b border-gray-200 mb-3" />
                  <ul className="space-y-3 text-sm  ">
                    <li><Link to="#">Sign In</Link></li>
                    <li><Link to="#">View Cart</Link></li>
                    <li><Link to="#">Return Policy</Link></li>
                    <li><Link to="#">Become a Vendor</Link></li>
                    <li><Link to="#">Affiliate Program</Link></li>
                    <li><Link to="#">Payments</Link></li>
                  </ul>
                </div>
      
                {/* Contact */}
                <div className="w-full md:w-48">
                  <h2 className=" text-xl font-bold mb-2 ">Contact</h2>
                  <div className="border-b border-gray-200 mb-3" />
                  <div className="text-sm  space-y-4 ">
                    <p>House 27/B, Road 13, Gulshan-2, Dhaka 1212, Bangladesh</p>
                    <p>Phone: +9785465258</p>
                    <p>Email: support@blueberry.com</p>
                    <div className="flex gap-2">
                  <img src={img1} alt="Android" className="w-32 rounded" />
                  <img src={img2} alt="Apple" className="w-32 rounded" />
                </div>
                  </div>
                </div>
              </div>
        {/* footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* icons */}
          <div className="flex gap-5">
            <div className="bg-white rounded-full  p-2 hover:bg-[#009d57] hover:text-white flex justify-center items-center w-10 h-10 transition-colors duration-300">
              <MdFacebook className="text-xl" />
            </div>
            <div className="bg-white rounded-full  p-2 hover:bg-[#009d57] hover:text-white flex justify-center items-center w-10 h-10 transition-colors duration-300">
              <FaInstagramSquare className="text-xl" />
            </div>
            <div className="bg-white rounded-full  p-2 hover:bg-[#009d57] hover:text-white flex justify-center items-center w-10 h-10 transition-colors duration-300">
              <FaSquareXTwitter className="text-xl" />
            </div>
            <div className="bg-white rounded-full  p-2 hover:bg-[#009d57] hover:text-white flex justify-center items-center w-10 h-10 transition-colors duration-300">
              <FaPinterest className="text-xl" />
            </div>
          </div>
          {/* middle copy write */}
          <div className="flex flex-col-reverse md:flex-row md:gap-28 gap-2 mt-5 md:mt-0">
          <div>
          <p className="text-white">
            Copyright © 2022 Pocofood. All Rights Reserved.
          </p>
        </div>
        {/* right payment  */}
        <div>
          <img src={payment} alt="" />
        </div>

          </div>
        
        </div>
        
        
      </div>
    </div>
    </div>
  );
};

export default Footer;
