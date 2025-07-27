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
          "absolute inset-0 bg-gradient-to-b from-transparent to-transparent transition-colors duration-1000",
          !bgParam && "from-transparent via-transparent to-sky-200",
          bgParam === "settings" && "via-transparent to-[rgba(151,183,238,0.5)]",
          bgParam &&
            bgParam !== "settings" &&
            getGenreColorBgClassName(bgParam),
          bgParam === "base" ? "opacity-0" : "opacity-100"
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
        className="absolute inset-0 bg-repeat opacity-20 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/grain.png')",
          backgroundSize: "70px 70px"
        }}
      />
    </div>
  );
};