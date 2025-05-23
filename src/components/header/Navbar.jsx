import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";






const Navbar = () => {
  return (
    <div className='bg-[#00A149] py-5 '>
    <div className='w-10/12 mx-auto md:flex justify-center hidden mt-3'>
        <ul className='flex gap-15 font-bold text-white'>
            <li>
                <Link to="/" className='flex items-center gap-2 hover:text-yellow-500'>
                <FaHome />

                Home</Link>
            </li>
            <li>
                <Link to="/menu" className='flex items-center gap-2 hover:text-yellow-500'>
                <MdOutlineRestaurantMenu />

                Menu</Link>
            </li>
            <li>
                <Link to="/reservation" className='flex items-center gap-2 hover:text-yellow-500'>
                <MdBookmarkBorder />


                Reservations</Link>
            </li>
            <li>
                <Link to="/contact" className='flex items-center gap-2 hover:text-yellow-500'>
                <MdOutlineContactSupport />
Contact</Link>
            </li>
            <li>
                <Link to="/about" className='flex items-center gap-2 hover:text-yellow-500'>
                <FaUsers />
About us</Link>
            </li>
            
        </ul>
    </div>

    </div>
  )
}

export default Navbar