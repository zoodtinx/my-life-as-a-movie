"use client";

import { Suspense, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { MLAMLogo } from "@/app/shared/icons/Logo";
import { ArrowUpLeft, ArrowDown as NavArrowDown } from "phosphor-react";
import { GithubLogo } from "@/app/welcome/components/Github";
import { Enter } from "@/app/welcome/components/Enter";
import { Background } from "@/app/home/components/Background";
import { MoviePoster } from "@/app/welcome/components/Poster";
import Image from "next/image";
import SvgPinkHeartEmoji from "@/app/welcome/components/Emoji/PinkHeartEmoji";
import SvgHandshakeEmoji from "@/app/welcome/components/Emoji/HandshakeEmoji";
import SvgFilmEmoji from "@/app/welcome/components/Emoji/FilmEmoji";
import SvgSuperheroEmoji from "@/app/welcome/components/Emoji/SuperheroEmoji";
import SvgFistEmoji from "@/app/welcome/components/Emoji/FistEmoji";
import SvgSparkleEmoji from "@/app/welcome/components/Emoji/SparkleEmoji";
import SvgPopCornEmoji from "@/app/welcome/components/Emoji/PopCornEmoji";
import SvgPictureFrameEmojiU1F5Bc from "@/app/welcome/components/Emoji/PictureFrameEmojiU1F5Bc";
import SvgWorkingEmoji from "@/app/welcome/components/Emoji/WorkingEmoji";
import SvgGlassEmoji from "@/app/welcome/components/Emoji/GlassEmoji";
import SvgTreeEmoji from "@/app/welcome/components/Emoji/TreeEmoji";
import { cn } from "@/app/shared/utils";

const Page = () => {
   const [isLoading, setisLoading] = useState(false);
   const featuresRef = useRef<HTMLDivElement>(null);

   if (isLoading) {
      return (
         <div className="w-full h-screen flex justify-center items-center bg-background text-primary">
            <div className="w-fit overflow-hidden z-10">
               <MLAMLogo className="animate-slide overflow-hidden animate-pulse" />
            </div>
            <Suspense>
               <Background />
            </Suspense>
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

   return (
      <div
         className={cn(
            "w-full h-screen flex justify-center items-center text-primary"
         )}
      >
         <div className="w-full h-full z-10">
            <div className="w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
               <div className="flex flex-col gap-2 w-full lg:w-[1200px] px-3 sm:px-4 lg:px-10 xl:px-0">
                  <div className="pt-2 sm:pt-3 lg:pt-4 xl:pt-5 h-screen w-full flex flex-col justify-between">
                     <div className="flex justify-between items-center lg:mb-0">
                        <MLAMLogo className="w-[180px] lg:w-[210px] text-secondary" />
                        <button
                           onClick={(e) => {
                              e.currentTarget.focus();
                              signInWithProvider("credentials");
                           }}
                           className={
                              "flex items-center text-sm lg:text-[14px] bg-secondary h-[25px] text-primary px-2 pr-1 rounded-[7px] font-header uppercase font-semibold tracking-widest " +
                              "focus:outline-none focus:ring-[1.5px] focus:ring-secondary focus:ring-offset-[2.5px]"
                           }
                        >
                           <Enter className="hidden md:block size-5" />
                           <p className="px-0 md:px-2">Launch Demo</p>
                        </button>
                     </div>
                     <div className="grow flex flex-col justify-center animate-fade-in  ">
                        <div className="flex justify-center gap-6 w-full lg:w-[650px] mx-auto mb-[30px] xl:mb-[60px]">
                           <MoviePoster />
                           <div className="hidden lg:flex flex-col justify-between border-b border-b-primary/70 opacity-70">
                              <p className="italic text-sm">
                                 &quot;In a city where everyday routines
                                 transform into extraordinary escapades, one
                                 curious soul embarks on a whimsical quest to
                                 discover the magic hidden in mundane
                                 places.&quot;
                              </p>
                              <div className="font-header leading-snug mb-2 text-sm">
                                 <p className="font-medium text-base">
                                    Similar Movie
                                 </p>
                                 <div className="">
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
                           <div
                              className={cn(
                                 "font-header font-normal tracking-[0.5px] text-center mb-3 ",
                                 "text-[24px] leading-tight",
                                 "sm:text-[40px]",
                                 "lg:w-[760px] lg:text-2xl lg:leading-16 lg:mb-6",
                                 "xl:text-[46px]"
                              )}
                           >
                              <div className="flex gap-1 justify-center mb-2">
                                 <SvgPinkHeartEmoji className="size-6 sm:size-9 lg:size-12" />
                                 <SvgHandshakeEmoji className="size-6 sm:size-9 lg:size-12" />
                                 <SvgFilmEmoji className="size-6 sm:size-9 lg:size-12" />
                              </div>
                              <p className="font-medium leading-none mb-1">
                                 Mood tracking meets movies
                              </p>
                              <p className="leading-none">
                                 What genre is your day?
                              </p>
                           </div>
                           <p className="w-[90%] md:w-3/4 lg:w-[850px] text-center text-sm sm:text-base">
                              Transform your daily diary into a movie with a few
                              simple questions. Watch your day become cinematic
                              scenes, track your mood through film genres, and
                              get personalized advice that works.
                           </p>
                        </div>
                     </div>
                     <button
                        className="pb-3 group w-fit mx-auto text-white shrink-0"
                        onClick={handleExploreFeatures}
                     >
                        <p className="uppercase text-center font-medium font-header tracking-wider pb-1 text-sm">
                           Explore Features
                        </p>
                        <NavArrowDown className="mx-auto animate-shake" />
                     </button>
                  </div>
                  <div className="sm:px-7 md:px-7 lg:px-0">
                     <div ref={featuresRef} className="w-full pt-[60px]">
                        <div className="flex flex-col md:flex-row justify-between border-t border-t-secondary md:h-[500px] pt-[30px] sm:items-center md:items-start">
                           <div className="flex flex-col mb-6 md:mb-0">
                              <div className="flex gap-1 mb-2">
                                 <SvgSuperheroEmoji className="size-8" />
                                 <SvgFistEmoji className="size-8" />
                                 <SvgSparkleEmoji className="size-8" />
                              </div>
                              <p className="md:w-[440px] text-xl font-header text-primary font-medium leading-8 mb-3 md:mb-5">
                                 You, <br />
                                 The Main Character
                              </p>
                              <p className="md:w-[600px] leading-tight opacity-70 text-sm sm:text-base">
                                 Step back and see your day through a
                                 director&apos;s lens. Answer movie-themed
                                 questions that help you objectively reflect on
                                 your experiences without the emotional
                                 weight—because sometimes the best way to
                                 understand your story is to view yourself as the
                                 protagonist of your own film.
                              </p>
                           </div>
                           <div className="sm:w-2/3 md:w-[385px]">
                              <Image
                                 width={400}
                                 height={400}
                                 className="w-full h-ull"
                                 src="https://ik.imagekit.io/freelanceman/mlam-landingpage/mlam-feat1.webp?updatedAt=1755573972717"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="w-full pt-[60px]">
                        <div className="flex flex-col md:flex-row justify-between border-t border-t-secondary md:h-[500px] pt-[30px] sm:items-center md:items-start">
                           <div className="flex flex-col mb-6 md:mb-0">
                              <div className="flex gap-1 mb-2">
                                 <SvgFilmEmoji className="size-8" />
                                 <SvgPopCornEmoji className="size-8" />
                                 <SvgPictureFrameEmojiU1F5Bc className="size-8" />
                              </div>
                              <p className="md:w-[440px] text-xl font-header text-primary font-medium leading-8 mb-3 md:mb-5">
                                 Every Day Deserves <br />a Movie Poster
                              </p>
                              <p className="md:w-[600px] leading-tight opacity-70 text-sm sm:text-base">
                                 There&apos;s no such thing as a bad day—just
                                 different genres. Whether today was an
                                 action-packed thriller, a quiet indie drama, or a
                                 romantic comedy, your real experiences transform
                                 into an imaginative film story that makes every
                                 single day worth remembering and rewatching.
                              </p>
                           </div>
                           <div className="sm:w-2/3 md:w-[355px]">
                              <Image
                                 width={400}
                                 height={400}
                                 className="w-full h-full"
                                 src="https://ik.imagekit.io/freelanceman/mlam-landingpage/mlam-feat2.webp?updatedAt=1755573972757"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="w-full pt-[60px]">
                        <div className="flex flex-col md:flex-row justify-between border-t border-t-secondary md:h-[500px] pt-[30px] sm:items-center md:items-start">
                           <div className="flex flex-col mb-6 md:mb-0">
                              <div className="flex gap-1 mb-2">
                                 <SvgWorkingEmoji className="size-8" />
                                 <SvgGlassEmoji className="size-8" />
                                 <SvgTreeEmoji className="size-8" />
                              </div>
                              <p className="md:w-[440px] text-xl font-header text-primary font-medium leading-8 mb-3 md:mb-5">
                                 From Daily Scenes <br />
                                 to Life Insights
                              </p>
                              <p className="md:w-[600px] leading-tight opacity-70 text-sm sm:text-base">
                                 More than just a fun gimmick. This is your daily
                                 journal reimagined. Log each day as its own film
                                 while getting personalized mental health insights
                                 that help you live your story better. Because when
                                 you see patterns in your personal cinema, you can
                                 start directing a better tomorrow.
                              </p>
                           </div>
                           <div className="sm:w-2/3 md:w-[395px]">
                              <Image
                                 width={400}
                                 height={400}
                                 className="w-full h-full"
                                 src="https://ik.imagekit.io/freelanceman/mlam-landingpage/mlam-feat3.webp?updatedAt=1755573972784"
                                 alt=""
                              />
                           </div>
                        </div>
                     </div>
                     <div className="border-t border-t-secondary mt-14  pt-[30px] mb-[30px]">
                        <p className="text-center font-header font-medium text-primary text-xl mb-[30px]">
                           Tech Stack
                        </p>
                        <div className="flex flex-col md:flex-row gap-[17px] mb-[30px]">
                           <div className="flex-1 border border-secondary/50 rounded-xl h-auto overflow-hidden">
                              <p className="px-3 py-1 text-[17px] text-primary bg-secondary/20 font-header font-medium text-center">
                                 Client & Server
                              </p>
                              <div className="border-b border-secondary/50" />
                              <div className="flex flex-col gap-1 px-5 pt-3 py-4">
                                 <div className="leading-tight pt-1">
                                    <p className=" text-xl">Next.js</p>
                                 </div>
                                 <div className="leading-tight opacity-70">
                                    <p className="font-semibold">Libraries: </p>
                                    <p>
                                       Shadcn (Radix UI), Auth.js, Zod, Tailwind,
                                       Prisma
                                    </p>
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
                                    <p className=" text-xl">Railway</p>
                                 </div>
                                 <div className="leading-tight opacity-70">
                                    <p className="font-semibold">Services: </p>
                                    <p>
                                       Compute instance for server, PostgreSQL for
                                       database
                                    </p>
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
                                    <p className=" text-xl">OpenAI API</p>
                                 </div>
                                 <div className="leading-tight opacity-70">
                                    <p className="font-semibold">Usage: </p>
                                    <p>
                                       For interpreting user input into a movie &
                                       generate weekly mental health insights
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <button
                           className={
                              "flex items-center text-md bg-secondary h-[34px] text-white mx-auto px-2 pr-3 gap-2 rounded-full " +
                              "focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-[2.5px]"
                           }
                           onClick={(e) => {
                              e.currentTarget.focus();
                              window.open(
                                 "https://github.com/zoodtinx/my-life-as-a-movie",
                                 "_blank",
                                 "noopener,noreferrer"
                              );
                           }}
                        >
                           <GithubLogo className="size-[20px]" />
                           <span className="text-[16px] font-header uppercase font-semibold tracking-wider">
                              See The Code
                           </span>
                        </button>
                     </div>
                     <div className="border-b border-b-secondary mb-[70px]" />
                     <div className="mb-[90px]">
                        <p className="text-center font-header font-medium text-primary text-xl mb-[12px]">
                           Explore Full Features
                        </p>
                        <button
                           onClick={(e) => {
                              e.currentTarget.focus();
                              signInWithProvider("credentials");
                           }}
                           className={
                              "flex items-center text-lg bg-secondary h-[36px] text-primary px-[7px] rounded-[10px] font-header uppercase font-semibold tracking-widest  mb-2 mx-auto " +
                              "focus:outline-none focus:ring-[1.5px] focus:ring-secondary focus:ring-offset-[2.5px]"
                           }
                        >
                           <Enter className="size-[30px]" />
                           <p className="px-3">Launch Demo</p>
                        </button>
                        <div className="md:w-[440px] text-sm mx-auto pt-[50px]">
                           <p className="pb-4">
                              Each demo session is generated personally for each
                              user. Users are free to explore features, try
                              generating their day as a movie, edit existing
                              records, or delete content during their session.
                           </p>
                           <p className="font-semibold">
                              All data will be automatically deleted 2 hours after
                              creation.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div
                     className={[
                        "flex justify-between items-center text-[14px] pt-1 px-4 w-full h-[39px] bg-secondary font-medium",
                        "rounded-tr-2xl rounded-tl-2xl",
                        "md:rounded-br-none md:rounded-bl-none",
                        "rounded-bl-2xl rounded-br-2xl"
                     ].join(" ")}
                  >
                     <a
                        href="https://www.peerapol.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1 items-center"
                     >
                        <ArrowUpLeft className="size-4" />
                        <p>See More Of My Portfolio Projects</p>
                     </a>
                     <p className="hidden md:block">
                        © 2025 Peerapol Glaajing, All Rights Reserved.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <Suspense>
            <Background />
         </Suspense>
      </div>
   );
};

export default Page;
