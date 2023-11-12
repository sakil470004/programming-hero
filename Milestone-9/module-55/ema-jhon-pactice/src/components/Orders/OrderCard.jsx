import React from 'react';
import './OrderCard.css'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
const OrderCard = ({ product,handleDeleteCart }) => {
    const { id, price, name, quantity, img } = product
    return (
        <div className='order-card'>
            <div className='order-info'>
                <img src={img} />
                <div>
                    <h3 className='order-name'>{name}</h3>
                    <p>Price : <span className='text-gold'>${price}</span></p>
                    <p>Quantity : <span className='text-gold'>{quantity}</span></p>
                </div>
            </div>
            <button 
            onClick={()=>handleDeleteCart(id)}
            style={{color:'red',background:'#ffffff',borderRadius:'8px',border:'1px solid red'}}>
            Delete
            </button>
        </div>
    );
};

export default OrderCard;