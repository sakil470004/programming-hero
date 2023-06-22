import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'
const Header = () => {
    return (
        <div className='nav-container'>
        <nav className='header'>
            <img src={logo}></img>
            <div className='nav-info'>
                <a href="">
                    Order
                </a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </nav>
        </div>
        
    );
};

export default Header;