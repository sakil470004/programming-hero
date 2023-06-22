import React, { useEffect, useState } from 'react';
import './Shop.css'
import MealDetails from '../MealDetails/MealDetails';
import Card from '../Card/Card';
import { addToDb } from '../../utilities/fakedb';
const Shop = ({ searchText ,setSearchText}) => {
    const [meals, setMeals] = useState([]);
    const [currentMeal, setCurrentMeal] = useState({})
    const handleShowDetails = (meal) => {
        const currentMealName = meal.strMeal;
        addToDb(currentMealName)
        setCurrentMeal(meal)
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    // tracking useEffect
    // useEffect(() => {
    //     console.log(meals)
    // }, [meals])
    return (
        <div className='shop'>
            <div className='card-container'>
                {
                    meals && meals.map(meal => <Card key={meal.idMeal} meal={meal} handleShowDetails={handleShowDetails} />)
                }
                {
                    !meals &&
                    <h2>No Meal Found
                        Try Other search
                    </h2>
                }
            </div>

            <MealDetails meal={currentMeal} setSearchText={setSearchText} />
        </div>
    );
};

export default Shop;