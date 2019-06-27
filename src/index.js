import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import reduxThunk from 'redux-thunk'

const store = createStore(
  reducers, // These are all reducers
  {},  // Main state
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));