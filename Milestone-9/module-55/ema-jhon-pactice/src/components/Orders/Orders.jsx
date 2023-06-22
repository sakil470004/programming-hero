import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderCard from './OrderCard';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
import { deleteShoppingCart } from '../../utilities/fakedb';
const Orders = () => {
    const storedCart = useLoaderData();
    const [cart, setCart] = useState(storedCart)
    const handleDeleteCart = (id) => {
        const remaining=cart.filter(pd=>pd.id!==id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop'>
            <div className='order-card-container'>
                {
                    cart.map(product => <OrderCard
                        key={product.id}
                        product={product}
                        handleDeleteCart={handleDeleteCart}

                    />)
                }
            </div>
            <Cart handleClearCart={handleClearCart} carts={cart} >
            <Link to='/inventory' className='review-order'> Process Checkout</Link>
            </Cart>
        </div>
    );
};

export default Orders;