import React from 'react';
import { GrLocation, HiCurrencyDollar } from '../../assets/icon.jsx';
import { Link } from 'react-router-dom';

const Card = ({job}) => {
const {name,id,img,jobType,salary,jobLocation,companyName}=job;
    return (
        <div className='p-10 border border-[ #E8E8E8] rounded-lg'>
            <img className='max-h-[140px]' src={img} alt="" />
            <p className='text-2xl mt-3 font-bold text-[#474747]'>{name}</p>
            <p className='text-xl text-[#757575]'>{companyName}</p>
            <div className='flex gap-4 my-4'>
            {
                jobType.map(jobShift=><button 
                key={jobShift}
                className='rounded  border border-[#9675ff] px-5 py-2 text-[#9675ff] font-bold'>
                    {jobShift}
                </button>)
            }
          
            </div>
            <div className='flex gap-10 mb-5'>
                <p className='flex items-center gap-4'><GrLocation/>{jobLocation}</p>
                <p className='flex items-center gap-4'><HiCurrencyDollar/>Salary:{salary} tk</p>
            </div>
            <Link to={`/job/${id}`} className='button-style'>View Details</Link>
        </div>
    );
};

export default Card;