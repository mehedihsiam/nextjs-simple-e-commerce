"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Slider = () => {
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 1000 }} loop={true}>
      <SwiperSlide>
        <p>Slide 1</p>
      </SwiperSlide>
      <SwiperSlide>
        <p>Slide 2</p>
      </SwiperSlide>
      <SwiperSlide>
        <p>Slide 3</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
