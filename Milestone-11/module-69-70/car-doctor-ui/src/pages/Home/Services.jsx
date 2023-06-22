import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 md:my-32'>
            <div className='text-center'>
                <h2 className='font-bold text-orange-500 text-2xl'>Services</h2>
                <h2 className='font-bold  text-5xl my-5'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;