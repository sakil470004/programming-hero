import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import JobType from '../JobType/JobType';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div className='px-2'>
            <Header />
            <Outlet />
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Home;