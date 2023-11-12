import React, { useEffect, useState } from 'react';
import SectionTittle from '../components/SectionTittle';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
// rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testomonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-20'>
            <SectionTittle
                heading='FRom our menu'
                subHeading='Check it out'
            ></SectionTittle>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {reviews.map(review => <SwiperSlide
                    key={review._id}
                >
                    <div className='m-24 flex flex-col items-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className='my-10'>{review.details}</p>
                        <h3 className='text-2xl text-orange-400'>{review.name}</h3>

                    </div>
                </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testomonial;