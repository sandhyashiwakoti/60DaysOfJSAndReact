import styles from "./WeatherDisplay.module.css";

function WeatherDisplay({ data, isLoading, error }) {
  if (isLoading) {
    return <p className={styles.loadingText}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.errorText}>Error: {error}</p>;
  }

  // Only render the card if we have data
  if (!data) {
    return null;
  }

  // Convert temp from Kelvin to Celsius
  const tempCelsius = (data.main.temp - 273.15).toFixed(1);

  return (
    <div className={styles.weatherCard}>
      <h2 className={styles.cityName}>
        {data.name}, {data.sys.country}
      </h2>
      <p className={styles.description}>{data.weather[0].description}</p>
      <p className={styles.temperature}>{tempCelsius}°C</p>
      <p className={styles.details}>Humidity: {data.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
