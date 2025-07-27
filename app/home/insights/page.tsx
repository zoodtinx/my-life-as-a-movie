import { ScrollArea } from "@/app/shared/components/primitives/ScrollArea";
import React from "react";

const InsightsPage = () => {
   return (
      <ScrollArea className="h-[calc(100vh-80px)]">
         <div className="flex flex-col justify-between items-center w-full h-full px-20 py-[90px]">
            <div className="flex flex-col items-center grow gap-10 w-full">
               <div className="text-[40px] font-header font-medium leading-snug">
                  <p className="text-center w-[650px]">
                     {/* [&nbsp;&nbsp;if this week were a franchise&nbsp;&nbsp;] */}
                     "Highest high and a mild low, like an enjoyable
                     rollercoaster"
                  </p>
               </div>
               <div className="text-[20px] leading-loose w-[1000px]">
                  If this week were a movie franchise, it would be called “The
                  Deadline Chronicles”, a sprawling cinematic universe of highs,
                  lows, and plot twists no one saw coming. The saga opens with
                  Rise of the Monday Warriors, a hopeful origin story where
                  optimism and ambition blaze across the screen, our protagonist
                  armed with color-coded plans and an unshakable belief that
                  “this time, it’s going to be different.” Then comes The
                  Revenge of Wednesday, a gritty sequel with a darker
                  tone—fatigue creeps in, side characters drop out, and the
                  looming villain, Procrastination, begins to dominate the
                  storyline. By Thursday, we hit The Great Distraction, a
                  spin-off filled with subplots nobody asked for, yet somehow
                  integral to the franchise’s arc. The final installment, Escape
                  from the Inbox, is an explosive finale packed with urgent
                  emails, frantic multitasking, and one last desperate fight for
                  freedom before the credits roll on Friday night. And just when
                  you think the story’s over, a post-credit teaser whispers of
                  the inevitable reboot: The Fresh Start Saga, coming next
                  Monday.
               </div>
               <div className="text-[20px] leading-loose w-[1000px]">
                  <div className="flex gap-4 items-baseline font-header text-[25px]">
                     <p className="font-medium">Most Frequent Genre:</p>
                     <p className="">Romantic Comedy</p>
                  </div>
               </div>
               <div className="flex flex-col text-[20px] leading-loose w-[1000px]">
                  <div className="flex gap-4 items-baseline font-header text-[25px]">
                     <p className="font-medium">Most Frequent Genre:</p>
                     <p className="">Romantic Comedy</p>
                  </div>
                  <p>
                     If this week were a movie franchise, it would be called
                     “The Deadline Chronicles”, a sprawling cinematic universe
                     of highs, lows, and plot twists no one saw coming. The saga
                     opens with Rise of the Monday Warriors, a hopeful origin
                     story where optimism and ambition blaze across the screen,
                     our protagonist armed with color-coded plans and an
                     unshakable belief that “this time, it’s going to be
                     different.” Then comes The Revenge of Wednesday, a gritty
                     sequel with a darker tone—fatigue creeps in, side
                     characters drop out, and the looming villain,
                     Procrastination, begins to dominate the storyline. By
                     Thursday, we hit The Great Distraction, a spin-off filled
                     with subplots nobody asked for, yet somehow integral to the
                     franchise’s arc. The final installment, Escape from the
                     Inbox, is an explosive finale packed with urgent emails,
                     frantic multitasking, and one last desperate fight for
                     freedom before the credits roll on Friday night. And just
                     when you think the story’s over, a post-credit teaser
                     whispers of the inevitable reboot: The Fresh Start Saga,
                     coming next Monday.
                  </p>
               </div>
            </div>
         </div>
      </ScrollArea>
   );
};

export default InsightsPage;
