import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { handleAddNewNumber, randomNumbers, subscribe } from './State/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <App randomNumbers={ randomNumbers } addNewNumber={ handleAddNewNumber } />,
    document.getElementById('root')
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);