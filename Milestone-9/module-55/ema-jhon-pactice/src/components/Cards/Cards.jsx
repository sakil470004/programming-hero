import React from 'react';
import './Cards.css'
import Card from '../Card/Card';
const Cards = ({items,handleAddToCart}) => {
    return (
        <div className='cards'>
            {
                items.map(item=><Card handleAddToCart={handleAddToCart} item={item} key={item.id}/>)
            }
        </div>
    );
};

export default Cards;