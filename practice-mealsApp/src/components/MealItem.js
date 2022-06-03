

import React, { useState } from 'react';

import classes from './MealItem.module.css';

const MealItem = ({ meal }) => {

    const [amount, setAmount] = useState(0);

    const onPlusHandler = () => {
        setAmount((oldAmount) => oldAmount + 1);

    }

    const onSubtractHandler = () => {
        if (amount <= 0) {
            return;
        }
        setAmount((oldAmount) => oldAmount - 1);
    }

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
                <span style={{}}>
                    <button onClick={onSubtractHandler} className={classes.amount_button}>-</button>
                    <button onClick={onPlusHandler} className={classes.amount_button}>+</button>
                </span>
            </span>
        </div >
    );
}

export default MealItem;