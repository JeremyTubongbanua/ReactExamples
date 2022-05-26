
import React, { useState } from 'react';

import '../../styles/ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData }) => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');


    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {
        let value = event.target.value;
        // setEnteredTitle(value);
        setUserInput({
            ...userInput,
            enteredTitle: value,
        });
    }

    const amountChangeHandler = (event) => {
        let value = event.target.value;
        // setEnteredAmount(value);
        setUserInput((prevSnapshotState) => {
            return {
                ...prevSnapshotState,
                enteredAmount: value,
            }
        });
    }


    const dateChangeHandler = (event) => {
        let value = event.target.value;
        // setEnteredDate(value);
        setUserInput({
            ...userInput,
            enteredDate: value,
        });
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: parseFloat(userInput.enteredAmount),
            date: new Date(userInput.enteredDate),
        }
        onSaveExpenseData(expenseData);
        clearUserInput();
    }

    const clearUserInput = () => {
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    }

    return (<form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
}


export default ExpenseForm;