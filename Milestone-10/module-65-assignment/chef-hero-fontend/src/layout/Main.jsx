import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainNav from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <Container>
            {/* header */}
            <MainNav />

            <Outlet />
            <Footer />
            {/* toast */}
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </Container>
    );
};

export default Main;