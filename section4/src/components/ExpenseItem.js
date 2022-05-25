import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';

import '../styles/ExpenseItem.css';

function ExpenseItem({ date, title, amount }) {

    const [t, setTitle] = useState(title); // useState must only be used inside of react functional components. (Not in any nested functions)

    const clickHandler = () => {
        setTitle('lemon');
        console.log(t);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{t}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;