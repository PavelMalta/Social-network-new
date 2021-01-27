import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store-redux';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                />
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree)

reportWebVitals();
