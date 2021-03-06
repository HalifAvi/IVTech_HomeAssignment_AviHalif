import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {logInRegisterReducer} from './Redux/Reducers/logInRegisterReducer.js';
import {questionsReducer} from './Redux/Reducers/questionsReducer.js';
import {answersReducer} from './Redux/Reducers/answersReducer.js';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({logInRegisterReducer, questionsReducer, answersReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
