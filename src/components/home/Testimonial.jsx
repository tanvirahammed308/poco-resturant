import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const reviews = [
    {
      name: 'Rakib Hasan',
      text: 'Absolutely delicious! The burger was juicy and full of flavor. Will definitely come back!',
      rating: 5,
    },
    {
      name: 'Ayesha Khan',
      text: 'Loved the ambiance and the food. Especially the pizza—perfectly cheesy!',
      rating: 4,
    },
    {
      name: 'Tanvir Alam',
      text: 'Quick delivery and tasty food. The dessert was a highlight!',
      rating: 5,
    },
  ];

const Testimonial = () => {
  return (
    <div className='w-full md:w-10/12 mx-auto'>
       
        {/* testimonial */}
        <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <p className="text-gray-700 italic mb-4">"{review.text}"</p>
              <h4 className="font-semibold text-lg">{review.name}</h4>
              <div className="text-yellow-500 mt-2">
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonial