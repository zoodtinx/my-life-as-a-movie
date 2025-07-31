import { auth } from "@/app/auth";
import SettingsPageContent from "@/app/home/settings/content";
import prisma from "@/app/shared/lib/db/prisma";
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
      <div className="flex flex-col justify-between items-center w-full h-full px-20 pt-9 pb-0">
         <div className="flex flex-col grow gap-5 w-full justify-center items-center h-full">
            <SessionProvider>
               <SettingsPageContent user={userData} />
            </SessionProvider>
         </div>
      </div>
   );
};

export default SettingsPage;
