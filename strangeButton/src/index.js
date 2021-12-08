import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import colorsArr from './colors';

ReactDOM.render(
  <App colorsArr={ colorsArr } />,
  document.getElementById('root')
);

