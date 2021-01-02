import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {confirgureStore} from './store/index';

const store = confirgureStore();
console.log('store', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



