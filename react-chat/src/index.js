import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './components/app';
const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
                <Router>
                    <App/>
                </Router>
        </Provider>
,document.getElementById('root'));