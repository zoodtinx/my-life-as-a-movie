import 'dotenv/config';
import { generateMovie } from "@/app/shared/lib/ai/gpt-api";

const mockCreativeFeelGoodData = {
   userId: "user_artflow",
   setting: "digital",
   archetype: "rebel",
   supportingCast: ["online", "friends"],
   plotDevice: "insight",
   villain: ["distraction"], // minor, defeated
   unexpected: false,
   cinematography: ["neon", "romance"],
   dramaticIntensity: 61,
   pacing: 58,
   trailer: ["creativity", "career", "growth"],
   soundtrack: "electronic",
   closingLine: "It just clicked—and the ideas wouldn’t stop coming."
 };
 
 generateMovie(mockCreativeFeelGoodData).then((result) => {
  console.log("getMovieSummary result:", result);
}).catch((err) => {
  console.error("getMovieSummary error:", err);
});