import axios from "axios";
import { SearchType } from "../interfaces/search_type.interface";
import {
  LatLonResponse,
  LatLonResponseSchema,
} from "../schemas/lat_lon_response.schema";
import {
  WeatherResponse,
  WeatherResponseSchema,
} from "../schemas/weather_response.schema";
import { useMemo, useState } from "react";

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherResponse | undefined>();

  const fetchLatLon = async (
    search: SearchType
  ): Promise<LatLonResponse | undefined> => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${apiKey}`;
      const { data } = await axios.get(geoUrl);
      const result = LatLonResponseSchema.safeParse(data[0]);

      if (result.success) return result.data;
      throw new Error("failed request");
    } catch (err) {
      setWeather(undefined);
      console.log(err);
    }
  };

  const fetchWeather = async (
    search: SearchType
  ): Promise<WeatherResponse | undefined> => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const { lat, lon } = (await fetchLatLon(search)) as LatLonResponse;
      const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const { data } = await axios.get(geoUrl);

      const result = WeatherResponseSchema.safeParse(data);

      if (result.success) {
        setWeather(result.data);
        return result.data;
      }
      throw new Error("failed request");
    } catch (err) {
      console.log(err);
    }
  };

  const hasWeatherData = useMemo(() => !!weather, [weather]);

  return { fetchWeather, weather, hasWeatherData };
};
