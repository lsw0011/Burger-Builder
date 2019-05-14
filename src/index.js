import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'


import ingredientReducer from './store/reducers/ingredientReducer';
import UIReducer from './store/reducers/uiReducer';
import contactDataReducer from './store/reducers/contactDataReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    ingredients: ingredientReducer,
    UI: UIReducer,
    orderForm: contactDataReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[middleware] dispatching');
            const result = next(action);
            console.log('[middleware] next state', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
