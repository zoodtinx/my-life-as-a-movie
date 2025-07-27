
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
         },
      });

      const demoMovies = getDemoMovies(user.id)
      const movies = await tx.movie.createMany({
         data: demoMovies
      })

      return { user, movies };
   });
}
