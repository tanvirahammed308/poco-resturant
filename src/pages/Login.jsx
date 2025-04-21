import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo_svg.svg"


const Login = () => {
    
    
  return (
    <div className='w-full md:w-10/12 mx-auto mb-20'>
         <div className='flex flex-col justify-center items-center  w-[500px] mx-auto py-8 mt-20 shadow-md relative'>
                
             <div className='flex flex-col items-center justify-center'>
                <img src={logo} alt="" className='w-32' />
                <div className='border border-[#00A149] w-full mt-3 '></div>
                <h1 className='lan-primary text-xl font-bold my-3 text-gray-700'>Welcome back. Please login to continue.</h1>
             </div>
             <form action="" className='w-[60%]'>
                <div className='flex flex-col space-y-3'>
                    <input type="email" name="" id="" placeholder='email *' className=' py-2 px-3 border outline-none rounded'/>
                    <input type="password" name="" id="" placeholder='password *' className=' py-2 px-3 border outline-none rounded'/>
                    <button className='text-white bg-[#00A149] w-20 py-2 px-3 rounded-md mx-auto'>Login</button>
                </div>
                <p className='lan-secondary mt-3 text-center text-gray-700'>Are you new ? <span><Link className='text-[#00A149]' to="/signup">singup</Link></span></p>
        
             </form>
            </div>
    </div>
  )
}

export default Login