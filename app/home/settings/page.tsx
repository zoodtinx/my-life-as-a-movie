import { auth } from "@/app/auth";
import SettingsPageContent from "@/app/home/settings/content";
import prisma from "@/app/shared/lib/db/prisma";
import { cn } from "@/app/shared/utils";
import { SessionProvider } from "next-auth/react";

const SettingsPage = async () => {
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
      <div
         className={cn(
            "flex flex-col justify-between w-full h-full overflow-y-auto",
            "px-0 pt-0 items-start",
            "md:px-7",
            "lg:px-20 lg:pt-9 lg:items-center"
         )}
      >
         <div
            className={cn(
               "flex flex-col grow gap-5 w-full h-full",
               "justify-start",
               "lg:justify-center lg:items-center"
            )}
         >
            <SessionProvider>
               <SettingsPageContent user={userData} />
            </SessionProvider>
         </div>
      </div>
   );
};

export default SettingsPage;
