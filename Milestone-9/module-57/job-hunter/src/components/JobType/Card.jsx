import React from 'react';

const Card = ({job}) => {
    const {name ,availableJobNumber,img}=job
    return (
        <div className='header-background rounded-lg p-[55px]'>
            <img width='70' height='70' src={img} alt={name} />
            <p className='text-xl text-[#474747] font-bold pt-5 pb-2 '>{name}</p>
            <p className='text-[#A3A3A3]'>{availableJobNumber} Jobs Available</p>        
        </div>
    );
};

export default Card;