import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    const path = useLocation().pathname
    const noHeaderAndFooter = path.includes('login') || path.includes('signup')

    return (
        <div>
            {noHeaderAndFooter || <Navbar />}
            <Outlet />
            {noHeaderAndFooter || <Footer />}
        </div>
    );
};

export default Main;