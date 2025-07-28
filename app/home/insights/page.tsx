import { auth } from "@/app/auth";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import prisma from "@/app/shared/lib/db/prisma";
import React from "react";

const InsightsPage = async () => {
   const session = await auth()
 
   if (!session?.user) return null

   const weeklySummary = await prisma.weeklySummary.findFirst({
      where: {
         userId: session.user.id
      },
      orderBy: {
         createdAt: 'asc'
      }
   });
   
   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col justify-between items-center w-full h-full px-20 py-[90px]">
            <div className="flex flex-col items-center grow gap-10 w-full">
               <div className="text-[40px] font-header font-medium leading-snug">
                  <p className="text-center w-[650px]">
                     {/* [&nbsp;&nbsp;if this week were a franchise&nbsp;&nbsp;] */}
                     &quot;{weeklySummary?.headline}&quot;
                  </p>
               </div>
               <div className="text-[20px] leading-loose w-[1000px]">
                  {weeklySummary?.mainSummary}
               </div>
               <div className="text-[20px] leading-loose w-[1000px]">
                  <div className="flex gap-4 items-baseline font-header text-[25px]">
                     <p className="font-medium">Most Frequent Genre:</p>
                     <p className="">{weeklySummary?.mostFrequentGenre}</p>
                  </div>
               </div>
               <div className="flex flex-col text-[20px] leading-loose w-[1000px]">
                  <div className="flex gap-4 items-baseline font-header text-[25px]">
                     <p className="font-medium">What to hope for?:</p>
                  </div>
                  <p>
                     {weeklySummary?.recommendation}
                  </p>
               </div>
            </div>
         </div>
      </ScrollArea>
   );
};

export default InsightsPage;
