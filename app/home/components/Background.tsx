"use client";
import { useSearchParams } from "next/navigation";


export const Background = () => {
   const params = useSearchParams();

   return (
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-sky-200" />
         <div
            className="absolute inset-0 bg-repeat opacity-10 pointer-events-none z-10"
            style={{ backgroundImage: "url('/grain.png')" }}
         />
      </div>
   );
};
