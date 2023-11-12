import React from 'react';

const MyEnrollClassCard = ({ singleClass }) => {
    const { name,
        image,
        instructorName,
    } = singleClass
    return (
        <div className={`card card-compact bg-base-100  shadow-xl my-2 py-4`}>
            <figure><img className='object-cover' src={image} alt="fight" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Instructor : {instructorName}</p>
                <div className='flex justify-between '>
                    <span className='badge badge-success text-white px-4 py-2'>Classes Enrolled
                    </span>
                </div>

            </div>
        </div>
    );
};

export default MyEnrollClassCard;