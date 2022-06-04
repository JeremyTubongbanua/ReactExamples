import React, { useReducer } from 'react';

const CartContext = React.createContext({
    meals: [],
    increaseMeal: (id) => { },
    decreaseMeal: (id) => { },
});

const ACTIONS = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
}

const reducer = (state, action) => {
    const id = action.payload.id;
    let newState = [...state];
    const meal = newState.filter(mealObj => mealObj.id == id)[0];
    switch (action.type) {
        case ACTIONS.INCREASE:
            meal.amount = meal.amount + 1;
            break;
        case ACTIONS.DECREASE:
            if (meal.amount == 0) return newState;
            meal.amount = meal.amount - 1;
            break;
        default:
            break;
    }
    return newState;
}

const CartContextProvider = (props) => {
    const [meals, dispatch] = useReducer(reducer,
        [
            {
                id: 1,
                name: 'Sushi',
                price: 23.99,
                description: 'Sushi has fish',
                amount: 0,
            },
            {
                id: 2,
                name: 'Lemonade',
                price: 3.98,
                description: 'Water with lemons',
                amount: 0,
            },
            {
                id: 3,
                name: 'Fish',
                price: 10.11,
                description: 'It\'s like sushi but just the fish',
                amount: 0,
            }
        ]
    );

    const increaseMeal = (id) => {
        dispatch({ type: ACTIONS.INCREASE, payload: { id: id } });
    }

    const decreaseMeal = (id) => {

        dispatch({ type: ACTIONS.DECREASE, payload: { id: id } });
    }

    return (
        <CartContext.Provider value={{ meals, increaseMeal, decreaseMeal }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartContextProvider };