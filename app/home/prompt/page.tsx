import { PromptDialog } from "@/app/home/today/components/PromptDialog";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth";
import prisma from "@/app/shared/lib/db/prisma";

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
   
   return (
      <SessionProvider>
         <div className="flex flex-col justify-between items-center w-full h-full pb-9">
            <div></div>
            <PromptDialog user={userData} />
            <div></div>
         </div>
      </SessionProvider>
   );
};

export default PromptPage;
