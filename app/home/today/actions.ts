"use server";

import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import {
   getTimezonedDate,
   getTimezonedDateFromISOString,
} from "@/app/shared/lib/timezone/getTimezonedDate";
import prisma from "@/app/shared/lib/db/prisma";
import { generateMovie, generateInsights } from "@/app/shared/lib/ai/gpt-api";
import { Movie } from "@prisma/client";
import { format } from "date-fns";

export async function getMovieSummary(userInput: MovieFormData) {
   const timezonedDate = getTimezonedDate();

   const movie = await generateMovie(userInput);

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
            date: timezonedDate.toISOString(),
         },
      });
   } else {
      // Create
      await prisma.movie.create({
         data: {
            userId: userInput.userId,
            ...movie.data,
            date: timezonedDate.toISOString(),
         },
      });
   }

   return { success: true, data: movie.data };
}

export async function updateInsights(userId?: string) {
   if (!userId) {
      return;
   }

   const today = getTimezonedDate();
   const dayOfWeek = today.getDay();

   if (dayOfWeek !== 6) return;

   const lastSaturday = new Date(today);
   lastSaturday.setDate(today.getDate() - 7);

   const movies = await prisma.movie.findMany({
      where: {
         userId,
         createdAt: {
            gte: lastSaturday,
         },
      },
      orderBy: {
         createdAt: "asc",
      },
      take: 7,
   });

   if (movies.length < 7) return;

   const insights = await generateInsights(movies);

   const weeklySummary = await prisma.weeklySummary.create({
      data: {
         userId,
         week: getWeekName(movies),
         headline: insights.data.headline,
         personalitySnapshot: insights.data.personalitySnapshot,
         weekSummary: insights.data.weekSummary,
         growthHighlight: insights.data.growthHighlight,
         movies: {
            connect: movies.map((m) => ({ id: m.id })),
         },
      },
   });

   return weeklySummary;
}

function getWeekName(movies: Movie[]) {
   const firstDay = getTimezonedDateFromISOString(movies[0].date);
   const lastDay = getTimezonedDateFromISOString(
      movies[movies.length - 1].date
   );

   const firstDayLabel = format(firstDay, "d MMM");
   const lastDayLabel = format(lastDay, "d MMM");

   return `${firstDayLabel} - ${lastDayLabel}`;
}
