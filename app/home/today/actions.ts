"use server";

import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import { mockDemoMovies } from "@/app/shared/lib/db/mock-data/mock-movies";
import { getTimezonedDate } from "@/app/shared/lib/timezone/getTimezonedDate";
import prisma from "@/app/shared/lib/db/prisma";
import { generateMovie } from "@/app/shared/lib/ai/gpt-api";
import { date } from "zod";

export async function getMovieSummary(userInput: MovieFormData) {
   const timezonedDate = getTimezonedDate();

   const movie = await generateMovie(userInput)

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
            ...movie.data,
            date: timezonedDate.toISOString()
         },
      });
   } else {
      // Create
      await prisma.movie.create({
         data: {
            userId: userInput.userId,
            ...movie.data,
            date: timezonedDate.toISOString()
         },
      });
   }

   return { success:true, data: movie.data};
}