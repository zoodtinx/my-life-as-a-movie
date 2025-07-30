import React from "react";
import { StartButton } from "@/app/home/today/components/StartButton";
import prisma from "@/app/shared/lib/db/prisma";
import { auth } from "@/app/auth";
import TodayMovie from "@/app/home/today/components/TodayMovie";
import { TodayPageContent } from "@/app/home/today/content";

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

   console.log('today', todayMovie?.id)

   const today = new Date();
   today.setHours(0, 0, 0, 0);

   const tomorrow = new Date(today);
   tomorrow.setDate(today.getDate() + 1);

   const isToday =
      todayMovie &&
      new Date(todayMovie.date) >= today &&
      new Date(todayMovie.date) < tomorrow;


   if (!isToday) {
      return (
         <TodayPageContent />
      );
   } else {
      return <TodayMovie movie={todayMovie} />;
   }
};

export default TodayPage;
