import React from 'react';
import SelectedItems from '../SelectedItems/SelectedItems';
import './MealDetails.css'

const MealDetails = ({meal,setSearchText}) => {
    const {strMealThumb,strMeal,strCategory,strArea,strInstructions}=meal

    
   return  (
      <div>  
        {Object.keys(meal).length?
        <div className='meal-details'>
            <img src={strMealThumb} alt="" />
            <div className='card-info'>
                <h4>{strMeal}</h4>
                <p>Category : {strCategory}</p>
                <p>Area : {strArea}</p>
                <small>Instruction: {strInstructions}</small>
            </div>
        </div>
        :<h3>No Meal Selected</h3>
        }
        <div className='selected-item-container'>
        <SelectedItems meal={meal} setSearchText={setSearchText}/>
        </div>
        </div>
    );
    
};

export default MealDetails;