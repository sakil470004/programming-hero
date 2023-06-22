import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import './SelectedItems.css'
const SelectedItems = ({ meal ,setSearchText}) => {
    const [storedCart, setStoredCart] = useState([])
    useEffect(() => {
        const newCart=[]
        const localCart = getShoppingCart();
        for (const card in localCart){
            newCart.push(card)
        }
        setStoredCart(newCart)
    }, [meal])
    const changeSearch=(text)=>{
        setSearchText(text)
    }
    return (
        <div className='selected-items'>
            <h3>Selected Items</h3>
            <div className='container'>
                {storedCart.map(sc=><span 
                onClick={()=>changeSearch(sc)}
                key={sc} >{sc}</span>)}
            </div>
        </div>
    );
};

export default SelectedItems;