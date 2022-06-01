import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

// 1 way
ReactDOM.render(<App />, document.getElementById('root'));

// another way
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);