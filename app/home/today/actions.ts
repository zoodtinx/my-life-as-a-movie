"use server";

import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { mockDemoMovies } from "@/app/shared/lib/db/mock-data/mock-movies";
import { getTimezonedDate } from "@/app/shared/lib/timezone/getTimezonedDate";
import prisma from "@/app/shared/lib/db/prisma";

export async function getMovieSummary(userInput: MovieFormData) {
   const timezonedDate = getTimezonedDate(); // e.g. 2025-07-28T12:00:00.000Z

   // Calculate start and end of day for range (adjust per your timezone logic)
   const startDate = new Date(timezonedDate);
   startDate.setHours(0, 0, 0, 0);

   const endDate = new Date(timezonedDate);
   endDate.setHours(23, 59, 59, 999);

   // Find existing movie in range
   const existingMovie = await prisma.movie.findFirst({
      where: {
         userId: userInput.userId,
         date: {
            gte: startDate.toISOString(),
            lte: endDate.toISOString(),
         },
      },
   });

   if (existingMovie) {
      // Update
      await prisma.movie.update({
         where: { id: existingMovie.id },
         data: {
            ...mockDemoMovies,
         },
      });
   } else {
      // Create
      await prisma.movie.create({
         data: {
            userId: userInput.userId,
            ...mockDemoMovies,
         },
      });
   }

   return { status: "ok" };
}
