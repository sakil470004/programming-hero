import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{marginLeft:'20px' ,fontSize:'2rem'}} to='/'>Home</Link>
            <Link style={{marginLeft:'20px' ,fontSize:'2rem'}} to='/login'>Login</Link>
            <Link style={{marginLeft:'20px' ,fontSize:'2rem'}} to='/register'>Register</Link>
        </div>
    );
};

export default Header;