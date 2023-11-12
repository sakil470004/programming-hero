import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee,handleDelete }) => {
    const { coffeename,  details, photo, _id } = coffee

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <img className='p-3' width={150} src={photo} alt='coffee img' />
            <div className="card-body">
                <h2 className="card-title">{coffeename}</h2>
                <p>{details}</p>
                <div className="card-actions ">
                    <button 
                    onClick={()=>handleDelete(_id)}
                     className="btn bg-red-800">Delete</button>
                    <Link to={`/update/${_id}`} className="btn btn-info">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;