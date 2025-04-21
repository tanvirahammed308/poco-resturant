// components/Chef.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Removed Navigation

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import b1 from "../../assets/img/hero/order1.png"
import b2 from "../../assets/img/hero/cold-drink.png"

const chefs = [
  {
    name: 'Chef Rafiq Ahmed',
    title: 'Head Chef - Burgers',
    img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Specialist in crafting juicy gourmet burgers with 15+ years of experience.',
  },
  {
    name: 'Chef Shila Karim',
    title: 'Pizza Specialist',
    img: 'https://images.unsplash.com/photo-1574966740793-953ad374e8fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Master of wood-fired pizzas with a fusion twist.',
  },
  {
    name: 'Chef Nayeem Hossain',
    title: 'Dessert Expert',
    img: 'https://images.unsplash.com/photo-1697898109582-40f15c65f174?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Creates heavenly desserts that are both beautiful and mouth-watering.',
  },
  {
    name: 'Chef Tanha Noor',
    title: 'Grill & BBQ Chef',
    img: 'https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNoZWZ8ZW58MHx8MHx8fDA%3D',
    desc: 'BBQ magician who brings smoky flavor and tenderness to life.',
  },
];

const Chef = () => {
  return (
    <div className="w-full md:w-10/12 mx-auto py-12 px-4 ">
        {/* banner */}

        <div className='bg-[#bef1da] flex justify-between px-2 md:px-5 py-2 mb-20'>
            <img src={b2} alt="" className='w-32'/>
            <div className='flex flex-col justify-center'>
                <p className='text-xl md:text-3xl font-bold text-gray-700'>Use Promo Code Get 50% Off</p>
            </div>
            <img src={b1} alt="" className='w-32'/>

        </div>
      <h2 className="text-3xl font-bold  mb-3 text-gray-700"> Meet Our Kitchen Heroes</h2>
      <div className=" w-full h-[2px] flex z-20 mb-5">
            <div className="w-1/4 bg-[#009D57]"></div>
            <div className="w-3/4 bg-gray-200"></div>
          </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {chefs.map((chef, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[400px] bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-400 mb-4"
              />
              <h3 className="text-xl font-semibold">{chef.name}</h3>
              <p className="text-sm text-gray-500">{chef.title}</p>
              <p className="text-gray-600 mt-2 text-sm">{chef.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chef;
