import React, { Component } from 'react';
import { DateTime } from 'luxon';

import './App.css';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '33178d46dea4c98a92d98aa6ea4ebc24';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      weather: null,
      isLoading: false,
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  sendRequest = () => {
    const { searchQuery } = this.state;

    fetch(`${API_URL}weather?q=${searchQuery}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          weather: response,
          isLoading: false,
        })
      );
  };

  handleSearchSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState({
      isLoading: true,
    }, this.sendRequest);
  };

  render() {
    const { searchQuery, weather, isLoading } = this.state;

    return (
      <div
        className={
          weather && weather.main.temp < 0 ? 'container cold' : 'container'
        }
      >
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={this.handleSearchChange}
          onKeyDown={this.handleSearchSubmit}
        />

        {isLoading ? <div class="loader"></div> : null}

        {weather ? (
          <div>
            <div className="location-wrapper">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>

              <div className="date">
                {DateTime.fromSeconds(weather.dt).toLocaleString(
                  DateTime.DATE_HUGE
                )}
              </div>
            </div>

            <div className="weather-wrapper">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
