import React, { useEffect, useState } from 'react';
import SectionTittle from '../Shared/SectionTittle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import ClassesCard from '../Shared/ClassesCard';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://fighting-spirit-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Update the window width on resize
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='my-10 '>
            <SectionTittle heading={'Popular Courses'} subHeading={'Course You May Find Interesting'}></SectionTittle>
            <Swiper
                loop={true}
                slidesPerView={windowWidth > 1000 ? 3 : 1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    classes?.slice(0,6)?.map(singleClass => <SwiperSlide key={singleClass._id}>
                        <ClassesCard singleClass={singleClass}></ClassesCard>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className="card-actions  justify-center py-6">
                <Link to={'/classes'} className="btn btn-error text-white">Show All Courses</Link>
            </div>
        </div>
    );
};

export default PopularClasses;