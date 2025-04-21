import React from 'react'
import logo from "../assets/img/logo_svg.svg"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full md:w-10/12 mx-auto mb-20 flex flex-col justify-center items-center py-10'>
        <div className='w-[500px] shadow-md py-10 px-20'>
        <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt=""  className='w-32'/>
          <div className='border border-[#00A149] w-full mt-3'></div>
          <h1 className='lan-primary text-xl font-bold my-3 text-gray-700'>"Join us — it only takes a minute."</h1>
       </div>
       <form action="" className=''>
          <div className='flex flex-col space-y-3'>
              <input type="text" name="" id="" placeholder='full name *' className=' py-2 px-3 border outline-none rounded'/>
              <input type="email" name="" id="" placeholder='email *' className=' py-2 px-3 border outline-none rounded'/>
              <input type="password" name="" id="" placeholder='password *' className=' py-2 px-3 border outline-none rounded'/>
              <button className='text-white bg-[#00A149] w-20 py-2 px-3 rounded-md mx-auto'>Sign up</button>
          </div>
          <p className='lan-secondary mt-3 text-center text-gray-700'>Already have an account? <span><Link className='text-[#00A149]' to="/login">Login</Link></span></p>
  
       </form>

        </div>
    </div>
  )
}

export default Signup