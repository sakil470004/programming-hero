import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Services from './Services';
import ContactUs from './ContactUs';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div  >
      <Helmet>
        <title>Fighting Spirit | Home</title>
      </Helmet>
      <Slider ></Slider>
      <PopularClasses ></PopularClasses>
      <PopularInstructors ></PopularInstructors>
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;