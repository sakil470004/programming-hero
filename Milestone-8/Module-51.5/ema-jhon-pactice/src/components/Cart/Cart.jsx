import React from 'react';
import './Cart.css'
const Cart = ({ carts }) => {
    let items = 0;
    let total = 0;
    let totalShipping = 0;
    carts.map(cart => {
        total = total + cart.price * cart.quantity;
        items = items + (1 * cart.quantity);
        totalShipping = totalShipping + cart.shipping;
    })
    const tax = total * 15 / 100;
    const grandTotal = totalShipping + tax + total;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Items : {items}</p>
            <p>Total Price : ${total.toFixed(2)}</p>
            <p>Shipping charge : ${totalShipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            <button className='clear-cart'>Clear Cart</button>
            <button className='review-order'> Review Order</button>
        </div>
    );
};

export default Cart;