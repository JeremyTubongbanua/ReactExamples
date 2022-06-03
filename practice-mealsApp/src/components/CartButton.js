

import React from 'react';

import classes from './CartButton.module.css';

const CartButton = () => {
    return (
        <button className={classes['cart-button']}>
            <img
                src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
                alt="Cart Icon"
            />
            <p>
                Your Cart
            </p>
        </button>
    );
}

export default CartButton;