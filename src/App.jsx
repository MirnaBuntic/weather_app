import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import WeatherApp from "./components/WeatherApp";
import LikedCities from "./components/LikedCities";
import './styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App() {
  const [likedCities, setLikedCities] = useState(() => {
    const stored = localStorage.getItem("likedCities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedCities", JSON.stringify(likedCities));
  }, [likedCities]);

  const toggleCity = (city) => {
    if (likedCities.some(c => c.toLowerCase() === city.toLowerCase())) {
      setLikedCities(likedCities.filter(c => c.toLowerCase() !== city.toLowerCase()));
    } else {
      setLikedCities([...likedCities, city]);
    }
  };

  const removeCity = (city) => {
    setLikedCities(likedCities.filter(c => c !== city));
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherApp onLike={toggleCity} likedCities={likedCities}/>} />
        <Route path="/liked" element={<LikedCities cities={likedCities} onRemove={removeCity} onSelect={(city) => {}} />} />
      </Routes>
    </Layout>
  )
}