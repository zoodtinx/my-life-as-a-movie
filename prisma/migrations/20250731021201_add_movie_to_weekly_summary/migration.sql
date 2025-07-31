-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "weeklySummaryId" TEXT;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_weeklySummaryId_fkey" FOREIGN KEY ("weeklySummaryId") REFERENCES "WeeklySummary"("id") ON DELETE SET NULL ON UPDATE CASCADE;
