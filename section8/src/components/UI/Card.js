import React, { useState } from 'react'; // imrs
import classes from './Card.module.css';

const Card = ({ className, children }) => { // sfc
    return (
        <div className={`${classes.card} ${className}`}> {children}</div >
    );
}

export default Card;