import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const { totalProduct } = useLoaderData();
    const [cart, setCart] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemPerPage, setItemPerPage] = useState(10); //note: default 10


    const totalPages = Math.ceil(totalProduct / itemPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemPerPage]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart)
        fetch('http://localhost:5000/productByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        }).then(res=>res.json())
        .then((data)=>{
        
            const savedCart = [];
            // step 1: get id of the addedProduct
            for (const id in storedCart) {
                // step 2: get product from products state by using id
                const addedProduct = data.find(product => product._id === id)
                if (addedProduct) {
                    // step 3: add quantity
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    // step 4: add the added product to the saved cart
                    savedCart.push(addedProduct);
                }
                // console.log('added Product', addedProduct)
            }
            // step 5: set the cart
            setCart(savedCart);
        })
        
    }, [])

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product._id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const pages = [5, 10, 20];
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setItemPerPage(parseInt(selectedValue));
        setCurrentPage(0)
    };


    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='proceed-link' to="/orders">
                            <button className='btn-proceed'>Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            {/* pagination */}
            <div className="pagination">

                {
                    pageNumbers.map(number => <button
                        className={currentPage === number ? 'selected' : ''}
                        onClick={() => setCurrentPage(number)} key={number}>{number + 1}</button>)
                }
                <select id="mySelect" onChange={handleSelectChange}>
                    {pages.map(page => <option key={page} value={page}>{page}</option>)}

                </select>
            </div>
        </>
    );
};

export default Shop;