import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    let store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to TreeBee</h1>, root);
    // ReactDOM.render(<Root store={store} />, root);
});