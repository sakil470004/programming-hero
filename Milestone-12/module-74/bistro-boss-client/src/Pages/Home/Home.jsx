import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularItem from './PopularItem';
import Futured from './Futured';
import Testomonial from './Testomonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
        <Helmet>
            <title>Bistro Boss || Home</title>
        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Futured/>
            <Testomonial/>
        </div>
    );
};

export default Home;