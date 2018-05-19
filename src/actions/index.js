import axios from 'axios';

const API_KEY = 'e03d9f8569c5af8e05476d4811b8ee24'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const URl = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(URl);

  return {
    type : FETCH_WEATHER,
    payload: request
  };
}
