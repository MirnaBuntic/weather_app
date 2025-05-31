import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp({ onLike }) {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [error, setError] = useState("");

    const apiKey = "88c8dd4b3c29943b23a148c8ceb55574";

    const fetchWeather = async () => {
        if (!city) return;

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
            );

            if (!response.ok) throw new Error("City not found");

            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (error) {
            setWeather(null);
            setError("Something went wrong");
        }
    };

    return (
        <section>
            <h2>Check the weather in your city!</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    fetchWeather();
                }}
            >
                <label htmlFor="city-input">City</label>
                <input
                    id="city-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="ex. Oslo"
                />
                <button type="submit">Search</button>
            </form>

            {error && (
                <p>{error}</p>
            )}

            {weather && (
                <article>
                    <WeatherInfo weatherData={weather} />
                    <button onClick={() => onLike(weather.name)}>Like this city</button>
                </article>
            )}
        </section>
    );
}