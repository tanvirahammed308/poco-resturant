import React from 'react'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";


const Contact = () => {
  return (
    <div className='w-full md:w-10/12 mx-auto'>
        <div className="bg-[#cff5e0] py-5 px-10 my-5 rounded space-y-5">
                <div className="text-center mt-8 space-y-3">
                    <h3 className="font-bold text-[#00A149] text-2xl">Get Intouch
                    </h3>
                  <h1 className="text-xl md:text-5xl font-bold">We’d love to hear from you!</h1>
                  <p className="text-gray-600 font-semibold">
                   
                    Whether you have questions about our food, need support for reservation
, or just want to say hello — we’re here to
                    help.
                  </p>
                </div>
                {/* company info */}
                <div className=" flex flex-col md:flex-row justify-center items-center md:justify-between gap-5">
                  <div className="flex flex-col justify-center items-center  w-[350px]  py-3 px-2 shadow-2xl rounded space-x-2 border-2 border-[#00A149] bg-white space-y-2 ">
                    
        
                    <GrLocation className="text-5xl  text-[#00A149]" />
                    
                    <div className="text-center">
                      <h2 className="font-bold">Address</h2>
                      <p className="font-semibold text-gray-500">
                       
                        sky High, House 14, Road main, Block A, Dhaka 1230
                      </p>
                    </div>
                  </div>
                  <div  className="flex flex-col justify-center items-center  w-[350px]  py-3 px-2 shadow-2xl rounded space-x-2 border-2 border-[#00A149] bg-white space-y-2 ">
                    <IoCallOutline className="text-5xl  text-[#00A149]" />
                    <div className="text-center">
                      <h2 className="font-bold">Contact</h2>
                      <p className="font-semibold text-gray-500">
                       
                        Phone <span>+880 9854612546</span>
                      </p>
                      <p className="font-semibold text-gray-500">
                      
                        Email <span>pocoresturant@gmail.com</span>
                      </p>
                    </div>
                  </div>
                  <div  className="flex flex-col justify-center items-center  w-[350px]  py-3 px-2 shadow-2xl rounded space-x-2 border-2 border-[#00A149] bg-white space-y-2 ">
                    <MdAccessTime  className="text-5xl  text-[#00A149]" />
                    <div className="text-center">
                      <h2 className="font-bold">Business Hours</h2>
                      <p className="font-semibold text-gray-500">
                        
                        Monday - Friday<span> 9:00 AM - 6:00 PM</span>
                      </p>
                      <p className="font-semibold text-gray-500">
                        Saturday<span> 10:00 AM - 4:00 PM</span>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
        
              {/* location map */}
              <div className="mt-8 flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.485987667766!2d90.42418197602326!3d23.76570248818728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sbdCalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1744706768439!5m2!1sen!2sbd"
                  width="1000"
                  height="450"
                  style={{ border: "0" }} // Correct style syntax for JSX
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* contact form */}
              <div className="bg-[#cff5e0] my-10 py-8 px-10 rounded">
                <div className="text-center space-y-3">
                  <h1 className="text-3xl font-bold text-[#00A149]">
                    Leave us your info
                  </h1>
                  <p className="text-sm font-semibold text-gray-400">
                    and we will get back to you.
                  </p>
                </div>
                {/* form body */}
                <div className="mt-10 space-y-5 items-center ">
                  <div className="block md:flex gap-2 justify-center space-y-4 md:space-y-0">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full Name*"
                      required
                      className="bg-white shadow-2xl py-2 px-3 rounded w-full md:w-[300px] outline-none"
                    />
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email*"
                      required
                      className="bg-white shadow-2xl py-2 px-3 rounded w-full md:w-[300px] outline-none"
                    />
                  </div>
                  <div className="space-y-5 flex justify-center flex-col items-center">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Subject*"
                      required
                      className="bg-white shadow-2xl py-2 px-3 rounded outline-none w-full md:w-[600px]"
                    />
        
                    <textarea
                      id="message"
                      rows="4"
                      className="bg-white shadow-2xl py-2 px-3 rounded outline-none w-full md:w-[600px]"
                      placeholder=" message*"
                    ></textarea>
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="flex gap-2 text-xl items-center bg-[#00A149]  px-4 py-2  rounded-md ">
                      <p className="text-white text-[16px] font-semibold">Submit</p>
                    </button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Contact