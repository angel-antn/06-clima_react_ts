export const temperatureFormater = (temperatureInKelvin: number) =>
  `${(temperatureInKelvin - 273.15).toFixed(2)} °C`;
