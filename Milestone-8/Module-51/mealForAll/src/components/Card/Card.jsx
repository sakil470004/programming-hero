import React from 'react';
import './Card.css'
const Card = ({meal,handleShowDetails}) => {
const {strMealThumb,strMeal,strCategory,strArea}=meal
    return (
        <div className='card'>
        <img src={strMealThumb} alt="" />
           <div className='card-info'>
           <h4>{strMeal}</h4>
            <p>Category : {strCategory}</p>
            <p>Area : {strArea}</p>
           </div>
           <button 
           onClick={()=>handleShowDetails(meal)}
           className='btn-show-more'>Show More</button>
        </div>
    );
};

export default Card;