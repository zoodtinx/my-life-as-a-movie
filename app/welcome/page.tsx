"use client";

import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { MLAMLogo } from "@/app/shared/icons/Logo";
import {
   ArrowLineUpLeft,
   ArrowRight,
   ArrowUpLeft,
   ArrowUpLeft as ArrowUpLeftOld,
   ArrowDown as NavArrowDown,
   Popcorn,
} from "phosphor-react";
import { GithubLogo } from "@/app/welcome/components/Github";
import { Enter } from "@/app/welcome/components/Enter";
import { Background } from "@/app/home/components/Background";
import { MoviePoster } from "@/app/welcome/components/Poster";

const Page = () => {
   const [isLoading, setisLoading] = useState(false);
   const featuresRef = useRef<HTMLDivElement>(null);

   if (isLoading) {
      return (
         <div className="w-full h-screen flex justify-center items-center bg-background text-primary">
            <div className="w-fit overflow-hidden">
               <MLAMLogo className="animate-slide overflow-hidden" />
            </div>
         </div>
      );
   }

   const signInWithProvider = async (provider: string) => {
      setisLoading(true);
      await signIn(provider);
   };

   const handleExploreFeatures = () => {
      if (featuresRef.current) {
         featuresRef.current.scrollIntoView({ behavior: "smooth" });
      }
   };

   const exportScreenshots = [1, 2, 3, 4, 5];

   return (
      <div className="w-full h-screen flex justify-center items-center text-primary text-[18px]">
         <div className="w-full h-full z-10">
            <div className="w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
               <div className="flex flex-col gap-2 w-[1200px]">
                  <div className="pt-[61px] h-screen w-full flex flex-col justify-between">
                     <div>
                        <div className="flex justify-between mb-[40px]">
                           <MLAMLogo className="w-[300px] h-auto" />
                           <button
                              onClick={(e) => {
                                 e.currentTarget.focus();
                                 // signInWithProvider("credentials");
                              }}
                              className={
                                 "flex items-center text-[16px] bg-primary h-[30px] text-white px-2 rounded-[10px] font-header uppercase font-semibold tracking-wider " +
                                 "focus:outline-none focus:ring-[1.5px] focus:ring-secondary focus:ring-offset-[2.5px]"
                              }
                           >
                              <Enter />
                              <p className="px-2">Launch Demo</p>
                           </button>
                        </div>
                        <div className="flex gap-7 w-[840px] mx-auto mt-[110px] mb-[70px]">
                           <MoviePoster />
                           <div className="flex flex-col justify-between border-b border-b-secondary grow">
                              <p className="italic text-secondary">
                                 &quot;In a city where everyday routines
                                 transform into extraordinary escapades, one
                                 curious soul embarks on a whimsical quest to
                                 discover the magic hidden in mundane
                                 places.&quot;
                              </p>
                              <div className="font-header leading-snug text-secondary mb-5">
                                 <p className="font-medium text-[20px]">
                                    Similar Movie
                                 </p>
                                 <div className="text-[18px]">
                                    <p>
                                       <span className="font-medium">
                                          Amélie
                                       </span>{" "}
                                       Jean-Pierre Jeunet, 2001
                                    </p>
                                    <p>
                                       <span className="font-medium">
                                          Big Fish
                                       </span>{" "}
                                       Tim Burton, 2003
                                    </p>
                                    <p>
                                       <span className="font-medium">
                                          The Secret Life of Walter Mitty
                                       </span>{" "}
                                       Ben Stiller, 2013
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                           <p className="font-header font-medium w-[650px] text-[47px] leading-tight text-center mb-4">
                              Turn Your Daily Experience Into A Movie Franchise
                           </p>
                           <p className="w-[830px] text-center">
                              An AI-powered journal app that listens to your
                              daily experiences, turns them into engaging
                              movie-style stories, and offers supportive
                              insights to help you feel more grounded.
                           </p>
                        </div>
                     </div>
                     <button
                        className="pb-7 group w-fit mx-auto"
                        onClick={handleExploreFeatures}
                     >
                        <p className="uppercase text-center font-medium font-header tracking-wider pb-1 text-[16px]">
                           Explore Features
                        </p>
                        <NavArrowDown className="mx-auto animate-shake" />
                     </button>
                  </div>
                  <div ref={featuresRef} className="w-full pt-[60px]">
                     <div className="flex justify-between border-t border-t-secondary h-[500px] pt-[30px]">
                        <div className="flex flex-col">
                           <Popcorn className="size-[48px] text-secondary mb-3" />
                           <p className="w-[440px] text-[30px] font-header text-secondary font-medium leading-tight mb-6">
                              Not reliving, But Revisiting Your Day As An
                              Audience
                           </p>
                           <p className="w-[600px] leading-tight">
                              An AI-powered journal app that listens to your
                              daily experiences, turns them into engaging
                              movie-style stories, and offers supportive
                              insights to help you feel more grounded.
                           </p>
                        </div>
                        <div className="w-[400px] h-[480px] bg-black/10"></div>
                     </div>
                  </div>
                  <div className="w-full pt-[60px]">
                     <div className="flex justify-between border-t border-t-secondary h-[500px] pt-[30px]">
                        <div className="flex flex-col">
                           <Popcorn className="size-[48px] text-secondary mb-3" />
                           <p className="w-[440px] text-[30px] font-header text-secondary font-medium leading-tight mb-6">
                              Not reliving, But Revisiting Your Day As An
                              Audience
                           </p>
                           <p className="w-[600px] leading-tight">
                              An AI-powered journal app that listens to your
                              daily experiences, turns them into engaging
                              movie-style stories, and offers supportive
                              insights to help you feel more grounded.
                           </p>
                        </div>
                        <div className="w-[400px] h-[480px] bg-black/10"></div>
                     </div>
                  </div>
                  <div className="w-full pt-[60px]">
                     <div className="flex justify-between border-t border-t-secondary h-[500px] pt-[30px]">
                        <div className="flex flex-col">
                           <Popcorn className="size-[48px] text-secondary mb-3" />
                           <p className="w-[440px] text-[30px] font-header text-secondary font-medium leading-tight mb-6">
                              Not reliving, But Revisiting Your Day As An
                              Audience
                           </p>
                           <p className="w-[600px] leading-tight">
                              An AI-powered journal app that listens to your
                              daily experiences, turns them into engaging
                              movie-style stories, and offers supportive
                              insights to help you feel more grounded.
                           </p>
                        </div>
                        <div className="w-[400px] h-[480px] bg-black/10"></div>
                     </div>
                  </div>
                  <div className="border-t border-t-secondary pt-[30px] mb-[30px]">
                     <p className="text-center font-header font-medium text-secondary text-[35px] mb-[30px]">
                        Tech Stack
                     </p>
                     <div className="flex gap-[17px] mb-[30px]">
  <div className="flex-1 border border-secondary/50 rounded-xl h-auto overflow-hidden">
    <p className="px-3 py-1 text-[17px] text-primary bg-secondary/20 font-header font-medium text-center">
      Client & Server
    </p>
    <div className="border-b border-secondary/50" />
    <div className="flex flex-col gap-1 px-5 pt-3 py-4">
      <div className="leading-tight pt-1">
        <p className=" text-[30px]">
          Next.js
        </p>
      </div>
      
      <div className="leading-tight opacity-50">
        <p className="font-semibold">Libraries: </p>
        <p>Shadcn (Radix UI), Auth.js, Zod, Tailwind, Prisma</p>
      </div>
    </div>
  </div>

  <div className="flex-1 border border-secondary/50 rounded-xl h-auto overflow-hidden">
    <p className="px-3 py-1 text-[17px] text-primary bg-secondary/20 font-header font-medium text-center">
      Infrastructure
    </p>
    <div className="border-b border-secondary/50" />
    <div className="flex flex-col gap-1 px-5 pt-3 py-4">
      <div className="leading-tight pt-1">
        <p className=" text-[30px]">
          Railway
        </p>
      </div>
      
      <div className="leading-tight opacity-50">
        <p className="font-semibold">Services: </p>
        <p>Compute instance for server, PostgreSQL for database</p>
      </div>
    </div>
  </div>

  <div className="flex-1 border border-secondary/50 rounded-xl h-auto overflow-hidden">
    <p className="px-3 py-1 text-[17px] text-primary bg-secondary/20 font-header font-medium text-center">
      3rd Party API
    </p>
    <div className="border-b border-secondary/50" />
    <div className="flex flex-col gap-1 px-5 pt-3 py-4">
      <div className="leading-tight pt-1">
        <p className=" text-[30px]">
          OpenAI API
        </p>
      </div>
      
      <div className="leading-tight opacity-50">
        <p className="font-semibold">Usage: </p>
        <p>For weather-related raw information</p>
      </div>
    </div>
  </div>
</div>

                     <button
                        className={
                           "flex items-center text-md bg-secondary h-[34px] text-white mx-auto px-2 pr-3 gap-2 rounded-full " +
                           "focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-[2.5px]"
                        }
                        onClick={(e) => e.currentTarget.focus()}
                     >
                        <GithubLogo className="size-[20px]" />
                        <span className="text-[16px] font-header uppercase font-semibold tracking-wider">
                           See The Code
                        </span>
                     </button>
                  </div>
                  <div className="border-b border-b-secondary mb-[70px]" />
                  <div className="mb-[90px]">
                     <p className="text-center font-header font-medium text-secondary text-[35px] mb-[12px]">
                        Explore Full Features
                     </p>
                     <button
                        onClick={(e) => {
                           e.currentTarget.focus();
                           // signInWithProvider("credentials");
                        }}
                        className={
                           "flex items-center text-[16px] bg-primary h-[30px] text-white px-2 rounded-[10px] font-header uppercase font-semibold tracking-wider mx-auto " +
                           "focus:outline-none focus:ring-[1.5px] focus:ring-secondary focus:ring-offset-[2.5px]"
                        }
                     >
                        <Enter />
                        <p className="px-2">Launch Demo</p>
                     </button>
                     <div className="w-[440px] text-sm mx-auto opacity-60 pt-[50px]">
                        <p className="font-semibold">Disclaimers:</p>
                        <p className="pb-4">
                           Each demo session is generated personally for each
                           user. Users are free to explore features, try
                           generating their day as a movie, edit existing
                           records, or delete content during their session.
                        </p>
                        <p className="font-semibold">
                           All data will be automatically deleted 1 hour after
                           creation.
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-between items-center text-[14px] pt-1 px-4 w-full h-[39px]  bg-secondary font-medium rounded-tr-2xl rounded-tl-2xl">
                     <button className="flex gap-1 items-center">
                        <ArrowUpLeft className="size-4" />
                        <p>See More Of My Portfolio Projects</p>
                     </button>
                     <p>© 2025 Peerapol Glaajing, All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
         <Background />
      </div>
   );
};

export default Page;
