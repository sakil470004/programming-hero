import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AppliedJob = () => {
    const jobs = useLoaderData()
    const [job, setJob] = useState(jobs);
    const [selectedValue, setSelectedValue] = useState('filter');

    const handleSelectChange = (event) => {
        const selection = event.target.value
        if (selection === 'both') {
            setJob(jobs)
        } else {
            const filteredJob = jobs.filter(currentJob => {
                const jobTypes = currentJob.jobType.join(' ')
                if (jobTypes.toLowerCase().includes(selection.toLocaleLowerCase())) {
                  console.log(selection,jobTypes)
                    return currentJob;
                }
            })
            setJob(filteredJob)
        }
        setSelectedValue(selection);
    };

    return (
        <div>
            <div className='header-background '>
                <div className='container-fit h-[200px] flex justify-center items-center text-4xl font-bold text-gray-700'>
                    Applied Jobs
                </div>

            </div>
            {jobs.length ? <div className='pt-14 pb-4 container-fit flex justify-end'>
                <select value={selectedValue} onChange={handleSelectChange} className="select select-bordered w-full max-w-[14rem]">
                    <option value='filter' disabled selected>Filter</option>
                    <option value='both'>Both</option>
                    <option value='remote'>Remote</option>
                    <option value='full time'>Full Time</option>
                </select>
            </div>
            :
            <h1 className='text-5xl text-center font-bold'>Not applied any job yet</h1>
            }
            
            <div className='container-fit '>
                {
                    job.map(job => <Card job={job} key={job.id} />)
                }
            </div>
        </div>
    );
};

export default AppliedJob;