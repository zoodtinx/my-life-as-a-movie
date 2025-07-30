"use client";

import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { Movie } from "@prisma/client";
import { PageButton } from "@/app/shared/components/CustomButton";
import { ArrowsCounterClockwise, Export, TrashSimple } from "phosphor-react";
import { useRouter, useSearchParams } from "next/navigation";
import { deleteMovie } from "@/app/home/result/actions";
import { useEffect } from "react";

interface SimilarMovie {
   year: number;
   movie: string;
   director: string;
   whySimilar: string;
}

const TodayMovie = ({ movie }: { movie: Movie }) => {
   const router = useRouter();
   const searchParams = useSearchParams();

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
      <div className="flex justify-between">
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
            <PageButton icon={<Export />} iconPosition="right" text="Share" />
         </div>
      </div>
   );
};

export default TodayMovie;
