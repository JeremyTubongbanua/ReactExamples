

import React from 'react';
import classes from './MealItem.module.css';

const MealItem = ({ meal, onIncrease, onDecrease }) => {
    const amount = meal.amount;
    return (
        <div className={classes.meal_item_container}>
            <span>
                <span>
                    <h1 className={classes.meal_item_title}>{meal.name}</h1>
                    <div className={classes.meal_item_price}>{meal.price}</div>
                </span>

                <p className={classes.amount}>{amount}x</p>
            </span>
            <span>
                <p className={classes.meal_item_description}>{meal.description}</p>
                <span>
                    <button onClick={() => { onDecrease(meal.id) }} className={classes.amount_button}>-</button>
                    <button onClick={() => { onIncrease(meal.id) }} className={classes.amount_button}>+</button>
                </span>
            </span>
        </div >
    );
}

export default MealItem;