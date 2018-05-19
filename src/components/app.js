import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <p id="head">Weather Predictor</p>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
