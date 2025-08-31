import { getTimezonedDate } from "@/app/shared/lib/timezone/getTimezonedDate";
import prisma from "@/app/shared/lib/db/prisma";
import { auth } from "@/app/auth";
import TodayMovie from "@/app/home/today/components/TodayMovie";
import { TodayPageContent } from "@/app/home/today/content";
import { Suspense } from "react";
import { updateInsights } from "@/app/home/today/actions";

const TodayPage = async () => {
   const session = await auth();

   const todayMovie = await prisma.movie.findFirst({
      where: {
         userId: session?.user?.id,
      },
      orderBy: {
         date: "desc",
      },
   });

   const today = getTimezonedDate();
   const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

   const isToday =
      todayMovie &&
      new Date(todayMovie.date) >= today &&
      new Date(todayMovie.date) < tomorrow;

   await updateInsights(session?.user?.id);

   if (!isToday) {
      return (
         <Suspense>
            <TodayPageContent />
         </Suspense>
      );
   } else {
      return (
         <Suspense>
            <TodayMovie movie={todayMovie} />
         </Suspense>
      );
   }
};

export default TodayPage;
