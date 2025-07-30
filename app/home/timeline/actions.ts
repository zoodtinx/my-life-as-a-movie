"use server";

import prisma from "@/app/shared/lib/db/prisma";

interface config {
   userId: string;
   take: number;
}

export async function getAllMovie(config: config) {
   const { take, userId } = config;

   try {
      const movies = await prisma.movie.findMany({
         where: {
            userId: userId,
         },
         orderBy: {
            date: "desc",
         },
         take: take,
      });
      return {success: true, data: movies}
   } catch (error) {
      console.error(error)
      return {success: false}
   }

   
}
