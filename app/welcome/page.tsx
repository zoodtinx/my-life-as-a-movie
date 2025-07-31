"use client";

import React, { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { cn } from "@/app/shared/utils";
import { Background } from "@/app/home/components/Background";
import { MLAMLogo } from "@/app/shared/icons/Logo";
import { CircleNotch } from "phosphor-react";

const Page = () => {
   const [isLoading, setisLoading] = useState(false);

   if (isLoading) {
      return (
         <div className="flex justify-center items-center h-[calc(100vh-80px)]">
            <Background />
            <CircleNotch className="animate-spin size-[40px] text-primary z-10" />
         </div>
      );
   }

   const signInWithProvider = async (provider: string) => {
      setisLoading(true);
      await signIn(provider);
   };

   return (
      <Suspense fallback={<div>Loading...</div>}>
         <div className="min-w-screen flex min-h-screen text-lg">
            <Background />
            <div className="w-full h-screen flex justify-center items-center text-primary z-10">
               <div className="flex flex-col items-center gap-2">
                  <MLAMLogo className="w-[550px] h-auto" />
                  <div className="flex flex-col items-center gap-2 pt-5 font-header">
                     <button
                        className={cn(
                           "py-1 px-4 bg-primary text-background rounded-md font-medium font-headline text-[21px]",
                           "cursor-pointer transition-colors hover:bg-secondary w-[280px]"
                        )}
                        onClick={() => signInWithProvider("credentials")}
                     >
                        Experience Demo
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </Suspense>
   );
};

export default Page;
