import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <div>
            
            <Link style={{ marginLeft: '30px', fontSize: '30px' }} to='/dashboard/friends'>Friends</Link>
            <Link style={{ marginLeft: '30px', fontSize: '30px' }} to='/dashboard/about'>Dashboard About</Link>
        </div>
    );
};

export default DashboardNav;