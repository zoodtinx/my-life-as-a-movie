import { Genre } from "@/app/shared/lib/zod/movie-result.zod.schema";

export const getFormattedGenre = (genre: Genre) => {
  switch (genre) {
    case "ROMANTIC_DRAMA":
      return "from-romantic-from to-romantic-to";
    case "COMEDY_DRAMA":
      return "from-comedy-drama-from to-comedy-drama-to";
    case "ADVENTURE_FANTASY":
      return "from-adventure-fantasy-from to-adventure-fantasy-to";
    case "DARK_COMEDY":
      return "from-dark-comedy-from to-dark-comedy-to";
    case "HORROR":
      return "from-horror-from to-horror-to";
    case "COMING_OF_AGE":
      return "from-coming-of-age-from to-coming-of-age-to";
    case "SLICE_OF_LIFE":
      return "from-slice-of-life-from to-slice-of-life-to";
    case "ACTION_THRILLER":
      return "from-action-thriller-from to-action-thriller-to";
    case "MYSTERY_SUSPENSE":
      return "from-mystery-suspense-from to-mystery-suspense-to";
    case "FEEL_GOOD_MUSICAL":
      return "from-feel-good-musical-from to-feel-good-musical-to";
    default:
      return "from-romantic-from to-romantic-to";
  }
};