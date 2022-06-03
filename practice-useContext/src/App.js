import React, { useContext, useEffect } from 'react';
import { AuthContext } from './context/auth_context';
const App = (props) => {

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    useEffect(() => {}, [isLoggedIn]);

    return (
        <>
            <h1>Practice useContext</h1>
            <button
                onClick={() => {
                    if (isLoggedIn) {
                        authCtx.onLogoutHandler();
                    } else {
                        authCtx.onLoginHandler('', '');
                    }
                }}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </>
    );
}

export default App;