"use client";

import { cn } from "@/app/shared/utils";
import { getFormattedGenre } from "@/app/shared/lib/helper/getFormattedGenre";
import React from "react";
import { format } from "date-fns";
import { getGenreColorClassNames } from "@/app/shared/lib/helper/getGenreColor";
import { Movie } from "@prisma/client";
import { useRouter } from "next/navigation";

interface MoviePosterProps {
   movieData: Movie;
   size?: "small" | "large"; // default to small
}
 
export const MoviePoster = ({ movieData, size = "small" }: MoviePosterProps) => {
   const router = useRouter();
   const genre = getFormattedGenre(movieData.genre);
   const genreColor = getGenreColorClassNames(movieData.genre);
   const formattedDate =
     size === "small"
       ? format(movieData.date, "EEE, d MMM")
       : format(movieData.createdAt, "d MMMM");
 
   const handleClick = () => {
     if (size === "small") {
       router.push(
         `/home/result?id=${movieData.id}&bg=${encodeURIComponent(movieData.genre)}`
       );
     }
   };
 
   return (
     <div
       className={cn(
         "flex cursor-pointer select-none shadow-md",
         size === "small"
           ? [
               "p-[13px] pb-[10px] w-[170px] h-[240px] hover:scale-104 transition-transform duration-200 ease-in-out",
               `bg-gradient-to-b ${genreColor}`,
             ]
           : [
               "flex-col justify-between p-4 px-5 w-[276px] h-[391px] shrink-0",
               "font-header font-medium text-[38px] leading-10 shadow-xl cursor-default",
               `bg-gradient-to-b ${genreColor}`
             ]
       )}
       onClick={handleClick}
     >
       <div className={cn("flex grow flex-col justify-between", size === "small" ? "" : "")}>
         <p
           className={cn(
             "font-header",
             size === "small"
               ? "font-medium text-[25px] leading-[26px]"
               : ""
           )}
         >
           {genre}
         </p>
         <p
           className={cn(
             "text-right",
             size === "small"
               ? "font-header text-[20px] leading-[26px]"
               : "font-normal text-[30px]"
           )}
         >
           {formattedDate}
         </p>
       </div>
     </div>
   );
 };