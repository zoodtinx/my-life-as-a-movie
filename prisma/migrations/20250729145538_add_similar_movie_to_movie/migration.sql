/*
  Warnings:

  - You are about to drop the column `alternateEnding` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "alternateEnding",
ADD COLUMN     "similarMovies" JSONB;
