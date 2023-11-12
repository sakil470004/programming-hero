import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/home'>Home</Link>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/friend'>Add Friend</Link>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/allfriends'>All Friend</Link>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/dashboard'>Dashboard</Link>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/about'>About US</Link>
            <Link style={{marginLeft:'30px',fontSize:'30px'}} to='/contact'>contact US</Link>
        </div>
    );
};

export default Header;