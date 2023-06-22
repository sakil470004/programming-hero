import React, { useEffect, useState } from 'react';
import Card from './Card';

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [fullJob, setFullJob] = useState([])
    useEffect(() => {
        fetch('application.json')
            .then(res => res.json())
            .then(data => {
                setFullJob(data)
                const newData = data.slice(0, 4)
                setJobs(newData)
            });

    }, [])
    const handleFullData=()=>{
        setJobs(fullJob)
    }
    return (
        <div id='featuredjob' className='container-fit'>
            <h3 className='text-center text-5xl mb-3'>Featured Jobs</h3>
            <p className='text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                {
                    jobs.map(job => <Card key={job.id} job={job} />)
                }
            </div>
            <div className=' flex justify-center mt-10 mb-28'>

                {fullJob.length!==jobs.length &&<button 
                onClick={handleFullData}
                 className='button-style'>See All Jobs</button>}
            </div>
        </div>
    );
};

export default FeaturedJob;