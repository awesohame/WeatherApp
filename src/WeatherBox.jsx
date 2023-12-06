import './WeatherBox.css';

export default function WeatherBox() {
    let usabledata = {
        temp: 23,
        feels_like: 24,
        humidity: 80,
        pressure: 90,
        wind_speed: 60,
        wind_deg: 61,
        sunrise: 100,
        sunset: 101,
        weather: 55,
    }

    return (
        <div className="WeatherBox">
            <div className="division1">
                <p className="temp">{usabledata.temp}°C</p>
                <p className="feelslike">Feels like {usabledata.feels_like}°C</p>
            </div>
            <div className="division2">

                <div className="card">
                    <p className="cardheading">Basic Info</p>
                    <p className="cardtext">Humidity:{usabledata.humidity}%</p>
                    <p className="cardtext">Weather: {usabledata.weather}</p>
                </div>
                <div className="card">
                    <p className="cardheading">Wind Details</p>
                    <p className="cardtext">Wind Speed:{usabledata.wind_speed}</p>
                    <p className="cardtext">Wind Degree: {usabledata.wind_deg}</p>
                </div>
                <div className="card">
                    <p className="cardheading">Sun timings</p>
                    <p className="cardtext">Sunrise:{usabledata.sunrise}</p>
                    <p className="cardtext">Sunset: {usabledata.sunset}</p>
                </div>
            </div>
        </div>
    )
}