
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import { AuthContextProvider } from './context/auth_context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AuthContextProvider><App /></AuthContextProvider>);