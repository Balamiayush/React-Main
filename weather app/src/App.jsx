import React, { useState } from "react";
import UseWeatherInfo from "./Api"; // Assuming you renamed the hook file to UseWeatherInfo

const App = () => {
  const [city, setCity] = useState("London"); // Default city is London
  const [submittedCity, setSubmittedCity] = useState("London"); // City to be submitted

  const { data, isLoading, error } = UseWeatherInfo(submittedCity);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city); // Fetch weather data for the entered city
  };

  return (
    <div className="w-full h-screen flex flex-col p-5 gap-5 bg-teal-500">
      <form onSubmit={handleSubmit} className="w-full justify-center  " >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state as user types
          placeholder="Enter city name"
          className="w-[80%] text-xl rounded-full text-black p-3"
        />
        <button type="submit" className="px-3 py-4  bg-red-500">Get Weather</button>
      </form>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading weather information.</div>}

      {data && (
        <div>
          <h1>Weather Information for {data.name}</h1>
          <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>{" "}
          {/* Convert from Kelvin to Celsius */}
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
