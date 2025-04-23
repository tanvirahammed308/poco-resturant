import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    upperText: "Super Delicious",
    title: "Unlimited Medium Pizzas",
    subtitle: "Limited Time Offer ",
    tag: "Taste the tradition in every bite!",
    image: "https://i.ibb.co.com/993PpBhd/hero-pizza.png",
    price: "$12.99",
    bgColor: "#53322D",
  },
  {
    upperText: "Hot & Fresh",
    title: "Burgers Built to Be Craved",
    subtitle: "With Special Sauce ",
    tag: "Made fresh, served hot!",
    image: "https://i.ibb.co.com/Fqg5cgFr/hero-burger.png",
    price: "$3.99",
    bgColor: "#0B4B27",
  },
  {
    upperText: "Best Quality",
    title: "Chill with Desserts",
    subtitle: "Make Your Day Happy",
    tag: "Sweeten your day with our treats",
    image: "https://i.ibb.co.com/XZt57jvV/hero-dessert.png",
    price: "$5.49",
    bgColor: "#7D5B10",
  },
];

const Hero = () => {
  return (
    <div className="w-full relative">
      {/* Full-width Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        className="h-full md:h-[500px] relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-[400px] flex flex-col-reverse md:flex-row items-center justify-center  px-0 md:px-16 md:py-10  py-5"
              style={{ backgroundColor: slide.bgColor }}
            >
              {/* Text Left */}
              <div className="w-full md:w-2/4 text-center md:text-left md:space-y-3 space-y-1 z-10 pb-10 md:pb-0">
                <p className="text-yellow-400 text-xl md:text-3xl font-semibold">
                  {slide.upperText}
                </p>
                <h2 className="text-2xl md:text-5xl font-bold text-white">
                  {slide.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {slide.subtitle}
                </h3>
                <p className="text-md md:text-lg text-white">{slide.tag}</p>
                <div className="flex flex-row sm:flex-row sm:justify-start justify-center items-center gap-3 pt-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-5 py-2 rounded text-base font-medium">
                    Order Now
                  </button>
                  <p className="text-2xl font-bold text-[#00A149]">
                    {slide.price}
                  </p>
                </div>
              </div>

              {/* Image Right */}
              <div className="w-1/2 md:w-2/4 flex justify-center items-center  md:mb-0 mt-6 md:mt-0 ">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[100%] max-w-[300px] md:max-w-[500px] object-cover "
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fix Pagination Placement */}
      <div
        className="swiper-pagination absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 translate-y-10"
        style={{
          bottom: "10px", // Adjusts distance from the bottom
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "10", // Ensures it’s above the content
        }}
      ></div>
    </div>
  );
};

export default Hero;
