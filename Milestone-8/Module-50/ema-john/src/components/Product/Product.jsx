import React from 'react';
import FaCartArrowDown from '../../assets/cart';
import './Product.css'
const Product = (props) => {
    const {handleAddToCart,product}=props
    const { img, name, price, seller, quantity, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-title'>{name}</h6>
                <p>Price ${price}</p>
                <p>Manufacture : {seller}</p>
                <p>Rating : {ratings}

                </p>

            </div>
            <button 
            onClick={()=>handleAddToCart(product)}
            className="add-to-cart">
                Add To Cart 
                <FaCartArrowDown/>
            </button>
        </div>
    );
};

export default Product;