import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(
  reducers, // These are all reducers
  {}  // Main state
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));