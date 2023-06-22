import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h3>Knowledge Cafe</h3>
            <div className='nav-info'>
                <a href="3">About Us</a>
                <a href="3">Login</a>
                <a href=""><img className='user-log' src="https://robohash.org/logo" alt="" width={60} height={60}/></a>
            </div>
        </nav>
    );
};

export default Header;