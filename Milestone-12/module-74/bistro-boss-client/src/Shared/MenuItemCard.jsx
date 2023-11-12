import React from 'react';

const MenuItemCard = ({ item }) => {
    // console.log(item)
    const { image, price, name, recipe } = item
    return (
        <div className='flex py-2 gap-3'>
            <img style={{width:'120px',borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p className='uppercase'>{name}--------</p>
                <small className='text-gray-800 text-sm'>{recipe}</small>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItemCard;