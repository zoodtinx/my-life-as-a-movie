import prisma from "@/app/shared/lib/db/prisma";
import { Footer } from "@/app/home/result/components/Footer";
import { MoviePoster } from "@/app/shared/components/MoviePoster";

interface SimilarMovie {
   year: number;
   movie: string;
   director: string;
   whySimilar: string;
}

const ResultPage = async ({
   searchParams,
}: {
   searchParams: { [key: string]: string | string[] | undefined };
}) => {
   const id = searchParams.id;

   if (!id) {
      return "Unexpected Error";
   }

   console.log("Movie id from param:", id);

   const movie = await prisma.movie.findUnique({
      where: {
         id: id as string,
      },
   });

   if (!movie) {
      return "Unexpected Error";
   }

   const similarMovies = Array.isArray(movie.similarMovie)
      ? movie.similarMovie
      : typeof movie.similarMovie === "string"
      ? JSON.parse(movie.similarMovie)
      : [];

   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
      <div></div>
      <div className="flex flex-col justify-between w-[1200px] min-h-[640px] gap-16">
         <div className="flex flex-col gap-5">
            <div className="flex w-full gap-[60px]">
               <div className="flex flex-col gap-[40px]">
                  <MoviePoster movieData={movie} size="large" />
                  <div className="flex flex-col font-header font-medium">
                     <p className="text-[24px]">Similar Movie</p>
                     <div className="border-b border-b-primary/20" />
                     <div className="flex flex-col gap-3 pt-4">
                        {similarMovies.map((movie: SimilarMovie) => (
                           <div
                              className="flex flex-col leading-snug"
                              key={movie.movie}
                           >
                              <p>{movie.movie}</p>
                              <div className="flex font-normal text-[17px]">
                                 <p>{movie.director}</p>,
                                 <p className="pl-2">{movie.year}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="flex flex-col grow">
                  <div className="flex font-medium text-[24px] pb-14 gap-6 italic">
                     <div className="h-full border-r-2 border-r-primary/10" />
                     <p className="">&quot;{movie.logline}&quot;</p>
                  </div>
                  <div className="pb-6">
                     <p className="font-header font-medium text-[25px]">
                        Review
                     </p>
                     <p>&quot;{movie.review}&quot;</p>
                  </div>
                  <div className="pb-6">
                     <p className="font-header font-medium text-[25px]">
                        Sequel Idea
                     </p>
                     <p>&quot;{movie.sequelIdea}&quot;</p>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
      <div></div>
   </div>
   );
};

export default ResultPage;
