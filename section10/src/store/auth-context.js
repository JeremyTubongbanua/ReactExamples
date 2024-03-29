import React, { useState } from 'react';
import React from 'react';

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => { },
    }
);

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider>{props.chldren}</AuthContext.Provider>
}

export default AuthContext;