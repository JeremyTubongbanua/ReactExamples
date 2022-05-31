import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    // usf <Enter> title tab ''
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const clear = () => {
        setEnteredUsername('');
        setEnteredAge('');
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).' });
            return;
        }

        if (+enteredAge < 1) {
            setError({ title: 'Invalid age', message: 'Please make age > 0' });
            return;
        }

        // console.log(`${enteredUsername} ${enteredAge}`);
        const newUserObj = {
            username: enteredUsername,
            age: +enteredAge,
        }

        props.onAddUser(newUserObj);

        clear();
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const onErrorConfirmHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error != undefined && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorConfirmHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;