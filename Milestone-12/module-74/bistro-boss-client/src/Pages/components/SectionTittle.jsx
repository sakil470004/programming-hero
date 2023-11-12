import React from 'react';

const SectionTittle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-3/12 mx-auto text-center mb-10 mt-8'>
            <p className='text-orange-500'>---{subHeading}---</p>
            <h3 className='text-3xl border-y-2'>{heading}</h3>
        </div>
    );
};

export default SectionTittle;