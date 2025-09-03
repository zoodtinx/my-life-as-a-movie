import prisma from "@/app/shared/lib/db/prisma";
import { Footer } from "@/app/home/result/components/Footer";
import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { cn } from "@/app/shared/utils";

interface SimilarMovie {
   year: number;
   movie: string;
   director: string;
   whySimilar: string;
}

type PageProps = {
   searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const ResultPage = async ({ searchParams }: PageProps) => {
   const params = await searchParams;
   const id = params?.id;

   if (!id) {
      return "Unexpected Error";
   }

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
      <div
         className={cn(
            "flex flex-col items-center w-full h-full overflow-y-auto justify-start animate-fade-in",
            "lg:justify-between"
         )}
      >
         <div></div>
         <div
            className={cn(
               "flex flex-col justify-start lg:justify-between w-full h-full gap-0",
               "lg:w-[1200px] lg:h-fit px-5"
            )}
         >
            <div className={cn("flex flex-col gap-5", "pt-[30px]", "lg:pt-0")}>
               <div
                  className={cn(
                     "flex w-full",
                     "flex-col gap-[30px]",
                     "lg:flex-row lg:gap-[60px]"
                  )}
               >
                  <div
                     className={cn(
                        "flex flex-col gap-[40px]",
                        "items-center",
                        "lg:items-start"
                     )}
                  >
                     <div className="px-0 md:py-8 lg:py-0">
                        <MoviePoster movieData={movie} size="large" />
                     </div>
                     <div
                        className={cn(
                           "font-header flex-col",
                           "hidden",
                           "lg:flex"
                        )}
                     >
                        <p className="text-lg">Similar Movie</p>
                        <div className="border-b border-b-primary/20" />
                        <div className="flex flex-col gap-2 pt-3">
                           {similarMovies.map((movie: SimilarMovie) => (
                              <div
                                 className="flex flex-col leading-snug"
                                 key={movie.movie}
                              >
                                 <div className="text-base leading-tight">
                                    <span className="font-medium">
                                       {movie.movie}
                                    </span>
                                    <span className="text-sm font-normal">
                                       {" "}
                                       {movie.year}
                                    </span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col grow">
                     <div
                        className={cn(
                           "mb-6 block border-b mx-5 border-b-primary/15",
                           "lg:hidden"
                        )}
                     />
                     <div className={cn("flex gap-6 italic pb-5")}>
                        <div
                           className={cn(
                              "hidden h-full border-r-2 border-r-primary/10",
                              "lg:block"
                           )}
                        />
                        <p
                           className={cn(
                              "font-medium text-base text-center px-5",
                              "md:px-7",
                              "lg:text-base lg:text-left lg:px-0"
                           )}
                        >
                           &quot;{movie.logline}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "lg:hidden"
                        )}
                     />
                     <div className="pb-6">
                        <p
                           className={cn(
                              "font-header font-medium text-lg",
                              "text-center pb-2",
                              "lg:text-left lg:pb-0"
                           )}
                        >
                           Review
                        </p>
                        <p className={cn("text-sm px-5", "md:px-7", "lg:px-0")}>
                           &quot;{movie.review}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "lg:hidden"
                        )}
                     ></div>
                     <div className="pb-6">
                        <p
                           className={cn(
                              "font-header font-medium text-lg",
                              "text-center pb-2",
                              "lg:text-left lg:pb-0"
                           )}
                        >
                           Sequel Idea
                        </p>
                        <p className={cn("text-sm px-5", "md:px-7", "lg:px-0")}>
                           &quot;{movie.sequelIdea}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "lg:hidden"
                        )}
                     />
                     <div
                        className={cn(
                           "font-header font-medium flex flex-col px-5 pb-4",
                           "lg:hidden"
                        )}
                     >
                        <p className="text-[24px] text-center">
                           Similar Movies
                        </p>
                        <div className="flex flex-col items-center gap-3 pt-1">
                           {similarMovies.map((movie: SimilarMovie) => (
                              <div
                                 className="flex flex-col leading-snug"
                                 key={movie.movie}
                              >
                                 <p className="text-center">{movie.movie}</p>
                                 <div className="flex justify-center font-normal text-[17px]">
                                    <p>{movie.director}</p>,
                                    <p className="pl-2">{movie.year}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "lg:hidden"
                        )}
                     />
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
