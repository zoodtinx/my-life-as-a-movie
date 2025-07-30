import { MovieFormData } from "@/app/shared/lib/zod/movie-input.zod.schema";
import OpenAI from "openai";
import prisma from "@/app/shared/lib/db/prisma";

const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

export async function generateMovie(userInput: MovieFormData) {
   const user = await prisma.user.findUnique({
      where: {
         id: userInput.userId
      }
   })

   const context = user?.personalContext
   const inputWithContext = { ...userInput, context };
   const userInputJson = JSON.stringify(inputWithContext);

   try {
      const response = await openai.responses.create({
         prompt: {
            "id": "pmpt_6888c5412e648196b1af516c7f41c0c508af32e8900dfef7",
            "version": "13"
          },
         input: [
            {
               role: "user",
               content: userInputJson,
            },
            {
               role: "user",
               content: userInputJson,
            },
         ],
         text: {
            format: {
               type: "json_schema",
               name: "movie_day_narrative",
               strict: true,
               schema: {
                  type: "object",
                  properties: {
                     genre: {
                        type: "string",
                        description:
                           "The tone or theme that best matches the user's day.",
                        enum: [
                           "COMEDY_DRAMA",
                           "ADVENTURE_FANTASY",
                           "DARK_COMEDY",
                           "HORROR",
                           "COMING_OF_AGE",
                           "ACTION_THRILLER",
                           "MYSTERY_SUSPENSE",
                           "FEEL_GOOD_MUSICAL",
                        ],
                     },
                     logline: {
                        type: "string",
                        description:
                           "A short film premise summarizing the user's day in ≤ 5 sentences.",
                     },
                     review: {
                        type: "string",
                        description:
                           "A long, analytical and emotional critique reflecting on how the day's events connect to the chosen genre and logline.",
                     },
                     sequelIdea: {
                        type: "string",
                        description:
                           "A long, cinematic yet digestible 'sequel' in the form of a hopeful mental wellness suggestion for tomorrow.",
                     },
                     similarMovie: {
                        type: "array",
                        description:
                           "A list of 3 movies tonally/thematically similar to the user's day.",
                        items: {
                           type: "object",
                           properties: {
                              movie: {
                                 type: "string",
                                 description: "The name of the similar movie.",
                              },
                              year: {
                                 type: "integer",
                                 description:
                                    "The release year of the similar movie.",
                              },
                              director: {
                                 type: "string",
                                 description:
                                    "The director of the similar movie.",
                              },
                              whySimilar: {
                                 type: "string",
                                 description:
                                    "1–2 sentences on why this movie is similar to the user's day.",
                              },
                           },
                           required: [
                              "movie",
                              "year",
                              "director",
                              "whySimilar",
                           ],
                           additionalProperties: false,
                        },
                        minItems: 3,
                        maxItems: 3,
                     },
                  },
                  required: [
                     "genre",
                     "logline",
                     "review",
                     "sequelIdea",
                     "similarMovie",
                  ],
                  additionalProperties: false,
               },
            },
         },
         reasoning: {},
         max_output_tokens: 2048,
         store: true,
      });

      const output = response.output_text;
      const parsed = JSON.parse(output || "");

      return { success: true, data: parsed };
   } catch (error) {
      console.log("error", error);
      return { success: false };
   }
}
