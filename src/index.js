import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { user_reducer } from './store/reducers/user_reducer';
import App from './App';


const rootReducer = combineReducers({ user_reducer });

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
  )
);

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);