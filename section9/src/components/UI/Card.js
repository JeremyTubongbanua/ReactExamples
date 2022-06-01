import React from 'react'; // imrs
import classes from './Card.module.css';

const Card = ({ className, children }) => { // sfc
    return (
        <l className={`${classes.card} ${className}`}> {children}</l >
    );
}

export default Card;