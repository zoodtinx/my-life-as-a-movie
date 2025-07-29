"use client";

import { cn } from "@/app/shared/utils";
import React, { useState } from "react";

export const PersonalContext = () => {
   const [isEditing, setIsEditing] = useState(false);
   const [text, setText] = useState("");
   const [tempText, setTempText] = useState(text);

   const handleSubmit = () => {
      setText(tempText);
      setIsEditing(false);
   };

   const handleDiscard = () => {
      setTempText(text);
      setIsEditing(false);
   };

   return (
      <div>
         {!isEditing ? (
            <button
               className="flex items-center h-[45px] font-header font-medium text-[20px]"
               onClick={() => setIsEditing(true)}
            >
               {text ? text : "Edit Personal Context"}
            </button>
         ) : (
            <div>
               <textarea
                  value={tempText}
                  onChange={(e) => setTempText(e.target.value)}
                  className={cn(
                     "border outline-primary border-primary/20 resize-none rounded-[10px] px-3 py-2 text-base",
                     "w-[450px]"
                  )}
               />
               <div className="flex justify-between font-header font-medium">
                  <button
                     className="border px-2 rounded-[7px] hover:bg-primary/10 bg-transparent transition-colors"
                     onClick={handleDiscard}
                  >
                     Discard
                  </button>
                  <button className="border px-2 rounded-[7px] hover:bg-primary/10 bg-transparent transition-colors">
                     Submit
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};
