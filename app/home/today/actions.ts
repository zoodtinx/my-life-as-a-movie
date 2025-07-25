"use server"

import { MovieFormData } from "@/app/shared/zod/movie-input.zod.schema";

export async function getMovieSummary(userInput: MovieFormData) {

   console.log('userInput', userInput)

   return {status: 'ok'}
}