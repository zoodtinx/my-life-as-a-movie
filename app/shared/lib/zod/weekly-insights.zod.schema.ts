import { z } from "zod";

export const weeklySummarySchema = z.object({
   headline: z.string().min(1),
   personalitySnapshot: z.string().min(1),
   weekSummary: z.string().min(1),
   growthHighlight: z.string().min(1),
   userId: z.string().min(1),
});

export type WeeklySummary = z.infer<typeof weeklySummarySchema>;
