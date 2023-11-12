import React from 'react';
import './TimeCalculator.css'

const TimeCalculator = ({timeSpend}) => {
    return (
        <div className='time-calculator'>
           Spent time on read : {timeSpend} min 
        </div>
    );
};

export default TimeCalculator;