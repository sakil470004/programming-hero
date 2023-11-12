import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateToy = () => {
    const toy = useLoaderData();
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
            sellerName: toy.sellerName,
            sellerEmail: toy.sellerEmail,
        }
        fetch(`https://battle-toys-server.vercel.app/update/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Toy Updated")
                    navigate('/myToys')
                }
            })
    }
    return (
        <div className='bg-pink-50 py-10 md:py-32 px-2'>
            <h2 className='text-center text-5xl mb-10'>Update Toy</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2  gap-5 px-4 md:px-32'>

                <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered input-secondary w-full " defaultValue={toy?.toyName} />
                <input type="text" name='subCategory' placeholder="Sub Category" className="input input-bordered input-secondary w-full " defaultValue={toy?.subCategory} />
                <input type="number" name='price' placeholder="Price" className="input input-bordered input-secondary w-full " defaultValue={toy?.price} />
                <input type="number" name='rating' placeholder="Rating" className="input input-bordered input-secondary w-full " defaultValue={toy?.rating} />
                <input type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered input-secondary w-full" defaultValue={toy?.availableQuantity} />
                <input type="text" name='details' placeholder="Details" className="input input-bordered input-secondary w-full " defaultValue={toy?.details} />
                <input type="url" name='img' placeholder="img" className="input input-bordered input-secondary w-full col-span-2 " defaultValue={toy?.img} />
                <div className='text-center col-span-2'>
                    <input type="submit" value='Update' className='btn bg-pink-100 text-black hover:bg-rose-400 hover:text-white' />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;