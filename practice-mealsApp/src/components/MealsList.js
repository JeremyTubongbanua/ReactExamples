

import React, { useState, useContext } from 'react';
import MealItem from './MealItem';
import classes from './MealsList.module.css';
import { CartContext } from '../context/CartContext';

const MealsList = (props) => {

    const mealsCtx = useContext(CartContext);

    const meals = mealsCtx.meals;

    const onIncreaseHandler = (id) => {
        mealsCtx.increaseMeal(id);
    }

    const onDecreaseHandler = (id) => {
        mealsCtx.decreaseMeal(id);
    }


    return (
        <div className={classes.meals_list_container}>
            {meals.map((meal) => {
                return <MealItem key={meal.id} meal={meal} onIncrease={onIncreaseHandler} onDecrease={onDecreaseHandler} />;
            })}
        </div>
    );
}

export default MealsList;