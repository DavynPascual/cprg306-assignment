
import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    
    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas with {ingredient}</h1>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}
