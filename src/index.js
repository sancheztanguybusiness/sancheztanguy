import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <App id = 'App' title = 'Sanchez Tanguy - Porfoltio'/>

,document.getElementById('root'));

serviceWorker.unregister();
