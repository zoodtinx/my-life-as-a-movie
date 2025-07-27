import React from "react";

const SettingsPage = () => {
   return (
      <div className="flex flex-col justify-between items-center w-full h-full px-20 pt-9 pb-0">
         <div className="flex flex-col grow gap-5 w-full justify-center items-center h-full">
            <div className="flex flex-col gap-5">
               <div className="flex items-baseline gap-10">
                  <p className="font-header font-medium text-[30px] w-[300px] text-right">
                     Result Options
                  </p>
                  <p>Summarization & Insights Tone</p>
               </div>
               <div className="flex items-baseline gap-10">
                  <p className="font-header font-medium text-[30px] w-[300px] text-right">
                     Personal Context
                  </p>
                  <p>Summarization & Insights Tone</p>
               </div>
               <div className="flex items-baseline gap-10">
                  <p className="font-header font-medium text-[30px] w-[300px] text-right">
                     Account Settings
                  </p>
                  <p>Summarization & Insights Tone</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SettingsPage;
