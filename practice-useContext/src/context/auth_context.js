import React, { useState } from 'react';

let context = {
    isLoggedIn: false,
    onLogoutHandler: () => { },
    onLoginHandler: (email, password) => { },
};

// Instance context
const AuthContext = React.createContext(context);

// Component context
const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(context.isLoggedIn);
    const onLogoutHandler = () => {
        setIsLoggedIn(false);
    }
    const onLoginHandler = (email, password) => {
        setIsLoggedIn(true);
    }

    context = { isLoggedIn, onLogoutHandler, onLoginHandler };

    return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider };


