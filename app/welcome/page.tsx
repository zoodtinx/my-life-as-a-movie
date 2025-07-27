"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { cn } from "@/app/shared/utils";

const Page = () => {
   const [isLoading, setisLoading] = useState(false);

   if (isLoading) {
      return (
         <div className="w-full h-screen flex justify-center items-center bg-background text-primary">
            <div className="w-fit overflow-hidden">
            </div>
         </div>
      );
   }

   const signInWithProvider = async (provider: string) => {
      setisLoading(true);
      await signIn(provider);
   };

   return (
      <div className="w-full h-screen flex justify-center items-center bg-background text-primary">
         <div className="flex flex-col items-center gap-2">
            <p className="text-center font-headline text-[40px] md:text-[50px] w-[350px] md:w-[500px] leading-10 md:leading-13">
               {/* It&apos;s either good or great to run. */}
               No such thing as a bad run
               {/* Every run is a journey. */}
            </p>
            <div className="flex flex-col items-center gap-2 pt-5">
               <div className="flex items-center text-md font-medium cursor-pointer group">
                  <span className="text-[18px] md:text-base">
                     Explore Features
                  </span>
               </div>
               <button
                  className={cn(
                     "py-1 px-4 bg-primary text-background rounded-xl font-semibold uppercase font-headline text-[15px]",
                     "cursor-pointer transition-colors hover:bg-secondary w-[280px]"
                  )}
                  onClick={() => signInWithProvider("credentials")}
               >
                  Experience Demo
               </button>
               <button
                  className={cn(
                     "py-1 px-4 border-2 border-primary text-primary rounded-xl font-semibold uppercase font-headline text-[15px]",
                     "cursor-pointer transition-colors hover:bg-secondary w-[280px] flex justify-center items-center gap-1"
                  )}
                  onClick={() => signInWithProvider("google")}
               >
               </button>
            </div>
         </div>
      </div>
   );
};

export default Page;
