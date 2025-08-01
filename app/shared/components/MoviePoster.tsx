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

export const MoviePoster = ({
   movieData,
   size = "small",
}: MoviePosterProps) => {
   const router = useRouter();
   const genre = getFormattedGenre(movieData.genre);
   const genreColor = getGenreColorClassNames(movieData.genre);
   const formattedDate =
      size === "small"
         ? format(movieData.date, "EEE, d MMM")
         : format(movieData.createdAt, "EEE, d MMMM");

   const handleClick = () => {
      if (size === "small") {
         router.push(
            `/home/result?id=${movieData.id}&bg=${encodeURIComponent(
               movieData.genre
            )}`
         );
      }
   };

   return (
      <div
         className={cn(
            "flex cursor-pointer select-none shrink-0",
            "hover:scale-104 transition-transform duration-200 ease-in-out",
            "w-[105px] h-[148px] p-2 pb-1 shadow-sm",
            "xl:w-[170px] xl:h-[240px] xl:p-[13px] xl:pb-[10px] xl:shadow-md",
            `bg-gradient-to-b ${genreColor}`,

            // Large size override
            size === "large" &&
               cn(
                  "w-[170px] h-[240px] p-[13px] pb-[10px] shadow-md",
                  "md:pt-5 md:pb-5 md:px-5 md:w-[276px] md:h-[391px]",
                  "xl:pt-5 xl:pb-5 xl:px-5 xl:w-[276px] xl:h-[391px]"
               )
         )}
         onClick={handleClick}
      >
         <div
            className={cn(
               "flex grow flex-col justify-between",
               size === "small" ? "" : ""
            )}
         >
            <p
               className={cn(
                  "font-header font-medium",
                  "text-[17px] leading-[19px]",
                  "xl:text-[25px] xl:leading-[26px]",
                  size === "large" &&
                     cn(
                        "text-[25px] leading-[26px]",
                        "md:text-[40px] md:leading-[45px]",
                        "xl:text-[40px] xl:leading-[45px]"
                     )
               )}
            >
               {genre}
            </p>
            <p
               className={cn(
                  "text-right font-header",
                  "text-[15px]",
                  "xl:text-[20px] xl:leading-[26px]",
                  size === "large" &&
                     cn(
                        "text-[20px] leading-[26px]",
                        "md:font-normal md:text-[30px]",
                        "xl:font-normal xl:text-[30px]"
                     )
               )}
            >
               {formattedDate}
            </p>
         </div>
      </div>
   );
};
