import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [carts, setCarts] = useState([]);

    const handleClearCart=()=>{
        setCarts([]);
        deleteShoppingCart()
    }
    const handleAddToCart = (product) => {
        let newCart = [];
        const exist = carts.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity=1;
            newCart=[...carts,product];
        }else{
            exist.quantity=exist.quantity+1;
            const remaining=carts.filter(pd=>pd.id !==exist.id);
            newCart=[...remaining,exist];
        }
        setCarts(newCart);
        addToDb(product.id);
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart()
        // step 1:get Id
        const savedCart = [];
        for (const id in storedCart) {
            // step 2 :get cart
            const addedProduct = items.find(item => item.id === id);
            // step 3 get quantity of product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCarts(savedCart)
    }, [items])
    return (
        <div className='shop'>
            <Cards handleAddToCart={handleAddToCart} items={items} />
            <Cart handleClearCart={handleClearCart} carts={carts} >
            <Link to='/orders' className='review-order'> Review Order</Link>
            </Cart>
        </div>
    );
};

export default Shop;