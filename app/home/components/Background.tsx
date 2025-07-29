"use client";

import { cn } from "@/app/shared/utils";
import { useSearchParams } from "next/navigation";
import { getGenreColorBgClassName } from "@/app/shared/lib/helper/getGenreColor";

export const Background = () => {
   const params = useSearchParams();
   const bgParam = params.get("bg");

   return (
      <div className="absolute inset-0 z-0 bg-background">
         {/* Base gradient layer (e.g. linear or solid) */}
         <div
            className={cn(
               "absolute inset-0 bg-gradient-to-b transition-colors duration-1000",
               !bgParam && "from-transparent via-transparent to-sky-200",
               bgParam === "settings" &&
                  "via-transparent to-[rgba(151,183,238,0.5)]",
               bgParam === "base" ? "opacity-0" : "opacity-100",
               bgParam === "ROMANTIC_DRAMA" && "via-romantic-to to-romantic-to",
               bgParam === "COMEDY_DRAMA" && "via-comedy-drama-to to-comedy-drama-to",
               bgParam === "ADVENTURE_FANTASY" && "via-adventure-fantasy-to to-adventure-fantasy-to",
               bgParam === "DARK_COMEDY" && "via-dark-comedy-to to-dark-comedy-to",
               bgParam === "HORROR" && "via-horror-to to-horror-to",
               bgParam === "COMING_OF_AGE" && "via-coming-of-age-to to-coming-of-age-to",
               bgParam === "SLICE_OF_LIFE" && "via-slice-of-life-to to-slice-of-life-to",
               bgParam === "ACTION_THRILLER" && "via-action-thriller-to to-action-thriller-to",
               bgParam === "MYSTERY_SUSPENSE" && "via-mystery-suspense-to to-mystery-suspense-to",
               bgParam === "FEEL_GOOD_MUSICAL" && "via-feel-good-musical-to to-feel-good-musical-to"
             )}
         />

         {/* Radial gradient layer */}
         <div
            className={cn(
               "absolute inset-0 transition-opacity duration-1000",
               bgParam === "base" ? "opacity-100" : "opacity-0"
            )}
            style={{
               background:
                  "radial-gradient(circle at 50% 150%, #E97B34 30%, #D690AE 50%, #97B7EE 60%, transparent 90%)",
            }}
         />

         {/* Grain/noise overlay */}
         <div
            className="absolute inset-0 bg-repeat opacity-30 pointer-events-none z-10"
            style={{
               backgroundImage: "url('/grain.png')",
               backgroundSize: "70px 70px",
            }}
         />
      </div>
   );
};
