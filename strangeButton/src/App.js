import React, { Component } from 'react';
import Button from './Components/Button';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backgrondColorButton: props.colorsArr[Math.floor(Math.random() * props.colorsArr.length)],
    };

    console.log(this.state);
  };

  render() {
    const { backgrondColorButton } = this.state;
    return <Button backgroundColor={ backgrondColorButton } />;
  }
  ;
}