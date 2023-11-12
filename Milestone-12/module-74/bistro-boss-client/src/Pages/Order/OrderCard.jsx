import React from 'react';

const OrderCard = ({item}) => {
    const { image, price, name, recipe } = item
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-slate-700 text-white px-4 py-2 rounded-lg absolute right-4 top-4'>${price}</p>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;