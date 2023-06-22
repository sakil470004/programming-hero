import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link style={{marginRight:'30px'}} to='/'>Home</Link>
            <Link style={{marginRight:'30px'}} to='/login'>Log In</Link>
        </div>
    );
};

export default Header;