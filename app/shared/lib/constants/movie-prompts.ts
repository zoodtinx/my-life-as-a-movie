type InputType = "text" | "select" | "multi-select" | "slider" | "yesno";

export type Option = {
   value: string;
   label: string;
   description?: string;
};

export interface Prompt {
   fieldName: MovieFormFieldName;
   question: {
      head: string;
      description: string;
   };
   type: InputType;
   options?: Option[];
}

export type MovieFormFieldName =
   | "mainQuest"
   | "setting"
   | "archetype"
   | "villain"
   | "unexpected"
   | "dramaLevel"
   | "lightingTone"
   | "pacing"
   | "secondTake"
   | "finalLine"
   | "endCreditsGenre";

export const movieFormQuestions: Prompt[] = [
   {
      fieldName: "mainQuest",
      question: {
         head: "What was the main quest or mission today?",
         description:
            "If your day were a movie, what goal or challenge would the main character (you) be trying to accomplish? Think of this as your “plotline” — even small tasks count!",
      },
      type: "text",
   },
   {
      fieldName: "setting",
      question: {
         head: "Where does today’s movie mostly take place?",
         description:
            "Picture your day as a film: what was the main setting? Were you in the workplace, at home, on the move, or somewhere unique? This helps set the stage for your story.",
      },
      type: "select",
      options: [
         {
            value: "home",
            label: "Home",
            description: "A cozy, familiar space.",
         },
         {
            value: "office",
            label: "Office",
            description: "Work-related environment.",
         },
         {
            value: "outside",
            label: "Outdoors",
            description: "In transit or outside.",
         },
         {
            value: "other",
            label: "Other",
            description: "Somewhere else entirely.",
         },
      ],
   },
   {
      fieldName: "archetype",
      question: {
         head: "If you were a character today, what archetype fits?",
         description:
            "Imagine yourself as a classic movie character. Were you the hero, the sidekick, the rebel, the thinker, or someone else entirely? This reflects how you showed up in your own narrative.",
      },
      type: "select",
      options: [
         {
            value: "hero",
            label: "Hero",
            description: "Took the lead, solved problems.",
         },
         {
            value: "rebel",
            label: "Rebel",
            description: "Went against the grain.",
         },
         {
            value: "sidekick",
            label: "Sidekick",
            description: "Supported someone else.",
         },
         {
            value: "thinker",
            label: "Thinker",
            description: "Observed, analyzed, reflected.",
         },
      ],
   },
   {
      fieldName: "villain",
      question: {
         head: "What was the villain’s name in today’s story?",
         description:
            "Every story has tension. What obstacle or challenge played the “villain” in your day? Maybe it was stress, distraction, a person, or even a mood.",
      },
      type: "select",
      options: [
         {
            value: "stress",
            label: "Stress",
            description: "Overwhelming pressure.",
         },
         {
            value: "procrastination",
            label: "Procrastination",
            description: "Kept delaying tasks.",
         },
         {
            value: "distraction",
            label: "Distraction",
            description: "Lost focus.",
         },
         {
            value: "fatigue",
            label: "Fatigue",
            description: "Low energy or exhaustion.",
         },
      ],
   },
   {
      fieldName: "unexpected",
      question: {
         head: "Did something unexpected happen?",
         description:
            "Was there a plot twist? A surprise scene you didn’t plan for — good or bad? This is where the unexpected changes in your script show up.",
      },
      type: "yesno",
   },
   {
      fieldName: "dramaLevel",
      question: {
         head: "How dramatic was today’s movie?",
         description:
            "On a scale from calm to chaos, how intense was today? Think in terms of emotional highs, sudden turns, or how reactive your day felt.",
      },
      type: "slider",
   },
   {
      fieldName: "lightingTone",
      question: {
         head: "What color was today’s lighting (tone)?",
         description:
            "In cinematography, lighting sets the mood. If your day had a color filter, what would it be? A warm glow, cold blue, or something more surreal?",
      },
      type: "select",
      options: [
         {
            value: "warm",
            label: "Warm",
            description: "Golden, hopeful, sunny.",
         },
         {
            value: "cool",
            label: "Cool",
            description: "Blueish, calm, detached.",
         },
         {
            value: "dramatic",
            label: "Dramatic",
            description: "High contrast or moody tones.",
         },
         {
            value: "surreal",
            label: "Surreal",
            description: "Strange, dreamy, unnatural.",
         },
      ],
   },
   {
      fieldName: "pacing",
      question: {
         head: "What is the pacing of today?",
         description:
            "Was your day a slow burn or a nonstop action sequence? This slider captures how fast (or slow) time felt, not how much got done.",
      },
      type: "slider",
   },
   {
      fieldName: "secondTake",
      question: {
         head: "Would you take a second take for some of today’s scenes?",
         description:
            "If you could reshoot any moment from today, would you? This is about reflection — moments you might want to redo, rethink, or perfect.",
      },
      type: "yesno",
   },
   {
      fieldName: "finalLine",
      question: {
         head: "What would be the final line of dialogue in today’s movie?",
         description:
            "Imagine your day ending with one powerful line — clever, poetic, sarcastic, or simple. What quote sums it all up?",
      },
      type: "text",
   },
   {
      fieldName: "endCreditsGenre",
      question: {
         head: "What’s the end credits song genre?",
         description:
            "As the story fades to black, what genre plays in the background? This helps reflect your current vibe or emotional “aftertaste.”",
      },
      type: "select",
      options: [
         {
            value: "pop",
            label: "Pop",
            description: "Uplifting or catchy mood.",
         },
         {
            value: "lofi",
            label: "Lo-fi",
            description: "Relaxed and introspective.",
         },
         { value: "rock", label: "Rock", description: "Bold and energetic." },
         {
            value: "ambient",
            label: "Ambient",
            description: "Soft and atmospheric.",
         },
      ],
   },
];
