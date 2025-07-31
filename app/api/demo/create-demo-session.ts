import { getDemoInsight } from "@/app/shared/lib/db/mock-data/mock-insight";
import { getDemoMovies } from "@/app/shared/lib/db/mock-data/mock-movies";
import { getDemoUser } from "@/app/shared/lib/db/mock-data/mock-user";
import prisma from "@/app/shared/lib/db/prisma";

export function createDemoSession() {
   return prisma.$transaction(async (tx) => {
      const demoUser = getDemoUser();
      const user = await tx.user.create({
         data: {
            name: demoUser.name,
            email: demoUser.email,
            personalContext: demoUser.personalContext,
         },
      });

      const demoMovies = getDemoMovies(user.id);
      const movies = await tx.movie.createManyAndReturn({
         data: demoMovies,
      });

      const weekMovie = movies.slice(0, 7)

      const demoSummaries = getDemoInsight(user.id);
      const summaries = await tx.weeklySummary.create({
         data: {
            ...demoSummaries,
            movies: {
               connect: weekMovie.map((movie) => {
                  return {
                     id: movie.id,
                  };
               }),
            },
         },
      });

      return { user, movies, summaries };
   });
}
