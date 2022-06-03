import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = (props) => {
    return (
        <Fragment>
            <Header />
            <Meals />
        </Fragment>
    );
}

export default App;