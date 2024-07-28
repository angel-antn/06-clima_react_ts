import { z } from "zod";

export const LatLonResponseSchema = z.object({
  name: z.string().optional(),
  lat: z.number().optional(),
  lon: z.number().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
});
export type LatLonResponse = z.infer<typeof LatLonResponseSchema>;
