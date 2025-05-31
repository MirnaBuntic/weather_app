export default function WeatherInfo({ weatherData }) {
    if (!weatherData) return null;

    return (
        <>
            <h3>{weatherData.name}</h3>
            <p>{weatherData.weather[0].description}</p>
            <p>{Math.round(weatherData.main.temp)}°C</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
        </>
    )
}