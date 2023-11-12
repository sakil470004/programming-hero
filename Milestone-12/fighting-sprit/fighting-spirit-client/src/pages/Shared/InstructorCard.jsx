import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstructorCard = ({ instructor}) => {
    const { name,
        email,
        img, description,
    } = instructor
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/toyDetails/${_id}`)
    }
    return  (
        <div className="card card-compact h-[650px] bg-base-100 shadow-xl my-2 py-4">
            <figure><img className='object-cover' src={img} alt="fight" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-sm text-gray-400'>{description}</p>
                <p className=''>Contact Me with : <span className='text-rose-400'>{email}</span></p>
            </div>
        </div>
    );
};

export default InstructorCard;