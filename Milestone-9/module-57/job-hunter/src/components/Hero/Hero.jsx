import React from 'react';
import img from './../../assets/hardy.png'
const Hero = () => {
    return (
        <div className='header-background'>
            <div className='container-fit  md:flex items-center pt-5 md:pt-5'>
                <div className='text-center md:text-left pb-4 md:pb-0'>
                    <h1 className='text-5xl md:text-7xl font-semibold leading-normal'>One Step <br />Closer To Your
                        <p className='color-fav'>Dream Job</p>
                    </h1>
                    <p className='md:max-w-[60%]'>
                        Explore thousands of job opportunities
                        with all the information you need. Its
                        your future. Come find it. Manage all
                        your job application from start to finish.
                    </p>
                    <button className='button-style mt-8'>Get Started</button>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Hero;