import prisma from "@/app/shared/lib/db/prisma";
import { Movie } from "@prisma/client";
import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";

const TimeLinePage = async () => {
   
   const movies = await prisma.movie.findMany({
      orderBy: {
         date: 'desc'
      }
   });
   console.log("movie", movies.length);

   return (
      <div className="flex flex-col justify-between items-center w-full pb-0">
         <MovieRows movies={movies} />
      </div>
   );
};

const MovieRows = ({ movies }: { movies: Movie[] }) => {
   // chunk movies by 7 per row
   const rows = [];
   for (let i = 0; i < movies.length; i += 7) {
      rows.push(movies.slice(i, i + 7));
   }

   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col gap-6 py-9">

         {rows.map((row, i) => (
            <div key={i} className="flex gap-4">
               {row.map((movie) => (
                  <MoviePoster
                     key={movie.id}
                     movieData={movie}
                  />
               ))}
               {/* Fill empty slots if less than 7 */}
               {row.length < 7 &&
                  Array.from({ length: 7 - row.length }).map((_, idx) => (
                     <div
                        key={"empty-" + idx}
                        className="w-[your-poster-width] h-[your-poster-height]"
                     />
                  ))}
            </div>
         ))}
         </div>
      </ScrollArea>
   );
};

export default TimeLinePage;
