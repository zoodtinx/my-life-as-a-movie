"use client";

import { MoviePoster } from "@/app/shared/components/MoviePoster";
import { Movie } from "@prisma/client";
import { PageButton } from "@/app/shared/components/CustomButton";
import { ArrowsCounterClockwise, Export, TrashSimple } from "phosphor-react";
import { useRouter } from "next/navigation";
import { getFormattedGenre } from "@/app/shared/lib/helper/getFormattedGenre";
import { deleteMovie } from "@/app/home/result/actions";

const TodayMovie = ({ movie }: { movie: Movie }) => {
   if (!movie) {
      return "Unexpected Error";
   }

   const genre = getFormattedGenre(movie.genre);

   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <div className="flex flex-col justify-between w-[1080px] min-h-[640px]">
            <div className="flex flex-col gap-5">
               <p className="font-medium text-[48px] text-center">Today is</p>
               <div className="leading-tight flex w-full gap-11">
                  <MoviePoster movieData={movie} size="large" />
                  <div className="flex flex-col gap-6 grow leading-normal">
                     <div className="flex gap-3">
                        <p className="font-header font-medium text-[25px]">
                           Genre
                        </p>
                        <p className="font-header text-[25px]">{genre}</p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Logline
                        </p>
                        <p>&quot;{movie.logline}&quot;</p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Review
                        </p>
                        <p>&quot;{movie.review}&quot;</p>
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
            <PageButton
               icon={<ArrowsCounterClockwise />}
               onClick={() => router.push("/home/prompt")}
               iconPosition="left"
               text="Retake"
            />
         </div>
         <div className="flex gap-8">
            <PageButton icon={<Export />} iconPosition="right" text="Share" />
         </div>
      </div>
   );
};

export default TodayMovie;
