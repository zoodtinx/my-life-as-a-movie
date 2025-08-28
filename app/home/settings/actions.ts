"use server";

import prisma from "@/app/shared/lib/db/prisma";

export async function exportEntriesCsv(userId?: string) {
   const entries = await prisma.movie.findMany({
      where: { userId },
      orderBy: { date: "asc" },
   });

   if (!entries.length) return;

   const headers = Object.keys(entries[0]).join(",");
   const rows = entries.map((e) =>
      Object.values(e)
         .map((v) => `"${String(v).replace(/"/g, '""')}"`)
         .join(",")
   );
   const csv = [headers, ...rows].join("\n");

   return csv;
}

export async function deleteAllEntries(userId?: string) {
   if (!userId) return;

   await prisma.movie.deleteMany({
      where: { userId },
   });
   
   await prisma.weeklySummary.deleteMany({
      where: { userId },
   });
}

export async function editPersonalContext(
   userId: string,
   personalContext: string
) {
   await prisma.user.update({
      where: {
         id: userId,
      },
      data: {
         personalContext,
      },
   });
}

export async function deleteAccount(userId?: string) {
   if (!userId) return;

   // Delete the user record
   await prisma.user.delete({
      where: { id: userId },
   });
}