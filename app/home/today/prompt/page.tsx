import { auth } from "@/app/auth";
import { PromptDialog } from "@/app/home/today/components/PromptDialog";
import prisma from "@/app/shared/lib/db/prisma";
import React, { Suspense } from "react";

const PromptPage = async () => {
   const session = await auth();

   if (!session?.user) return null;

   const userData = await prisma.user.findUnique({
      where: {
         id: session.user.id,
      },
   });

   if (!userData) {
      return 'unexpected error'
   }

   console.log('userData', userData)

   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <Suspense fallback={<div>Loading...</div>}>
            <PromptDialog user={userData} />
         </Suspense>
         <p className="text-center w-2/3 text-white font-header font-medium">
            [ my life as a movie ] turns your daily moods into a cinematic
            journey. Rate your day, jot down your thoughts, and watch your story
            unfold. No filters, no fluff — just your life, honestly told.
         </p>
      </div>
   );
};

export default PromptPage;