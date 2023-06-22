import { useLoaderData } from 'react-router-dom';
import setTittle from '../shared/titleFixer';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { toyName,
        subCategory,
        price,
        rating,
        availableQuantity,
        details,
        sellerName,
        sellerEmail,
        img,
    } = toy
    // console.log(toy)
    setTittle('Toy Details')
    return (
        <div className='bg-pink-50 px-2 my-16 md:mx-8'>
            <h2 className='text-center text-4xl mb-10'>Toy Details for <span className='text-pink-600'> {toyName} </span></h2>
            <div className="  ">
                <div className="flex items-center justify-start gap-16 border border-pink-400 rounded-xl flex-col lg:flex-row">
                    <img src={img} className="h-[500px] w-full md:w-1/3 object-cover rounded-lg " />
                    <div className='px-4'>
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <h1 className="text-2xl font-bold my-6">Category : {subCategory}</h1>
                        <small className="my-10 text-gray-700">{details}</small>
                        <p className="pb-3">Rating : {rating}</p>
                        <p className="pb-3">Seller Name : {sellerName}</p>
                        <p className="pb-3">Seller Email : {sellerEmail}</p>
                        <p className="pb-3">Available Quantity : {availableQuantity}</p>
                        <p className="pb-4 text-4xl text-error">price :${price}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;