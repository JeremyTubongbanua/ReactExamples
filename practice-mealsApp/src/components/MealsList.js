

import React, { useState } from 'react';
import MealItem from './MealItem';
import classes from './MealsList.module.css';

const MealsList = (props) => {

    const DUMMY_MEALS = [
        {
            id: 1,
            name: 'Sushi',
            price: 23.99,
            description: 'Sushi has fish',
        },
        {
            id: 2,
            name: 'Lemonade',
            price: 3.98,
            description: 'Water with lemons',
        },
        {
            id: 3,
            name: 'Fish',
            price: 10.11,
            description: 'It\'s like sushi but just the fish',
        }
    ];

    return (
        <div className={classes.meals_list_container}>
            {DUMMY_MEALS.map((meal) => {
                return <MealItem meal={meal} key={meal.id} />;
            })}
        </div>
    );
}

export default MealsList;