import { z } from "zod";

export const movieFormSchema = z.object({
   setting: z.string().min(1),
   archetype: z.string().min(1),
   supportingCast: z.array(z.string()).min(1),
   plotDevice: z.string().min(1),
   villain: z.array(z.string()).min(1),
   unexpected: z.boolean(),
   cinematography: z.array(z.string()).min(1),
   dramaticIntensity: z.number().min(0).max(100),
   pacing: z.number().min(0).max(100),
   trailer: z.array(z.string()).min(1),
   soundtrack: z.string().min(1),
   closingLine: z.string().min(1),
   userContext: z.string().min(1),
   userId: z.string().min(1),
 });
export type MovieFormData = z.infer<typeof movieFormSchema>;