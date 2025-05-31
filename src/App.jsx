import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WeatherApp from "./components/WeatherApp";
import LikedCities from "./components/LikedCities";

export default function App() {
  const [likedCities, setLikedCities] = useState(() => {
    const stored = localStorage.getItem("likedCities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedCities", JSON.stringify(likedCities));
  }, [likedCities]);

  const addCity = (city) => {
    if (!likedCities.includes(city)) {
      setLikedCities([...likedCities, city]);
    }
  };

  const removeCity = (city) => {
    setLikedCities(likedCities.filter(c => c !== city));
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherApp onLike={addCity}/>} />
        <Route path="/liked" element={<LikedCities cities={likedCities} onRemove={removeCity} onSelect={(city) => {}} />} />
      </Routes>
    </Layout>
  )
}