import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";







const SubHeader = () => {
  return (
    <div className='border-t-4 border-[#009d57]'>
        <div className=' w-10/12 mx-auto py-3 flex justify-between items-center '>
        {/* left side */}
        <div className='parent md:flex items-center gap-5 hidden'>
        <div className='flex  items-center gap-4  hover:text-[#FFC222] cursor-pointer'>
        <CiLocationOn />
        <p>Find a Store</p>


        </div>
        <div className='flex  items-center gap-4 hover:text-[#FFC222] cursor-pointer'>
        <CiDeliveryTruck />

        <p>Order Tracking</p>


        </div>
        </div>
        
        {/* center side */}
        <div>
            <p>100% Secure delivery without contacting the courier</p>

        </div>
        {/* right side */}
        <div className='text-sm text-gray-400 md:flex gap-2 hidden'>
        <FaFacebook  className='hover:text-[#FFC222]'/>
        <FaSquareXTwitter className='hover:text-[#FFC222]'/>
        <FaInstagramSquare  className='hover:text-[#FFC222]'/>
        <FaYoutube  className='hover:text-[#FFC222]'/>



        </div>

        </div>
    </div>
  )
}

export default SubHeader