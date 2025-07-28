

export const getDemoSummaries = (userId: string) => [
   {
      week: "17 Jul - 24 Jul",
      headline: "Thrillers Take the Spotlight",
      mainSummary:
         "This week was dominated by intense psychological thrillers that kept audiences on edge.",
      mostFrequentGenre: "Thriller",
      userId,
      recommendation: "Explore more noir-inspired stories for next week.",
   },
   {
      week: "25 Jul - 01 Aug",
      headline: "Romance Rekindled",
      mainSummary:
         "Romantic dramas gained popularity, bringing heartfelt stories to the forefront.",
      mostFrequentGenre: "Romance",
      userId,
      recommendation:
         "Consider adding light-hearted romantic comedies to balance the tone.",
   },
   {
      week: "02 Aug - 09 Aug",
      headline: "Comedy Rules the Week",
      mainSummary:
         "Audiences leaned toward humor, making comedies the most-watched genre.",
      mostFrequentGenre: "Comedy",
      userId,
      recommendation:
         "Keep the laughter going with witty dialogue-driven scripts.",
   },
   {
      week: "10 Aug - 17 Aug",
      headline: "Sci-Fi Sparks Curiosity",
      mainSummary:
         "Sci-fi adventures with futuristic themes captured significant attention.",
      mostFrequentGenre: "Science Fiction",
      userId,
      recommendation: "Add some dystopian elements to keep the intrigue alive.",
   },
   {
      week: "18 Aug - 25 Aug",
      headline: "Action Packed Adventures",
      mainSummary:
         "High-octane action films with gripping storylines were the talk of the week.",
      mostFrequentGenre: "Action",
      userId,
      recommendation:
         "Include more grounded, character-driven action scenes for depth.",
   },
];
