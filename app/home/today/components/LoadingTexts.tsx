"use client";

import { useState, useEffect } from "react";

const messages = [
   "Preparing set",
   "Plugging in lighting", 
   "Ironing costume",
   "Checking cameras",
   "Testing mics",
   "Touching up makeup",
   "Rolling playback",
   "Marking positions",
   "Prepping next scene",
   "Charging batteries",
   "Organizing props",
   "Reviewing notes"
 ];

export const LoadingTexts = () => {
   const [index, setIndex] = useState(0);
   const [displayed, setDisplayed] = useState("");

   useEffect(() => {
      let charIndex = 0;
      const message = messages[index];

      const typing = setInterval(() => {
         setDisplayed(message.slice(0, charIndex + 1));
         charIndex++;
         if (charIndex === message.length) clearInterval(typing);
      }, 100);

      const switchMessage = setTimeout(() => {
         setIndex((prev) => (prev + 1) % messages.length);
         setDisplayed("");
      }, message.length * 100 + 500);

      return () => {
         clearInterval(typing);
         clearTimeout(switchMessage);
      };
   }, [index]);

   return (
      <div className="loader text-[25px] h-[35px]">
         {displayed}
      </div>
   );
};
