import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../ContextApi/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { title, _id, img, price } = service;
    const handleSubmit = (e) => {
        e.preventDefault()
        const customerName = e.target.name.value;
        const customerData = {
            serviceName: title,
            serviceId: _id,
            customerName,
            img,
            price,
            email:user.email
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('booked')
                }
            })
    }
    return (
        <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" value={user?.email} />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Service Name</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" value={title} />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
            </div>    <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="text" placeholder="price" className="input input-bordered text-red-900" value={price} />
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type='submit' value='Appointment' />
            </div>
        </form>

    );
};

export default Checkout;