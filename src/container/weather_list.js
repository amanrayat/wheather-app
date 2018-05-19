import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts'
class WeatherList extends Component {
  renderWeather(cityData){
    const temps =cityData.list.map(weather => weather.main.temp);
    const pressure =cityData.list.map(weather => weather.main.pressure);
    const humidity =cityData.list.map(weather => weather.main.humidity);

    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td> <Chart data={temps} color="orange" units="K"/></td>
        <td> <Chart data={pressure} color="green" units="hPa"/></td>
        <td> <Chart data={humidity} color="black" units="%" /> </td>
      </tr>
    )
  }
  render(){
    return(
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return{ weather: state.weather};
}

export default connect (mapStateToProps)(WeatherList);
