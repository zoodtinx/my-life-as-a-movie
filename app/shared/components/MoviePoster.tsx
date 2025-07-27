import {
   MovieResult,
   Genre,
} from "@/app/shared/lib/zod/movie-result.zod.schema";
import { cn } from "@/app/shared/utils";
import { getFormattedGenre } from "@/app/shared/lib/helper/getFormattedGenre";
import React from "react";

interface MoviePosterProps {
   movieData: MovieResult;
}

export const MoviePoster = ({ movieData }: MoviePosterProps) => {
   return (
      <div
         className={cn(
            "w-[170px] h-[240px] shadow-md",
            `bg-gradient-to-b ${getFormattedGenre(movieData.genre as Genre)}`
         )}
      ></div>
   );
};
