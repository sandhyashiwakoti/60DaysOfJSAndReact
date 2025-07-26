import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";

// IMPORTANT: Replace this with your own API key from OpenWeatherMap!
const API_KEY = "628770553edec8791fd2881b449223d4";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    // Don't fetch if the city name is empty
    if (!cityName) return;

    setIsLoading(true);
    setError(null);
    setWeatherData(null); // Clear old data

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      if (response.status === 404) {
        throw new Error(`City not found: ${cityName}`);
      }
      if (!response.ok) {
        throw new Error(`An error occurred. Status: ${response.status}`);
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="app-container">
      <h1>Weather Finder</h1>
      <p className="subtitle">Find out the weather in any city!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherDisplay data={weatherData} isLoading={isLoading} error={error} />
    </div>
  );
}

// Inline styles for the App component itself for simplicity
const styles = {
  appContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    textAlign: "center",
    width: "90%",
    maxWidth: "500px",
  },
  subtitle: {
    color: "#f8f9fa",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flexGrow: 1,
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#2193b0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "12px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

// We create a new component here to apply the inline styles
// to avoid cluttering the main App component logic.
function StyledApp() {
  return (
    <div style={styles.appContainer}>
      <App />
    </div>
  );
}

export default StyledApp;
