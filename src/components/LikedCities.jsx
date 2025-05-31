import { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";

export default function LikedCities({ cities, onRemove, onSelect }) {
    const [weatherData, setWeatherData] = useState({});
    const apiKey = "88c8dd4b3c29943b23a148c8ceb55574";

    useEffect(() => {
        const fetchAllCities = async () => {
            const result = {};
            for (const city of cities) {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
                    );

                    const data = await response.json();
                    result[city] = data;
                } catch {
                    result[city] = null;
                }
            }
            setWeatherData(result);
        };

        if (cities.length > 0) fetchAllCities();
    }, [cities]);

    if (cities.length === 0) return <p className="no-liked-cities">No liked cities yet.</p>;

    return (
        <section>
            <h2 className="liked">Liked cities</h2>

            <ul>
                {cities.map((city) => (
                    <li key={city}>
                        <button onClick={() => onSelect(city)}>{city}</button>
                        <WeatherInfo weatherData={weatherData[city]} />
                        <button onClick={() => onRemove(city)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}