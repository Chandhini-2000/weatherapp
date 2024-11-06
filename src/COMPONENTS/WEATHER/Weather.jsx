import React, { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './Weather.css'

const Weather = ({ fetchWeather, weatherData, error }) => {
  const [city, setCity] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity(''); // Clear the input after search
    }
  };

  return (
    <div className='container'>
    <div className="text-center mt-4">
    <h4 
  className='p-4' 
  style={{ 
    textDecoration: 'underline', 
    textTransform: 'uppercase', 
    textAlign: 'center', 
    fontWeight: '600', 
    color: '#333',
    marginBottom: '1rem'
  }}
>
  Enter The City For Weather Details
</h4>

      {/* Search Bar */}
      <MDBInput
        label="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="mb-3"
      />
      <MDBBtn onClick={handleSearch}>Search</MDBBtn>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-3">{error}</p>}

      {/* Weather Details */}
      {weatherData && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold">{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Weather;
