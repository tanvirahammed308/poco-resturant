import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pizza from "../../assets/img/hero/hero-pizza.jpg"
import burger from "../../assets/img/hero/hero-burger.jpg"
import chicken from "../../assets/img/hero/hero-chicken.jpg"
import pizza2 from "../../assets/img/hero/hero-pizza2.png"
import burger2 from "../../assets/img/hero/hero-burger2.png"
import chicken2 from "../../assets/img/hero/hero-chicken2.png"

const slides = [
    {
      title: "Unlimited Medium Pizzas", 
      subtitle: "Taste the tradition in every bite!",
      image: pizza,
      price: "$12.99",
    },
    {
      title: "Juicy Burgers",
      subtitle: "Made fresh, served hot!",
      image: burger,
      price: "$3.99",
    },
    {
      title: "Chill with Desserts",
      subtitle: "Sweeten your day with our treats",
      image: chicken,
      price: "$5.49",
    },
  ];

  // right side data
 const data= [
    {
      "name": "Pizza",
     
      "offerTitle": "Buy 1 Get 1 Free",
      "image":pizza2,
      "bg":"#E6E9F0"
    },
    {
      "name": "Burger",
     
      "offerTitle": "Combo Meal at 20% Off",
      "image": burger2,
      "bg":"#F7EFEC"
    },
    {
      "name": "Fried Chicken",
     
      "offerTitle": "Bucket of 6 at Tk 299",
      "image":chicken2,
      "bg":"#F7EFEC"
    }
  ]


  
  
  

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-10/12 mx-auto md:flex gap-5 mt-10">

        {/* carousel */}
        <div className="w-full relative md:w-3/4 group">
      {/* Navigation buttons */}
      <button
    ref={prevRef}
    className="absolute top-1/2 left-5 z-10 bg-white/70 hover:bg-[#00A149] text-black px-3 py-2 rounded-full shadow-md transition opacity-0 group-hover:opacity-100"
  >
    ❮
  </button>
  <button
    ref={nextRef}
    className="absolute top-1/2 right-5 z-10 bg-white/70 hover:bg-[#00A149] text-black px-3 py-2 rounded-full shadow-md transition opacity-0 group-hover:opacity-100"
  >
    ❯
  </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-3">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
                <div className="mt-5 flex items-center gap-5">

              <button className="bg-[#00A149] py-2 px-3 rounded">Order Now</button>
              <p className="text-3xl text-[#00A149]">{slide.price}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* right-side card */}
    <div className="w-full md:w-1/4  flex flex-col gap-5 mt-5 md:mt-0">
      {
        data.map((item)=><div className="card px-2 " style={{backgroundColor:item.bg}}>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-2 md:pb-0 pb-4 ">
          <div>
<img src={item.image} alt="item.name" className="w-32 md:w-20 h-38 bg-cover object-contain"/>
          </div>

          <div className="gap-2 text-center">
            <p className="text-sm text-[#009D57] font-semibold">{item.offerTitle}</p>
            <h1 className="font-bold text-gray-700">{item.name}</h1>
           
            <button className="cursor-pointer bg-[#009D57] px-3 py-2 md:py-0 md:px-2 text-white rounded mt-2 font-semibold">Order Now</button>

          </div>
          </div>

        </div>)
      }
    </div>

    </div>
   
  );
};

export default Hero;
