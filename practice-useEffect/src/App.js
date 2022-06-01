import React, { useState, useEffect } from 'react';

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        const id = setTimeout(() => {
            setFormIsValid(email.includes('@') && password.length > 5);
        }, 2 * 1000);
        return () => {
            clearTimeout(id);
        };
    }, [email, password]);

    return (
        <>
            <h1>useEffect Practice</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <div style={{ backgroundColor: formIsValid ? 'green' : 'red', width: '50px', height: '50px', }}>G</div>

                <input id="email" type="text" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
            </form>
        </>
    );
}

export default App;