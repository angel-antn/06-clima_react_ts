import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.css";
import { Form } from "./components/form/Form";
import { WeatherResult } from "./components/weather-result/WeatherResult";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { fetchWeather, weather, hasWeatherData } = useWeather();
  return (
    <>
      <div className={styles["card"]}>
        <h1 className={styles["title"]}>Buscador de clima</h1>
        <div className={styles.container}>
          <div className={styles["form"]}>
            <Form fetchWeather={fetchWeather} />
          </div>
          <div className={styles["result"]}>
            {hasWeatherData && <WeatherResult weather={weather} />}
          </div>
        </div>
      </div>{" "}
      <ToastContainer />
    </>
  );
}

export default App;
