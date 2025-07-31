import { Background } from "@/app/home/components/Background";
import { NavBar } from "@/app/home/components/NavBar";
import { cn } from "@/app/shared/utils";
import React, { Suspense } from "react";

const homeLayout = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <div className="min-w-screen flex min-h-screen text-lg">
         <Suspense>
            <Background />
         </Suspense>
         <div className="flex flex-col min-h-screen w-full z-10">
            <Suspense>
               <NavBar />
            </Suspense>
            <main
               className={cn(
                  "text-primary",
                  "h-[calc(100vh-45px)]",
                  "md:h-[calc(100vh-65px)]",
                  "2xl:h-[calc(100vh-80px)]"
               )}
            >
               {children}
            </main>
         </div>
      </div>
   );
};

export default homeLayout;
