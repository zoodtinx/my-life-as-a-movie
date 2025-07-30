import { auth } from "@/app/auth";
import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import prisma from "@/app/shared/lib/db/prisma";
import React from "react";

const InsightsPage = async () => {
   const session = await auth();

   if (!session?.user) return null;

   const weeklySummary = await prisma.weeklySummary.findFirst({
      where: {
         userId: session.user.id,
      },
      orderBy: {
         createdAt: "asc",
      },
   });

   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col justify-between items-center w-full h-full px-20 py-[90px] fade-up-fast">
            <div className="flex flex-col items-center grow gap-[60px] w-full">
               <div className="flex flex-col gap-2 text-[33px] font-header font-medium leading-snug">
                  <p className="font-normal text-center text-[20px]">
                     A summary of your week ({weeklySummary?.week})
                  </p>
                  <p className="text-center w-[850px]">
                     {/* [&nbsp;&nbsp;if this week were a franchise&nbsp;&nbsp;] */}
                     &quot;{weeklySummary?.headline}&quot;
                  </p>
               </div>
               <div className="w-[1000px] border-b border-b-primary/15" />
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[25px] text-center pb-4">
                     You, The Main Character.
                  </p>
                  <p className="indent-8">{weeklySummary?.personalitySnapshot}</p>
               </div>
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[25px] text-center pb-4">
                     This Week, Your Story.
                  </p>
                  <p className="indent-8">{weeklySummary?.weekSummary}</p>
               </div>
               <div className="w-[1000px]">
                  <p className="font-header font-medium text-[25px] text-center pb-4">
                     Changes, As They Happen
                  </p>
                  <p className="indent-8">{weeklySummary?.growthHighlight}</p>
               </div>
            </div>
         </div>
      </ScrollArea>
   );
};

export default InsightsPage;
