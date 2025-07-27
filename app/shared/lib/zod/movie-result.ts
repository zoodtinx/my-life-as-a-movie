import { z } from "zod";

export const movieSchema = z.object({
  id: z.string(),
  userId: z.string(),
  genre: z.string(),
  logline: z.string(),
  review: z.string(),
  summary: z.string(),
  createdAt: z.string(),
});

export type MovieResult = z.infer<typeof movieSchema>;
