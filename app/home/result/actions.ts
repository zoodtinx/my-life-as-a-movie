"use server";

import prisma from "@/app/shared/lib/db/prisma";

type DeleteMovieResponse =
  | { success: true }
  | { success: false; message: string };

export async function deleteMovie(movieId: string): Promise<DeleteMovieResponse> {
  try {
    await prisma.movie.delete({ where: { id: movieId } });
    return { success: true };
  } catch (error) {
    console.error("Delete movie error:", error);
    return {
      success: false,
      message: (error as Error).message || "Unknown error",
    };
  }
}
