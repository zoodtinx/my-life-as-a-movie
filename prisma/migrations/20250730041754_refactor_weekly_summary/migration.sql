/*
  Warnings:

  - You are about to drop the column `mainSummary` on the `WeeklySummary` table. All the data in the column will be lost.
  - You are about to drop the column `mostFrequentGenre` on the `WeeklySummary` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation` on the `WeeklySummary` table. All the data in the column will be lost.
  - Added the required column `growthHighlight` to the `WeeklySummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalitySnapshot` to the `WeeklySummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weekSummary` to the `WeeklySummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeeklySummary" DROP COLUMN "mainSummary",
DROP COLUMN "mostFrequentGenre",
DROP COLUMN "recommendation",
ADD COLUMN     "growthHighlight" TEXT NOT NULL,
ADD COLUMN     "personalitySnapshot" TEXT NOT NULL,
ADD COLUMN     "weekSummary" TEXT NOT NULL;
