import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
})

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();