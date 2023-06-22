import React from 'react';
import './Header.css'
import logo from './../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='nav-container'>
        <nav className='header'>
            <img src={logo}></img>
            <div className='nav-info'>
                <Link to='/'>
                    Shop
                </Link>
                <Link to='/orders'>
                    Order Review
                </Link>
                <Link to='/inventory'>
                    Inventory
                </Link>
                <Link to='/login'>
                    Login
                </Link>

            </div>
        </nav>
        </div>
        
    );
};

export default Header;