import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import "./styles.css";

// import required modules
import { Scrollbar, Autoplay } from "swiper";
import SliderCard from './SliderCard';
const Slider = () => {
    const images = [
        'https://plus.unsplash.com/premium_photo-1661642070910-fa150ee2e374?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1607031767898-5f319512ff1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1560631820-5bc34db86fe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ]
    const descriptions=[
        "Experience the power and discipline of Karate",
        "Master the art of high-flying kicks in Taekwondo",
        "Train your body and mind with the ancient art of Muay Thai",
    ]
    return (
        <div className='my-5'>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Scrollbar]}
                className="mySwiper"
            >
                {
                    images.map((img, index) => <SwiperSlide key={index}>
                        <SliderCard  img={img} des={descriptions[index]}></SliderCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;