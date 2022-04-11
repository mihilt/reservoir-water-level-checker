import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BASE_URL, PROXY_URL } from './config';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = PROXY_URL + BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
