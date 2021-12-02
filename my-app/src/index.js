import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import buttonNames, { handleClick } from './state';

ReactDOM.render(<App buttonNames={ buttonNames } handleClick={ handleClick } />, document.getElementById('root'));
