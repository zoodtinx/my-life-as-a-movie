import prisma from "@/app/shared/lib/db/prisma";
import { Movie } from "@prisma/client";
import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import { auth } from "@/app/auth";
import React from "react";
import { format } from "date-fns";
import LoadMoreButton from "@/app/home/timeline/components/LoadMoreButton";

const TimeLinePage = async ({
   searchParams,
}: {
   searchParams: { [key: string]: string | string[] | undefined };
}) => {
   const session = await auth();
   const takeAmount = Number(searchParams.take) || 49

   if (!session?.user) return null;

   const movies = await prisma.movie.findMany({
      where: {
         userId: session.user.id,
      },
      orderBy: {
         date: "desc",
      },
      take: takeAmount as number,
   });

   return (
      <div className="flex flex-col justify-between items-center w-full pb-0">
         <MovieRows movies={movies} />
      </div>
   );
};

const MovieRows = ({ movies }: { movies: Movie[] }) => {
   const rows = [];
   for (let i = 0; i < movies.length; i += 7) {
      rows.push(movies.slice(i, i + 7));
   }

   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col gap-4 pb-[500px] px-3">
            {rows.map((row, i) => {
               const firstDate = format(row[0]?.date, "dd MMM");
               const lastDate = format(row[row.length - 1]?.date, "dd MMM");

               return (
                  <React.Fragment key={i}>
                     <div className="flex items-center gap-3 pt-7">
                        <p>{firstDate}</p>
                        <div className="border-b border-b-primary/30 grow" />
                        <p>{lastDate}</p>
                     </div>
                     <div className="flex gap-4">
                        {row.map((movie) => (
                           <MoviePoster key={movie.id} movieData={movie} />
                        ))}
                        {row.length < 7 &&
                           Array.from({ length: 7 - row.length }).map(
                              (_, idx) => (
                                 <div
                                    key={"empty-" + idx}
                                    className="w-[your-poster-width] h-[your-poster-height]"
                                 />
                              )
                           )}
                     </div>
                  </React.Fragment>
               );
            })}
            <div className="flex w-full justify-center pt-[50px]">
            <LoadMoreButton moviesLength={movies.length} />
            </div>
         </div>
      </ScrollArea>
   );
};

export default TimeLinePage;
