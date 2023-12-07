//import './App.css'
import SearchBox from './SearchBox'
import WeatherBox from './WeatherBox'
import { useState } from 'react';

function App() {
  let [weatherInfo, setWeatherInfo] = useState({
    temp: "--",
    feels_like: "--",
    humidity: "--",
    pressure: "--",
    wind_speed: "--",
    wind_deg: "--",
    sunrise: "--",
    sunset: "--",
    weather: "--",
    name: "--",
  });

  let updateData = (usabledata) => {
    setWeatherInfo(usabledata);
  }

  return (
    <>
      <SearchBox updateData={updateData} />
      <WeatherBox usabledata={weatherInfo} />
    </>
  )
}

export default App
