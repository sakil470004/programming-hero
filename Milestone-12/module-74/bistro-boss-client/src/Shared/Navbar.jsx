import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navElement = <>
        <li className='ml-3 btn btn-outline btn-secondary rounded-lg'><Link to={'/'}>Home</Link></li>
        <li className='ml-3 btn btn-outline btn-secondary rounded-lg'><Link to={'/menu'}>Menu</Link></li>
        <li className='ml-3 btn btn-outline btn-secondary rounded-lg'><Link to={'/order/salad'}>Order</Link></li>
        <li className='ml-3 btn btn-outline btn-secondary rounded-lg'><Link to={'/login'}>Login</Link></li>
        <li className='ml-3 btn btn-outline btn-secondary rounded-lg'>Logout</li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElement}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navElement}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;