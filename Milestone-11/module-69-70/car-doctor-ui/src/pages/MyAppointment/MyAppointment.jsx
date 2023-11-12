import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthProvider';

const MyAppointment = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${user.email}`,
            {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('car-access-token')}`
                }
            })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/appointments/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted');
                    const remaining = services.filter(service => service._id !== id);

                }
            })
    }
    const handleStatus = (id) => {
        fetch(`http://localhost:5000/appointments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirmed' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('deleted');
                    const remaining = services.filter(service => service._id !== id);
                    const current = services.find(service => service._id === id);
                    current.status = 'Confirmed';
                    setServices([...remaining, current])
                }
            })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Delete
                        </th>
                        <th>Photo</th>
                        <th>Service Name</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {services.map(service => <tr>
                        <th>
                            <button onClick={() => handleDelete(service._id)} className="btn btn-sm btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div class="avatar">
                                <div class="w-24 rounded">
                                    <img src={service?.img} />
                                </div>
                            </div>


                        </td>
                        <td>
                            <p>{service?.serviceName}</p>
                        </td>
                        <td>{service?.customerName}</td>
                        <td>{service?.price}</td>
                        <th>
                            {service?.status ? <p>{service?.status}</p> : <button onClick={() => handleStatus(service._id)} className="btn btn-ghost btn-xs">Pending</button>}
                        </th>
                    </tr>)}

                </tbody>

            </table>
        </div >
    );
};

export default MyAppointment;