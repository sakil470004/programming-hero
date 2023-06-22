import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import img1 from '../../assets/slide1.jpg'
import img2 from '../../assets/slide2.jpg'
import img3 from '../../assets/slide3.jpg'
import img4 from '../../assets/slide4.jpg'
import img5 from '../../assets/slide5.jpg'
import SectionTittle from '../components/SectionTittle';
const Category = () => {
    const imgsArray = [
        {
            img: img1,
            name: "Salad",
        },
        {
            img: img2,
            name: "MORIS",
        },
        {
            img: img3,
            name: "Panipora",
        },
        {
            img: img4,
            name: "PLagi",
        },
        {
            img: img5,
            name: "nomoni",
        },
        {
            img: img2,
            name: "MORIS",
        },
        {
            img: img3,
            name: "Panipora",
        },
        {
            img: img4,
            name: "PLagi",
        },
        {
            img: img5,
            name: "nomoni",
        },
    ]
    return (
        <>
        <SectionTittle subHeading={"Form 11 to 10am"} heading={"Order Online"}></SectionTittle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {imgsArray.map((img,index) => <SwiperSlide key={index}>
                    <img src={img.img} alt="" />
                    <h3 className='text-3xl text-white uppercase  -mt-16 mb-10 text-center'>{img.name}</h3>
                </SwiperSlide>)}

            </Swiper>
        </>
    );
};

export default Category;