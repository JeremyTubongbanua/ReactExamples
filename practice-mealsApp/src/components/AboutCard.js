

import React from 'react';
import classes from './AboutCard.module.css'

const AboutCard = (props) => {
    return <div className={classes.about_card_container}>
        <h1>About</h1>
        <p>Meals Store is a happy foodo place that sells all things meals! Don't be afraid to contact us!</p>
    </div>;
}

export default AboutCard;