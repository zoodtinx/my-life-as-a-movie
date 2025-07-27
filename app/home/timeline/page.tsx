import React from "react";

const TimeLinePage = () => {
   const movies = []
   
   return (
      <div className="flex flex-col justify-between items-center w-full h-full px-20 pt-9 pb-0">
         <div className="flex flex-col grow gap-12">
            <MockRow />
            <MockRow />
            <MockRow />
            <MockRow />
         </div>
      </div>
   );
};

const MockRow = () => {
   return (
      <div className="w-fix flex gap-4">
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
         <div className="w-[170px] h-[240px] bg-gradient-to-b from-romantic-from to-romantic-to shadow-md"></div>
      </div>
   );
};

export default TimeLinePage;
