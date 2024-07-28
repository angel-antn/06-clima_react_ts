import * as z from "zod";

export const CloudsSchema = z.object({
  all: z.number().optional(),
});
export type Clouds = z.infer<typeof CloudsSchema>;

export const CoordSchema = z.object({
  lon: z.number().optional(),
  lat: z.number().optional(),
});
export type Coord = z.infer<typeof CoordSchema>;

export const MainSchema = z.object({
  temp: z.number().optional(),
  feels_like: z.number().optional(),
  temp_min: z.number().optional(),
  temp_max: z.number().optional(),
  pressure: z.number().optional(),
  humidity: z.number().optional(),
  sea_level: z.number().optional(),
  grnd_level: z.number().optional(),
});
export type Main = z.infer<typeof MainSchema>;

export const RainSchema = z.object({
  "1h": z.number().optional(),
});
export type Rain = z.infer<typeof RainSchema>;

export const SysSchema = z.object({
  country: z.string().optional(),
  sunrise: z.number().optional(),
  sunset: z.number().optional(),
});
export type Sys = z.infer<typeof SysSchema>;

export const WeatherSchema = z.object({
  id: z.number().optional(),
  main: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
});
export type Weather = z.infer<typeof WeatherSchema>;

export const WindSchema = z.object({
  speed: z.number().optional(),
  deg: z.number().optional(),
  gust: z.number().optional(),
});
export type Wind = z.infer<typeof WindSchema>;

export const WeatherResponseSchema = z.object({
  coord: CoordSchema.optional(),
  weather: z.array(WeatherSchema).optional(),
  base: z.string().optional(),
  main: MainSchema.optional(),
  visibility: z.number().optional(),
  wind: WindSchema.optional(),
  rain: RainSchema.optional(),
  clouds: CloudsSchema.optional(),
  dt: z.number().optional(),
  sys: SysSchema.optional(),
  timezone: z.number().optional(),
  id: z.number().optional(),
  name: z.string().optional(),
  cod: z.number().optional(),
});
export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;
