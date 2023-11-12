import React from 'react';
import { useLoaderData } from 'react-router-dom';

const InitialToyDetails = () => {
    const toy = useLoaderData();
 
    const {image,_id,name,price,rating,category}=toy
    // console.log(toy)
    const details="Battle Toy is an online platform dedicated to providing a comprehensive and exciting experience centered around a single dynamic toy. Our focus is to showcase and provide detailed information about a specific toy designed for thrilling battles and epic showdowns.  At Battle Toy, we believe in the power of imagination and play, and our featured toy is carefully crafted to ignite the imagination and engage children and even adults in exhilarating battles. With its innovative design, advanced features, and interactive gameplay, this extraordinary toy brings the excitement of combat to life."

    return (
        <div className='bg-pink-50 px-2 my-16 md:mx-8'>
            <h2 className='text-center text-4xl mb-10'>Toy Details for <span className='text-pink-600'> {name} </span></h2>
            <div className="  ">
                <div className="flex items-center justify-center gap-16 border border-pink-400 rounded-xl flex-col lg:flex-row">
                    <img src={image} className="md:w-1/3 h-[500px] w-full object-cover rounded-lg " />
                    <div className='px-4'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <h1 className="text-2xl font-bold my-6">Category : {category}</h1>
                        <small className="my-10 text-gray-700">{details}</small>
                        <p className="pb-3">Rating : {rating}</p>
                      
                        <p className="pb-4 text-4xl text-error">price :${price}</p>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InitialToyDetails;