/*
  Warnings:

  - You are about to drop the column `similarMovies` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "similarMovies",
ADD COLUMN     "similarMovie" JSONB;
