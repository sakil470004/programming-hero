import React from 'react';
import img from './../../assets/error.webp'
import Header from '../Header/Header';
const Page404 = () => {
    return (
        <div>
            <div className='text-center text-red-500 mt-40 w-[380px]  mx-auto'>
            <h1 className='text-7xl mb-8'>Opp's You Enter Wrong URL</h1>
            <div>
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Page404;