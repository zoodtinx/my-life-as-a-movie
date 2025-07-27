"use client";

import { Footer } from "@/app/home/result/components/Footer";
import { MovieResult } from "@/app/shared/lib/zod/movie-result";
import { cn } from "@/app/shared/utils";
import { format } from "date-fns";
import React from "react";

const ResultPage = () => {
   const movieResult: MovieResult = {
      id: "8f5d6a90-1234-4cde-9876-a1b2c3d4e5f6",
      userId: "123e4567-e89b-12d3-a456-426614174000",
      genre: "Romantic Comedy",
      logline:
         "A washed-up boxer, haunted by his past failures, embarks on a heartfelt journey to reconnect with his estranged daughter",
      review:
         "A powerful and emotionally gripping film that tugs at the heartstrings. The lead actor delivers a nuanced performance, capturing both the vulnerability and determination of a father seeking redemption. The story is beautifully paced, blending moments of humor and tenderness with raw, authentic emotion. A must-watch for anyone who appreciates stories about second chances and the enduring bonds of family.",
      summary:
         "This heartfelt drama follows a once-promising boxer whose career and personal life have been derailed by a series of poor choices. Estranged from his daughter for years, he seizes a final opportunity to make amends, navigating the complexities of forgiveness and self-discovery. Through a series of poignant encounters and setbacks, he learns that true strength lies not in the ring, but in the courage to face one's own shortcomings and to fight for the people who matter most.",
      createdAt: new Date().toISOString(),
   };

   const formattedDate = format(movieResult.createdAt, "do MMMM"); // "14th July"

   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <div className="flex flex-col justify-between w-[1080px] min-h-[640px]">
            <div className="flex flex-col gap-5">
               <p className="font-medium text-[48px] text-center">
                  Your {formattedDate} is
               </p>
               <div className="leading-tight flex w-full gap-11">
                  <MoviePoster movieResult={movieResult} />
                  <div className="flex flex-col gap-6 grow leading-normal">
                     <div className="flex gap-3">
                        <p className="font-header font-medium text-[25px]">
                           Genre
                        </p>
                        <p className="font-header text-[25px]">
                           {movieResult.genre}
                        </p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Logline
                        </p>
                        <p>&quot;{movieResult.logline}&quot;</p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Review
                        </p>
                        <p>&quot;{movieResult.review}&quot;</p>
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

const MoviePoster = ({ movieResult }: { movieResult: MovieResult }) => {
   const formattedDate = format(movieResult.createdAt, "d MMMM");

   return (
      <div
         className={cn(
            cn(
               "flex flex-col justify-between p-4 px-5 w-[276px] h-[391px] shrink-0 cursor-default select-none",
               "font-header font-medium text-[38px] leading-10 shadow-xl",
               movieResult.genre === "Romantic Comedy"
                  ? "bg-gradient-to-b from-romantic-from to-romantic-to"
                  : ""
            )
         )}
      >
         <p>{movieResult.genre}</p>
         <p className="font-normal text-[30px] text-right">{formattedDate}</p>
      </div>
   );
};

export default ResultPage;
