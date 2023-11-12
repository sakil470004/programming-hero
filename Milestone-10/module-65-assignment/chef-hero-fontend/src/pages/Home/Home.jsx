import React from 'react';
import CarouselBs from './Carousel';
import Hero from './Hero';
import FoodWeHave from './FoodWeHave';
import ServiceSection from './OurServices';

const Home = () => {
    return (
        <div>
            <CarouselBs />
            <Hero />
            <FoodWeHave/>
            <ServiceSection/>

        </div>
    );
};

export default Home;