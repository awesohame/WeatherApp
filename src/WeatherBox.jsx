import './WeatherBox.css';

export default function WeatherBox({ usabledata }) {

    return (
        <div className="WeatherBox">
            <div className="division1">
                <p className="temp">{usabledata.temp}°C</p>
                <p className="feelslike">{usabledata.name}, Feels like {usabledata.feels_like}°C</p>
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
                    <p className="cardtext">Sunrise:{new Date(usabledata.sunrise).toLocaleTimeString()}</p>
                    <p className="cardtext">Sunset: {new Date(usabledata.sunset).toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    )
}