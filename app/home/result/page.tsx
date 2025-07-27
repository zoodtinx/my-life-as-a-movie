import prisma from "@/app/shared/lib/db/prisma";
import { Footer } from "@/app/home/result/components/Footer";
import { format } from "date-fns";
import { MoviePoster } from "@/app/shared/components/MoviePoster";

const ResultPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {

   const id = searchParams.id

   if (!id) {
      return 'Unexpected Error'
   }

   console.log("Movie id from param:", id);

   const movieResult = await prisma.movie.findUnique({
      where: {
         id: id as string
      }
   })

   if (!movieResult) {
      return 'Unexpected Error'
   }

   const formattedDate = format(movieResult.date, "do MMMM"); // "14th July"

   return (
      <div className="flex flex-col justify-between items-center w-full h-full pb-9">
         <div></div>
         <div className="flex flex-col justify-between w-[1080px] min-h-[640px]">
            <div className="flex flex-col gap-5">
               <p className="font-medium text-[48px] text-center">
                  Your {formattedDate} is
               </p>
               <div className="leading-tight flex w-full gap-11">
                  <MoviePoster movieData={movieResult} size="large" />
                  <div className="flex flex-col gap-6 grow leading-normal">
                     <div className="flex gap-3">
                        <p className="font-header font-medium text-[25px]">
                           Genre
                        </p>
                        <p className="font-header text-[25px]">
                           {movieResult.genre}
                        </p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Logline
                        </p>
                        <p>&quot;{movieResult.logline}&quot;</p>
                     </div>
                     <div>
                        <p className="font-header font-medium text-[25px]">
                           Review
                        </p>
                        <p>&quot;{movieResult.review}&quot;</p>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
         <div></div>
      </div>
   );
};

export default ResultPage;
