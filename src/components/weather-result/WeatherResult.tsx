import { WeatherResponse } from "../../schemas/weather_response.schema";

interface WeatherResultProps {
  weather: WeatherResponse | undefined;
}

export const WeatherResult = ({ weather }: WeatherResultProps) => {
  return <h2>Clima de: {weather?.name}</h2>;
};
