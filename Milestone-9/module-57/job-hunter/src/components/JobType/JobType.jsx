import React, { useEffect, useState } from 'react';
import Card from './Card';

const JobType = () => {
    const [jobTypes, setJobTypes] = useState([]);
    useEffect(() => {
        fetch('jobtype.json')
            .then(res => res.json())
            .then(data => setJobTypes(data))
    }, [])
    return (
        <div className='container-fit'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-7 my-[150px] '>
{
    jobTypes.map(job=><Card key={job.id} job={job}/>)
}
        </div>
        </div>
    );
};

export default JobType;