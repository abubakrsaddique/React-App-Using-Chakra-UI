import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box , Text } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import "./myswipercomponent.css";
import slider from "../../images/slider.png";

const MySwiperComponents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (currentSlide === 1) {
        swiperRef.current.swiper.slidePrev();
        setCurrentSlide(0);
      }
    }
  };

  const handleSlideChange = () => {
    setCurrentSlide(swiperRef.current.swiper.realIndex);
  };

  return (
    <Box className="slider-container">
      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        className="swiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
      </Swiper>
      <Box className="swiper-button-prev" onClick={handlePrevButtonClick}></Box>
      <Box className="swiper-button-next" onClick={handleNextButtonClick}></Box>
      <Box className="swiper-pagination"></Box>
      <Text className="slide-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle
            cx="30.1698"
            cy="30.17"
            r="30"
            transform="rotate(30 30.1698 30.17)"
            fill="url(#paint0_linear_1_189)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_1_189"
              x1="30.1698"
              y1="0.169971"
              x2="30.1698"
              y2="60.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4361EE"></stop>
              <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </Text>
      <Box
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></Box>
    </Box>
  );
};

export default MySwiperComponents;
