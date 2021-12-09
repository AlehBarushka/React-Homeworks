import React, { Component } from 'react';
import Button from './Components/Button';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backgrondColorButton: '',
    };
  };

  componentDidMount = () => {
    this.changeColorsWithInterval();
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  };

  changeColorsWithInterval = () => {
    this.intervalId = setInterval(() => {
      this.setState(() => {
        return {
          backgrondColorButton: this.props.colorsArr[Math.floor(Math.random() * this.props.colorsArr.length)],
        };
      });
    }, 1000);
  };

  render() {
    const { backgrondColorButton } = this.state;
    return <Button backgroundColor={ backgrondColorButton } />;
  };
};