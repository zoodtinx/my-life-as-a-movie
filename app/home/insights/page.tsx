import { auth } from "@/app/auth";
import { InsightPlaceholder } from "@/app/home/insights/components/InsightPlacehodler";
import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import prisma from "@/app/shared/lib/db/prisma";
import { cn } from "@/app/shared/utils";
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

   if (!weeklySummary) {
      return <InsightPlaceholder />
   }

   return (
      <ScrollArea
         className={cn(
            "h-[calc(100vh-45px)]",
            "md:h-[calc(100vh-65px)]",
            "xl:h-[calc(100vh-80px)]"
         )}
      >
         <div
            className={cn(
               "flex flex-col justify-between items-center w-screen h-full fade-up-fast px-5 py-0 pt-6 pb-[100px]",
               "md:px-7 md:pt-10",
               "xl:w-full xl:px-20 xl:py-[90px] xl:pt-12"
            )}
         >
            <div
               className={cn(
                  "flex flex-col items-center grow gap-[37px] w-full",
                  "xl:gap-[60px]"
               )}
            >
               <div
                  className={cn(
                     "flex flex-col font-header font-medium leading-snug",
                     "gap-0",
                     "xl:gap-2"
                  )}
               >
                  <p
                     className={cn(
                        "font-normal text-center text-[15px]",
                        "md:text-[20px]",
                        "xl:text-[25px]"
                     )}
                  >
                     A summary of your week ({weeklySummary?.week})
                  </p>
                  <p
                     className={cn(
                        "text-center w-auto text-[23px] px-0",
                        "md:px-[55px]",
                        "xl:text-[35px] xl:w-[850px]"
                     )}
                  >
                     &quot;{weeklySummary?.headline}&quot;
                  </p>
               </div>

               <div>
                  <MovieRows movies={weeklySummary?.movies ?? []} />
               </div>

               <div className={cn("w-auto", "xl:w-[1000px]")}>
                  <p
                     className={cn(
                        "font-header font-medium text-[25px] text-center pb-2",
                        "xl:text-center"
                     )}
                  >
                     You, The Main Character
                  </p>
                  <p className={cn("text-sm indent-8", "xl:text-base xl:px-0")}>
                     {weeklySummary?.personalitySnapshot}
                  </p>
               </div>

               <div className={cn("w-auto", "xl:w-[1000px]")}>
                  <p
                     className={cn(
                        "font-header font-medium text-[25px] text-center pb-2",
                        "xl:text-center"
                     )}
                  >
                     This Week, Your Story
                  </p>
                  <p className={cn("text-sm indent-8", "xl:text-base xl:px-0")}>
                     {weeklySummary?.weekSummary}
                  </p>
               </div>

               <div className={cn("w-auto", "xl:w-[1000px]")}>
                  <p
                     className={cn(
                        "font-header font-medium text-[25px] text-center pb-2",
                        "xl:text-center"
                     )}
                  >
                     Changes, As They Happen
                  </p>
                  <p className={cn("text-sm indent-8", "xl:text-base xl:px-0")}>
                     {weeklySummary?.growthHighlight}
                  </p>
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
         <div className="flex flex-wrap gap-2 2xl:gap-4 pt-2">
            {movies.map((movie) => (
               <MoviePoster key={movie.id} movieData={movie} />
            ))}
         </div>
      </React.Fragment>
   );
};

export default InsightsPage;
