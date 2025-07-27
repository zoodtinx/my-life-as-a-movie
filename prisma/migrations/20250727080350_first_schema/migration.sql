-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('COMEDY_DRAMA', 'ADVENTURE_FANTASY', 'DARK_COMEDY', 'HORROR', 'COMING_OF_AGE', 'SLICE_OF_LIFE', 'ACTION_THRILLER', 'MYSTERY_SUSPENSE', 'ROMANTIC_DRAMA', 'FEEL_GOOD_MUSICAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "logline" TEXT NOT NULL,
    "review" TEXT,
    "alternateEnding" TEXT,
    "sequelIdea" TEXT,
    "summary" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
