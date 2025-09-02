"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface LoadMoreButtonProps {
   moviesLength: number
}

const LoadMoreButton = ({ moviesLength}: LoadMoreButtonProps) => {
   const searchParams = useSearchParams();
   const router = useRouter();
   const currentTake = Math.round(Number(searchParams.get("take"))) || 42;
   const newTake = currentTake + 28;
   const params = new URLSearchParams(searchParams.toString());

   const handleClick = () => {
      params.set("take", newTake.toString());
      router.push("?" + params.toString());
   };

   if (moviesLength < currentTake) {
      return null
   }

   return (
      <button
         onClick={handleClick}
         className="font-header font-medium text-md border leading-none py-1 px-3 w-fit rounded-lg"
      >
         Load More
      </button>
   );
};

export default LoadMoreButton;
