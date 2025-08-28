"use client";

import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { Movie } from "@prisma/client";
import { PageButton } from "@/app/shared/components/CustomButton";
import { ArrowsCounterClockwise, TrashSimple } from "phosphor-react";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteMovie } from "@/app/home/result/actions";
import { useEffect } from "react";
import { cn } from "@/app/shared/utils";

interface SimilarMovie {
   year: number;
   movie: string;
   director: string;
   whySimilar: string;
}

const TodayMovie = ({ movie }: { movie: Movie }) => {
   const router = useRouter();
   const searchParams = useSearchParams();

   // background color change effect
   useEffect(() => {
      if (movie) {
         const currentBg = searchParams.get("bg");
         if (currentBg !== movie.genre) {
            const newSearchParams = new URLSearchParams(
               searchParams.toString()
            );
            newSearchParams.set("bg", movie.genre);

            router.replace(
               `${window.location.pathname}?${newSearchParams.toString()}`
            );
         }
      }
   }, [movie, router, searchParams]);

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
            "flex flex-col items-center w-full h-full pb-9 overflow-y-auto justify-start animate-fade-in",
            "xl:justify-between"
         )}
      >
         <div></div>
         <div
            className={cn(
               "flex flex-col justify-start xl:justify-between w-full h-full gap-0",
               "xl:w-[1200px] xl:min-h-[640px] xl:h-fit xl:gap-16"
            )}
         >
            <div className={cn("flex flex-col gap-5", "pt-[30px]", "xl:pt-0")}>
               <div
                  className={cn(
                     "flex w-full",
                     "flex-col gap-[30px]",
                     "xl:flex-row xl:gap-[60px]"
                  )}
               >
                  <div
                     className={cn(
                        "flex flex-col gap-[40px]",
                        "items-center",
                        "xl:items-start"
                     )}
                  >
                     <div className="px-0 md:py-8 xl:py-0">
                        <MoviePoster movieData={movie} size="large" />
                     </div>
                     <div
                        className={cn(
                           "font-header font-medium flex-col",
                           "hidden",
                           "xl:flex"
                        )}
                     >
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
                     <div
                        className={cn(
                           "mb-6 block border-b mx-5 border-b-primary/15",
                           "xl:hidden"
                        )}
                     />
                     <div className={cn("flex gap-6 italic pb-5", "xl:pb-14")}>
                        <div
                           className={cn(
                              "hidden h-full border-r-2 border-r-primary/10",
                              "xl:block"
                           )}
                        />
                        <p
                           className={cn(
                              "font-medium text-[15px] text-center px-5",
                              "md:text-base md:px-7",
                              "xl:text-[24px] xl:text-left xl:px-0"
                           )}
                        >
                           &quot;{movie.logline}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "xl:hidden"
                        )}
                     />
                     <div className="pb-6">
                        <p
                           className={cn(
                              "font-header font-medium text-[25px]",
                              "text-center pb-2",
                              "xl:text-left xl:pb-0"
                           )}
                        >
                           Review
                        </p>
                        <p
                           className={cn(
                              "text-sm px-5",
                              "md:text-base md:px-7",
                              "xl:px-0"
                           )}
                        >
                           &quot;{movie.review}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "xl:hidden"
                        )}
                     ></div>
                     <div className="pb-6">
                        <p
                           className={cn(
                              "font-header font-medium text-[25px]",
                              "text-center pb-2",
                              "xl:text-left xl:pb-0"
                           )}
                        >
                           Sequel Idea
                        </p>
                        <p
                           className={cn(
                              "text-sm px-5",
                              "md:text-base md:px-7",
                              "xl:px-0"
                           )}
                        >
                           &quot;{movie.sequelIdea}&quot;
                        </p>
                     </div>
                     <div
                        className={cn(
                           "mb-4 block border-b mx-5 border-b-primary/15",
                           "xl:hidden"
                        )}
                     />
                     <div
                        className={cn(
                           "font-header font-medium flex flex-col px-5 pb-4",
                           "xl:hidden"
                        )}
                     >
                        <p className="text-[24px] text-center">Similar Movie</p>
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
                           "xl:hidden"
                        )}
                     />
                  </div>
               </div>
            </div>
            <Footer movieId={movie.id} />
         </div>
         <div></div>
      </div>
   );
};

export const Footer = ({ movieId }: { movieId: string }) => {
   const router = useRouter();

   const handleDeleteMovie = () => {
      deleteMovie(movieId);
      router.push("/home");
   };

   return (
      <div
         className={cn(
            "flex justify-between",
            "px-5 pb-5",
            "2xl:px-0 2xl:pb-0"
         )}
      >
         <div className="flex gap-8">
            <PageButton
               icon={<TrashSimple />}
               onClick={handleDeleteMovie}
               iconPosition="left"
               text="Delete"
            />
         </div>
         <div className="flex gap-8">
            <PageButton
               icon={<ArrowsCounterClockwise />}
               onClick={() => router.push("/home/prompt")}
               iconPosition="left"
               text="Retake"
            />
         </div>
      </div>
   );
};

export default TodayMovie;
