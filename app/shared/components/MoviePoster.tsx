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
   const formattedDate = format(movieData.date, "EEE, d MMM")

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
            "w-[105px] h-[148px] p-2 pb-1 pt-[7px] shadow-sm",
            "xl:w-[150px] xl:h-[210px] xl:p-[13px] xl:pb-[8px] xl:shadow-md",
            `bg-gradient-to-b ${genreColor}`,

            size === "large" &&
               cn(
                  "w-[150px] h-[210px] p-[10px] pb-[8px] shadow-md",
                  "md:w-[160px] md:h-[220px] md:p-[11px] md:py-[8px]",
                  "xl:pt-3 xl:pb-3 xl:px-3 xl:w-[180px] xl:h-[255px]"
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
                  "xl:text-[21px] xl:leading-[22px]",
                  size === "large" &&
                     cn(
                        "text-[20px] leading-[22px]",
                        "md:text-[24px] md:leading-[28px]",
                        "xl:text-[24px] xl:leading-[28px]"
                     )
               )}
            >
               {genre}
            </p>
            <p
               className={cn(
                  "text-right font-header",
                  "text-[15px]",
                  "xl:text-[16px] xl:leading-[22px]",
                  size === "large" &&
                     cn(
                        "text-[16px] leading-[22px]",
                        "md:font-normal md:text-[18px]",
                        "xl:font-normal xl:text-[17px]"
                     )
               )}
            >
               {formattedDate}
            </p>
         </div>
      </div>
   );
};
