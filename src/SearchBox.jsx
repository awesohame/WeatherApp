import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox() {
    let [city, setCity] = useState('');

    let handleCityChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity('');
        getWeather();
    };

    const url = "https://api.openweathermap.org/data/2.5/weather";
    //?q={city name}&appid={API key}
    const key = "e3e800da2dd882ddc6b1db2889f3790c";

    let getWeather = async () => {
        let result = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let data = await result.json();
        //console.log(data);

        let usabledata = {
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind_speed: data.wind.speed,
            wind_deg: data.wind.deg,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            weather: data.weather[0].main,
        }

    }

    return (
        <div className="root">
            <div className="box">
                <h1 className="heading">Search for the weather</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="column">
                        <div className="center">
                            <TextField id="cityname" label="Enter your city name" variant="outlined" required value={city} onChange={handleCityChange} />
                        </div>
                        <div className="center">
                            <Button variant="contained" type="submit" disableElevation>Search</Button>
                        </div>
                    </Stack>
                </form>
            </div>
        </div>
    )
}