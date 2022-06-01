import React, { useReducer } from 'react';

export const ACTIONS = {
    INCREMENT: 'incerment',
    DECREMENT: 'decrement',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const App = (props) => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <React.Fragment>
            <h1>useReducer Practice</h1>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <p style={{ display: 'inline-block' }}>{state.count}</p>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <br />
            <input type="text" placeholder="Press <Enter> to submit" />
        </React.Fragment >
    );
}

export default App;