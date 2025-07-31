import { auth } from "@/app/auth";
import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import prisma from "@/app/shared/lib/db/prisma";
import { Movie } from "@prisma/client";
import { format } from "date-fns";
import React from "react";

const InsightsPage = async () => {
   const session = await auth();

   if (!session?.user) return null;

   const weeklySummary = await prisma.weeklySummary.findFirst({
      where: {
         userId: session.user.id,
      },
      include: {
         movies: true,
      },
      orderBy: {
         createdAt: "asc",
      },
   });

   console.log("weeklySummary", weeklySummary);

   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col justify-between items-center w-full h-full px-20 py-[90px] fade-up-fast">
            <div className="flex flex-col items-center grow gap-[60px] w-full">
               <div className="flex flex-col gap-2 font-header font-medium leading-snug">
                  <p className="font-normal text-center text-[20px]">
                     A summary of your week ({weeklySummary?.week})
                  </p>
                  <p className="text-center w-[850px] text-[35px] ">
                     {/* [&nbsp;&nbsp;if this week were a franchise&nbsp;&nbsp;] */}
                     &quot;{weeklySummary?.headline}&quot;
                  </p>
               </div>
               <div>
                  <MovieRows movies={weeklySummary?.movies ?? []} />
               </div>
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[27px] text-center pb-4">
                     You, The Main Character
                  </p>
                  <p className="indent-8">
                     {weeklySummary?.personalitySnapshot}
                  </p>
               </div>
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[27px] text-center pb-4">
                     This Week, Your Story
                  </p>
                  <p className="indent-8">{weeklySummary?.weekSummary}</p>
               </div>
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[27px] text-center pb-4">
                     Changes, As They Happen
                  </p>
                  <p className="indent-8">{weeklySummary?.growthHighlight}</p>
               </div>
            </div>
         </div>
      </ScrollArea>
   );
};

const MovieRows = ({ movies }: { movies: Movie[] }) => {
   const firstDate = format(movies[0]?.date, "dd MMM");
   const lastDate = format(movies[movies.length - 1]?.date, "dd MMM");

   return (
      <React.Fragment>
         <div className="flex items-center gap-3">
            <p>{firstDate}</p>
            <div className="border-b border-b-primary/30 grow" />
            <p>{lastDate}</p>
         </div>
         <div className="flex gap-4 pt-2">
            {movies.map((movie) => (
               <MoviePoster key={movie.id} movieData={movie} />
            ))}
         </div>
      </React.Fragment>
   );
};

export default InsightsPage;
