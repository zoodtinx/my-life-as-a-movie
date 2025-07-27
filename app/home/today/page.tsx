import React from "react";
import { StartButton } from "@/app/home/today/components/StartButton";
import prisma from "@/app/shared/lib/db/prisma";
import { auth } from "@/app/auth";
import TodayMovie from "@/app/home/today/components/TodayMovie";

const TodayPage = async () => {
   const session = await auth();

   const start = new Date();
   start.setHours(0, 0, 0, 0);

   const end = new Date();
   end.setHours(23, 59, 59, 999);

   const todayMovie = await prisma.movie.findFirst({
      where: {
         userId: session?.user?.id,
         // logline: "love",
         date: {
            gte: start.toISOString(),
            lte: end.toISOString(),
         },
      },
   });

   if (!todayMovie) {
      return (
         <div className="flex flex-col justify-between items-center w-full h-full pb-9">
            <div></div>
            <div className="flex flex-col items-center gap-3">
               <div className="text-[50px] leading-tight flex flex-col items-center">
                  <p>If your day were a movie,</p>
                  <p>what genre would it be ?</p>
               </div>
               <StartButton />
            </div>
            <p className="text-center w-2/3 text-white font-header font-medium">
               [ my life as a movie ] turns your daily moods into a cinematic
               journey. Rate your day, jot down your thoughts, and watch your
               story unfold. No filters, no fluff — just your life, honestly
               told.
            </p>
         </div>
      );
   } else {
      return <TodayMovie movie={todayMovie} />;
   }
};

export default TodayPage;
