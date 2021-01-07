// PACKAGE IMPORT 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// FILE IMPORT
import './index.css';
import App from './components/App';
import {configureStore} from './store/index';

const store = configureStore();
console.log('store', store.getState());

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



