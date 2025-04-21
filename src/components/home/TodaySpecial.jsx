import React, { useRef, useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { StoreContext } from '../../context/StoreProvider';
import { IoIosStar } from "react-icons/io";

const TodaySpecial = () => {
  const { foodMenu } = useContext(StoreContext);
  const filterTodaySpecial = foodMenu.filter((item) => item.todaySpecial);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <div className="w-full md:w-10/12 max-w-screen-xl mx-auto px-4 mt-16">
      <div className="py-6">
        {/* Header */}
        <div className="relative mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 bg-white z-10 relative gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-700">
              Today's Special: {filterTodaySpecial.length}
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
            slidesPerView={1.1}
            slidesPerGroup={1}
            loop={filterTodaySpecial.length > 4}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
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
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-5"
          >
            {filterTodaySpecial.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition duration-300 flex flex-col border border-gray-200 w-full">
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
  );
};

export default TodaySpecial;
