import React from 'react';
import './Card.css'
import FaCartArrowDown from '../../assets/cart';
import { addToDb } from '../../utilities/fakedb';
const Card = ({ item ,handleAddToCart}) => {
   
    return (
        <div className='card'>
            <img src={item.img} alt="" />
            <div className='card-info'>
                <h6 className='card-title'>{item.name}</h6>
                <p>Price : ${item.price}</p>
                <p>ManuFacture : {item.seller}</p>
                <p>Rating : {item.ratings}</p>
            </div>
            <button
                onClick={() => handleAddToCart(item)}
                className='add-to-cart'>Add To Cart <FaCartArrowDown /></button>
        </div>
    );
};

export default Card;