import React, { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import { useLoaderData } from 'react-router-dom';

const AllCoffeList = () => {
    const loadCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadCoffees);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted');
                    const filtered = coffees.filter(coffee => coffee._id !== id)
                    setCoffees(filtered)
                }
            })
    }
    return (
        <div className='grid md:grid-cols-2 gap-4 my-7 mx-2'>
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete} />)
            }
        </div>
    );
};

export default AllCoffeList;