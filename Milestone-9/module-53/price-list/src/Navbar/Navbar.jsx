import React, { useState } from 'react';
import Link from './Link';
import { GiHamburgerMenu, ImCross } from './icon';

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <nav className='bg-purple-400 px-4'>
        <div onClick={() => setOpen(!open)} className='md:hidden'>
            <span>
                {
                    open === true ?
                        <ImCross className="h-6 w-6 text-purple-500" />
                        : <GiHamburgerMenu className="h-6 w-6 text-purple-500" />
                }
            </span>
        </div>
        <ul className={`md:flex absolute md:static duration-500 pl-8 py-2 bg-purple-400 ${open ? 'top-6' : '-top-96'}`}>
            {
                routes.map(route => <Link
                    key={route.id}
                    route={route}
                ></Link>)
            }
        </ul>
    </nav>
    );
};

export default Navbar;