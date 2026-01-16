import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hero1 from "../assets/home1.png";
import hero2 from "../assets/home2.png";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <div className="w-full border rounded-lg overflow-hidden shadow-sm">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src={hero1}
                alt="Hero Slide 1"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={hero2}
                alt="Hero Slide 2"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
