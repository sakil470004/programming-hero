import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Job = () => {
    const jobs=useLoaderData();
    return (
        <div>
            {jobs.name}
            <p>{jobs.id}</p>
            <p>{jobs.companyName}</p>
        </div>
    );
};

export default Job;