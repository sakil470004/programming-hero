import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>This is Friend Details</h1>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
            <p>{data.usename}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default FriendDetails;