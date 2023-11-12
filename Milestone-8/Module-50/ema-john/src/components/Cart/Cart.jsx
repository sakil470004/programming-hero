import React from 'react';
import './Cart.css'
import { AiOutlineDelete, AiOutlineArrowRight } from './Icons';
const Cart = (props) => {
    const { cart } = props
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
        // console.log(quantity,product.quantity,product)
    }
    const tax = (totalPrice * 7) / 100
    const grandTotal = tax + totalPrice + totalShipping;

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected items : {quantity}</p>
            <p>Total Price : ${totalPrice.toFixed(2)}</p>
            <p>Shipping charge : ${totalShipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
            <br />
            <button className='cart-button'>Clear Cart <AiOutlineDelete /></button>
            <br />
            <button
                style={{ backgroundColor: '#FF9900' }}
                className='cart-button'>Review Order <AiOutlineArrowRight /></button>
        </div>
    );
};

export default Cart;