import './App.css';
import Footer from './COMPONENTS/FOOTER/Footer';
import Header from './COMPONENTS/HEADER/Header';
import Weather from './COMPONENTS/WEATHER/Weather';
import { useState } from 'react';

const App = () => {
  const [weatherData, setWeatherData] = useState(null); // State for weather data
  const [error, setError] = useState(null); // State for error messages

  const fetchWeather = async (city) => {
    const API_KEY = '4448b7297464bb71087906acae6a1de5'; // Replace with your actual API key
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data); // Update weatherData with the API response
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message); // Handle the error
      setWeatherData(null); // Clear weather data in case of error
    }
  };

  return (
    <>
      <Header />
      <div className="content">
        <Weather fetchWeather={fetchWeather} weatherData={weatherData} error={error} />
      </div>
      <Footer />
    </>
  );
};

export default App;
