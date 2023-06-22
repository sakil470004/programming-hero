import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-background'>
            <div className='container-fit flex flex-col md:flex-row justify-between items-center py-4'>
                <Link 
                to='/'
                className='text-4xl '>JOB HUNTER</Link>
                <div className='flex gap-9'>
                    <Link to='/'>Home</Link>
                    <Link to='/statistic'>Statistic</Link>
                    <Link to='/applied'>Applied Job</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <Link 
                to='/'
                className='button-style mt-3 md:mt-0'>Start Applying</Link>
            </div>
        </nav>
    );
};

export default Header;