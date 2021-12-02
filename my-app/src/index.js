import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import buttonNames, { handleClick, handleMouseEnter } from './state';

ReactDOM.render(<App buttonNames={ buttonNames } handleClick={ handleClick } handleMouseEnter={ handleMouseEnter } />, document.getElementById('root'));
