import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone, BiCalendar, GrLocation, HiCurrencyDollar } from '../../assets/icon';
import { addToDb } from '../utilities/fakedb';
import { toast } from 'react-hot-toast';

const JobDetails = () => {
    const jobsData = useLoaderData()

    const handleApply = () => {
        const isAdded = addToDb(jobsData.id);
        if (isAdded) {
            toast.success('Successfully Applied!')
        }
        else {
            toast.error('Already applied')
        }
    }

    return (
        <div>

            <div className='header-background '>
                <div className='container-fit h-[200px] flex justify-center items-center text-4xl font-bold text-gray-700'>
                    Job Details
                </div>

            </div>

            <div className='container-fit grid grid-cols-3 bg-white pt-36 w-full gap-6 items-center'>
                <div className='col-span-2'>
                    <p><span className='font-bold'>Job Description : </span>{jobsData.jobDescription}</p>
                    <p className='mt-6'><span className='font-bold'>Job Responsibility : </span>{jobsData?.jobResponsibility?.map((rs, index) => <span key={index}>{rs} {index !== jobsData.jobResponsibility.length - 1 && ","}</span>)
                    }</p>
                    <p className='mt-6'><span className='font-bold'>Eductional Requirement : </span>{jobsData.educationRequirement}</p>
                    <p className='mt-6'><span className='font-bold'>Experience : </span>
                        <br />
                        <br />
                        {jobsData.jobExperience
                        } Years working on this field</p>
                </div>
                <div>
                    <div className='header-background p-8 rounded-lg'>
                        <h3 className='font-bold text-2xl'>Job Details</h3>
                        <div className='border border-b-[#41416e] my-4'></div>

                        <p className='flex items-center gap-4 text-xl '><HiCurrencyDollar />Salary:{jobsData.salary} tk</p>
                        <p className='text-xl flex items-center gap-4 my-2'><BiCalendar />Job Tittle :{jobsData.name}</p>

                        <h3 className='font-bold text-2xl my-4'>Contact Information</h3>
                        <div className='border border-b-[#41416e] my-4'></div>

                        <p className='text-xl flex items-center gap-4 '><AiOutlinePhone />{jobsData.phone}</p>
                        <p className='text-xl flex items-center gap-4 my-2'><AiOutlineMail />{jobsData.email}</p>
                        <p className='text-xl flex items-center gap-4 '><GrLocation />{jobsData.jobLocation}</p>
                    </div>
                    <button
                        onClick={handleApply}
                        className='button-style w-full mt-6'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;