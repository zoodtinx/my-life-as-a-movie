import { z } from "zod";

export const movieSchema = z.object({
  id: z.string(),
  userId: z.string(),
  genre: z.string(),
  logline: z.string(),
  review: z.string(),
  alternateEnding: z.string(),
  sequelIdea: z.string(),
  summary: z.string(),
  createdAt: z.string(),
});

export type MovieResult = z.infer<typeof movieSchema>;

export type Genre =
  | "COMEDY_DRAMA"
  | "ADVENTURE_FANTASY"
  | "DARK_COMEDY"
  | "HORROR"
  | "COMING_OF_AGE"
  | "ACTION_THRILLER"
  | "MYSTERY_SUSPENSE"
  | "ROMANTIC_DRAMA"
  | "FEEL_GOOD_MUSICAL";

