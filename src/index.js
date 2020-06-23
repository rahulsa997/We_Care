import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Mat from './Mat';
// import Mat2 from './Mat2';


// import Dashboard from './Dashboard';


ReactDOM.render(
  <React.StrictMode>
    {/* <Dashboard /> */}
    <Mat />
    
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
