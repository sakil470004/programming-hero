import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import setTittle from '../shared/titleFixer';
import { toast } from 'react-hot-toast';

const AddToy = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const toyName = form.toyName.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const details = form.details.value;
        const img = form.img.value;
        const toyInfo = {
            toyName,
            subCategory,
            price,
            rating,
            availableQuantity,
            details,
            img,
            sellerName: user.displayName,
            sellerEmail: user.email,
        }
        fetch('https://battle-toys-server.vercel.app/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Toy Added")
                    navigate('/myToys')

                }
            })
    }
    setTittle('Add Toy')
    return (
        <div className='bg-pink-50 py-10 md:py-32 px-2'>
            <h2 className='text-center text-5xl mb-10'>Add Toy</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2  gap-5 px-4 md:px-32'>

                <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered input-secondary w-full " />
                <input type="text" name='subCategory' placeholder="Sub Category" className="input input-bordered input-secondary w-full " />
                <input type="number" name='price' placeholder="Price" className="input input-bordered input-secondary w-full " />
                <input type="number" name='rating' placeholder="Rating" className="input input-bordered input-secondary w-full " />
                <input type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered input-secondary w-full " />
                <input type="text" name='details' placeholder="Details" className="input input-bordered input-secondary w-full " />
                <input type="url" name='img' placeholder="img" className="input input-bordered input-secondary w-full col-span-2 " />
                <div className='text-center col-span-2'>
                    <input type="submit" value='Add Toy' className='btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white' />
                </div>
            </form>
        </div>
    );
};

export default AddToy;