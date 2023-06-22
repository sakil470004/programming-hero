import React from 'react';
import AiFillCheckCircle from './icon';


const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <AiFillCheckCircle className="h-4 w-4 text-purple-600" />
            <span className='pl-4'>{feature}</span>
        </div>
    );
};

export default Feature;