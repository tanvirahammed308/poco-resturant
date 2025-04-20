import React, { useContext, useEffect, useRef, useState } from 'react'
import salad from "../../assets/img/card/salad-card.png"
import burger from "../../assets/img/card/burger-card.png"
import { StoreContext } from '../../context/StoreProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules'; // ✅ Autoplay imported
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { IoIosStar } from "react-icons/io";

const Popular = () => {
    const { foodMenu } = useContext(StoreContext);
      const filterPopular = foodMenu.filter((item) => item.popular);
    
      const prevRef = useRef(null);
      const nextRef = useRef(null);
      const [navReady, setNavReady] = useState(false);
    
      useEffect(() => {
        setNavReady(true);
      }, []);
  return (
    <div className='w-10/12 mx-auto '>
        {/* card */}
        <div className='block md:flex justify-between items-center  space-y-4 md:space-y-0 gap-10'>
            <div className='bg-[#06202B] py-2 px-3 rounded flex items-center  space-y-2 w-full md:w-1/2 justify-evenly'>
<img src={salad} alt="" className='w-32'/>
<div className='space-y-2 text-white'>
    <h1 className='text-2xl font-bold'>Garden Glory Salad</h1>
    <p> "Fresh-picked flavors in every bite."</p>
    <button className='bg-[#00A149] py-1 px-3 text-white font-bold rounded'>Order Now</button>
</div>
            </div>
            <div className='bg-[#1DCD9F] py-2 px-3 rounded flex items-center  space-y-2 w-full md:w-1/2 justify-evenly'>
<img src={burger} alt="" className='w-32'/>
<div className='space-y-2 text-white'>
    <h1 className='text-2xl font-bold'>Spice Stack</h1>
    <p> "A tangy twist in every bite"</p>
    <button className='bg-[#00A149] py-1 px-3 text-white font-bold rounded'>Order Now</button>
</div>
            </div>
        </div>

        {/* popular products */}
        <div className="py-6">
        {/* Header */}
        <div className="relative mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 bg-white z-10 relative gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-700">
              Our Popular Items: {filterPopular.length}
            </h2>
            <div className="flex items-center gap-2">
              <button ref={prevRef} className="p-2 border rounded-full hover:bg-gray-100">
                <FaArrowLeft size={16} />
              </button>
              <button ref={nextRef} className="p-2 border rounded-full hover:bg-gray-100">
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] flex z-20">
            <div className="w-1/4 bg-[#009D57]"></div>
            <div className="w-3/4 bg-gray-200"></div>
          </div>
        </div>

        {/* Swiper Carousel */}
        {navReady && (
          <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            slidesPerGroup={2}
            loop={filterPopular.length > 4}
            modules={[Navigation, Autoplay]} // ✅ Added Autoplay module
            autoplay={{
              delay: 3000, // ✅ Delay between slides
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
          >
            {filterPopular.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition duration-300 flex flex-col border border-gray-300 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-contain bg-gray-50"
                  />
                  <div className="p-3 text-center space-y-2">
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <h3 className="text-md font-semibold text-gray-700">{item.name}</h3>
                    <div className="flex justify-center gap-1 text-yellow-400">
                      <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                    </div>
                    <div className="flex gap-3 justify-center text-sm">
                      <p className="text-gray-400 font-semibold line-through">$550</p>
                      <p className="text-green-600 font-bold">${item.price}</p>
                    </div>
                    <button className="bg-[#009D57] px-3 py-1.5 text-sm text-white font-semibold rounded hover:bg-green-700">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

    </div>
  )
}

export default Popular