import React from 'react';
import { GrLocation, HiCurrencyDollar } from '../../assets/icon.jsx';
import { Link } from 'react-router-dom';

const Card = ({ job }) => {
    const { name, id, img, jobType, salary, jobLocation, companyName } = job;
    return (
        <div className='p-8 border border-[ #E8E8E8] rounded-lg flex justify-between items-center mb-6'>
            <div className='flex gap-4 items-center'>
                <img className='' height='240' width="240" src={img} alt="" />
                <div>
                    <p className='text-2xl mt-3 font-bold text-[#474747]'>{name}</p>
                    <p className='text-xl text-[#757575]'>{companyName}</p>
                    <div className='flex gap-4 my-4'>
                        {
                            jobType.map(jobShift => <button
                                key={jobShift}
                                className='rounded  border border-[#9675ff] px-5 py-2 text-[#9675ff] font-bold'>
                                {jobShift}
                            </button>)
                        }

                    </div>
                    <div className='flex gap-10 mb-5 text-[#757575] '>
                        <p className='flex items-center gap-4 font-xl'><GrLocation />{jobLocation}</p>
                        <p className='flex items-center gap-4'><HiCurrencyDollar />Salary:{salary} tk</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`} className='button-style'>View Details</Link>
        </div>
    );
};

export default Card;