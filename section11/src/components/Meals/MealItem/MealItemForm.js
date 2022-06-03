import React, { useState } from 'react';
import classes from './MealItemForm.module.css';


const MealForm = () => {
    return <form className={classes.form}>
        <input type="text" />
        <button>+ Add</button>
    </form>;
}

export default MealForm;