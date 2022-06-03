
import React from 'react';
import AboutCard from './components/AboutCard';
import NavBar from './components/NavBar';

import classes from './App.module.css';
import './index.css';
import MealsList from './components/MealsList';

const App = () => {
    return (
        <>
            <NavBar />
            <div className={classes.contents}>
                <AboutCard />
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" />
                <MealsList />
            </div>
        </>
    );
}

export default App;