import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const jobs=useLoaderData();
    return (
        <div>
            {
                jobs.map(job=><li key={job.id}><Link  to={`/job/${job.id}`}>{job.name}ss</Link></li>)
            }
        </div>
    );
};

export default Jobs;