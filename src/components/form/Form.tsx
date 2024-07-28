import { useState } from "react";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import { SearchType } from "../../interfaces/search_type.interface";
import { toast } from "react-toastify";
import { WeatherResponse } from "../../schemas/weather_response.schema";

interface FormProps {
  fetchWeather: (search: SearchType) => Promise<WeatherResponse | undefined>;
}

export const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<SearchType>({ city: "", country: "" });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => setSearch({ ...search, [e.target.name]: e.target.value });

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      toast.error("Hay campos obligatorios sin rellenar");
      return;
    }

    fetchWeather(search);
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Ciudad"
          onChange={handleChange}
          value={search.city}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select
          name="country"
          id="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un pais --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input className={styles.submit} type="submit" value="Consultar clima" />
    </form>
  );
};
