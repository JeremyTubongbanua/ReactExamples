import React from 'react';
import CartButton from './CartButton';
import classes from './NavBar.module.css';
const NavBar = (props) => {
    return (
        <nav className={classes[`navbar-container`]}>
            <h1>Meals Store</h1>
            <CartButton />
        </nav >

    );
}

export default NavBar;