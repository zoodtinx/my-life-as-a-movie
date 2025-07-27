import { z } from "zod";

export const movieFormSchema = z.object({
   mainQuest: z.string().min(1),
   setting: z.string().min(1),
   archetype: z.string().min(1),
   villain: z.string().min(1),
   unexpected: z.boolean(),
   dramaLevel: z.number().min(0).max(100),
   lightingTone: z.string().min(1),
   pacing: z.number().min(0).max(100),
   secondTake: z.boolean(),
   finalLine: z.string().min(1),
   endCreditsGenre: z.string().min(1),
});

export type MovieFormData = z.infer<typeof movieFormSchema>;


