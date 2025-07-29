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
   | "setting"
   | "archetype"
   | "supportingCast"
   | "plotDevice"
   | "villain"
   | "unexpected"
   | "cinematography"
   | "dramaticIntensity"
   | "pacing"
   | "trailer"
   | "soundtrack"
   | "closingLine";

export const movieFormQuestions: Prompt[] = [
   {
      fieldName: "setting",
      question: {
         head: "Where did most of today's story take place?",
         description:
            "Think about where you spent most of your day and what environment shaped your mood and activities. Consider both the physical location and the atmosphere it created.",
      },
      type: "select",
      options: [
         {
            value: "home",
            label: "Home Base",
            description: "Your personal sanctuary and comfort zone",
         },
         {
            value: "office",
            label: "The Office",
            description: "Professional battleground of meetings and deadlines",
         },
         {
            value: "outdoors",
            label: "Great Outdoors",
            description:
               "Under open skies, in nature, or navigating city streets",
         },
         {
            value: "social",
            label: "Social Hub",
            description: "Restaurants, events, or gathering places with others",
         },
         {
            value: "travel",
            label: "On the Move",
            description: "Cars, trains, planes, or constantly traveling",
         },
         {
            value: "digital",
            label: "Digital Realm",
            description: "Virtual meetings, online spaces, social media worlds",
         },
         {
            value: "unknown",
            label: "Uncharted Territory",
            description: "Somewhere completely new or unusual",
         },
      ],
   },
   {
      fieldName: "archetype",
      question: {
         head: "What kind of character were you today?",
         description:
            "Reflect on the role you naturally fell into today. Were you leading and solving problems, supporting others, exploring new things, or something else? Think about your dominant energy and approach.",
      },
      type: "select",
      options: [
         {
            value: "protagonist",
            label: "The Protagonist",
            description:
               "Taking the lead, facing challenges head-on, driving action forward",
         },
         {
            value: "guide",
            label: "The Mentor",
            description:
               "Offering wisdom, teaching, and helping others navigate their paths",
         },
         {
            value: "adventurer",
            label: "The Explorer",
            description:
               "Seeking new experiences, embracing the unknown with curiosity",
         },
         {
            value: "nurturer",
            label: "The Caregiver",
            description:
               "Caring for others, providing comfort and emotional support",
         },
         {
            value: "rebel",
            label: "The Rebel",
            description:
               "Challenging conventions, thinking outside the box, disrupting the status quo",
         },
         {
            value: "observer",
            label: "The Sage",
            description:
               "Watching, learning, reflecting deeply on life's complexities",
         },
         {
            value: "fighter",
            label: "The Survivor",
            description:
               "Enduring hardships, pushing through obstacles with determination",
         },
      ],
   },
   {
      fieldName: "supportingCast",
      question: {
         head: "Who were the main people in your story today?",
         description:
            "Consider all the people who played meaningful roles in your day - through direct interaction, digital communication, or just their presence. Include both planned and unexpected encounters.",
      },
      type: "multi-select",
      options: [
         {
            value: "innerCircle",
            label: "Family Members",
            description:
               "Close family members who shaped your emotional landscape",
         },
         {
            value: "friends",
            label: "Inner Circle",
            description:
               "Friends who brought joy, support, or meaningful connection",
         },
         {
            value: "coworkers",
            label: "Professional Ensemble",
            description:
               "Coworkers, clients, or business contacts in work scenarios",
         },
         {
            value: "strangers",
            label: "Unexpected Cameos",
            description:
               "Strangers or acquaintances who made a surprising impact",
         },
         {
            value: "pets",
            label: "Furry Co-stars",
            description:
               "Beloved pets who provided comfort and unconditional love",
         },
         {
            value: "online",
            label: "Virtual Community",
            description:
               "Online friends, social media connections",
         },
         {
            value: "crowd",
            label: "Background Extras",
            description:
               "Groups, crowds, or public interactions that set the scene",
         },
         {
            value: "solo",
            label: "Solo Act",
            description:
               "A day of solitude, self-reflection, and personal time",
         },
      ],
   },
   {
      fieldName: "plotDevice",
      question: {
         head: "What motivated you today?",
         description:
            "Think about what created momentum in your day - what moved you from one scene to the next. This could be a deadline, a conversation, a routine, or an internal motivation that shaped how your day unfolded.",
      },
      type: "select",
      options: [
         {
            value: "deadline",
            label: "The Deadline",
            description:
               "Urgent deadlines or time pressure that drove your actions",
         },
         {
            value: "insight",
            label: "The Eureka Moment",
            description:
               "New understanding, insight, or information that illuminated your path",
         },
         {
            value: "challenge",
            label: "The Challenge",
            description:
               "A specific problem or challenge that demanded your attention",
         },
         {
            value: "routine",
            label: "The Routine",
            description:
               "Familiar patterns and habits that provided structure and flow",
         },
         {
            value: "newPath",
            label: "The New Path",
            description:
               "A new possibility or chance that beckoned you forward",
         },
         {
            value: "memory",
            label: "The Flashback",
            description:
               "Past experiences or memories that influenced your present choices",
         },
         {
            value: "goal",
            label: "The Dream",
            description:
               "Your goals, aspirations, or vision guiding your decisions",
         },
      ],
   },
   {
      fieldName: "villain",
      question: {
         head: "What was today's main antagonist?",
         description:
            "Think about what created the biggest obstacles or challenges in your day. This could be external circumstances, internal struggles, or anything that drained your energy or prevented you from feeling your best.",
      },
      type: "multi-select",
      options: [
         {
            value: "stress",
            label: "The Pressure",
            description:
               "Overwhelming stress and tension from multiple sources",
         },
         {
            value: "delay",
            label: "The Procrastination",
            description: "Procrastination that kept you from important tasks",
         },
         {
            value: "anxiety",
            label: "The Worry",
            description:
               "Anxiety and fear that clouded your judgment and peace",
         },
         {
            value: "perfectionism",
            label: "The Perfectionism",
            description: "Paralysis or frustration from trying to make things flawless",
          },
         {
            value: "distraction",
            label: "The Low Attention Span",
            description: "Distractions that scattered your focus and attention",
         },
         {
            value: "selfDoubt",
            label: "The Inner Critic",
            description:
               "Self-doubt and negative self-talk undermining your confidence",
         },
         {
            value: "burnout",
            label: "The Burning Out",
            description:
            "Running on empty, pushing through exhaustion while craving rest",
         },
         {
            value: "sickness",
            label: "The Weakness",
            description: "Physical illness or aches that slowed you down and dimmed your strength",
          },
         {
            value: "people",
            label: "The People",
            description: "Challenging personalities or interpersonal conflicts",
         },
         {
            value: "boredom",
            label: "The Boredom",
            description:
               "Routine, or mundane tasks that dulled your spirit",
         },
      ],
   },
   {
      fieldName: "unexpected",
      question: {
         head: "Is there any plot twist?",
         description:
            "Reflect on whether anything caught you off guard today - a change of plans, unexpected call, surprise encounter, or simply something that didn't go as originally expected.",
      },
      type: "yesno",
   },
   {
      fieldName: "cinematography",
      question: {
         head: "What color visual style would capture today best?",
         description:
            "Think about the overall mood and atmosphere of your day. Consider translating your feelings into visual metaphors - was it bright and hopeful, moody and dramatic, soft and dreamy, or raw and realistic?",
      },
      type: "multi-select",
      options: [
         {
            value: "golden",
            label: "Magic Hour",
            description: "Warm, hopeful, radiating positivity and contentment",
         },
         {
            value: "blue",
            label: "Blue Hour",
            description: "Cool, calm, reflective with touches of melancholy",
         },
         {
            value: "noir",
            label: "Noir Drama",
            description:
               "High contrast emotions, intense feelings, dramatic moments",
         },
         {
            value: "romance",
            label: "Soft Focus Romance",
            description: "Dreamy, gentle, filled with beauty and tenderness",
         },
         {
            value: "documentary",
            label: "Raw Documentary",
            description:
               "Unfiltered reality, authentic experiences, no pretense",
         },
         {
            value: "neon",
            label: "Electric Neon",
            description: "Vibrant, dynamic, buzzing with modern excitement",
         },
         {
            value: "overcast",
            label: "Overcast",
            description: "Muted, subdued, perfect for quiet contemplation",
         },
         {
            value: "surreal",
            label: "Surreal Dreamscape",
            description: "Strange, otherworldly, defying normal expectations",
         },
      ],
   },
   {
      fieldName: "dramaticIntensity",
      question: {
         head: "How would you rate the action level?",
         description:
            "Consider the overall energy and intensity of your day. Was it filled with high-stakes moments and lots of activity, or was it gentle with quiet, peaceful progression?",
      },
      type: "slider",
      options: [
         {
            value: "career",
            label: "Peaceful",
            description:
               "Professional accomplishments, successful meetings, work breakthroughs",
         },
         {
            value: "growth",
            label: "Chaotic",
            description:
               "Moments of learning, self-discovery, or important realizations",
         }]
   },
   {
      fieldName: "pacing",
      question: {
         head: "What is the pacing of today's movie?",
         description:
            "Reflect on the rhythm and flow of your day. Did time fly by in a blur of activity, or did you have the luxury of savoring moments? Were you rushing or able to be present and mindful?",
      },
      type: "slider",
      options: [
         {
            value: "career",
            label: "Slow Life",
            description:
               "Professional accomplishments, successful meetings, work breakthroughs",
         },
         {
            value: "growth",
            label: "Fast Pace",
            description:
               "Moments of learning, self-discovery, or important realizations",
         }]
   },
   {
      fieldName: "trailer",
      question: {
         head: "What moments would go in a trailer?",
         description:
            "Think about the moments that felt most significant, meaningful, or worth remembering. These could be achievements, connections, challenges overcome, or simply beautiful moments that made you feel alive.",
      },
      type: "multi-select",
      options: [
         {
            value: "career",
            label: "Career Victories",
            description:
               "Professional accomplishments, work breakthroughs",
         },
         {
            value: "growth",
            label: "Personal Evolution",
            description:
               "Moments of learning or important realizations",
         },
         {
            value: "connection",
            label: "Heart Connections",
            description:
               "Deep conversations or meaningful interactions with others",
         },
         {
            value: "creativity",
            label: "Creative Flow",
            description:
               "Artistic expression or innovative problem-solving",
         },
         {
            value: "rest",
            label: "Self-Compassion",
            description:
               "Rest, wellness practices, or treating yourself with kindness",
         },
         {
            value: "adventure",
            label: "Life Adventures",
            description:
               "New experiences, exploration, spontaneous fun",
         },
         {
            value: "problemSolving",
            label: "Problem-Solving Wins",
            description:
               "Successfully navigating challenges with clever solution",
         },
         {
            value: "stillness",
            label: "Sacred Stillness",
            description:
               "Peaceful reflection or simple pleasures that soothe your soul",
         },
         {
            value: "kindness",
            label: "Kindness Exchange",
            description:
               "Moments of giving or receiving help, support, or generosity",
         },
         {
            value: "movement",
            label: "Body Celebration",
            description:
               "Exercise or activities that made you feel physically alive",
         },
      ],
   },
   {
      fieldName: "soundtrack",
      question: {
         head: "At the peak of your day, what music was playing in the background?",
         description:
            "Consider the dominant emotional tone of your day and what type of music would best accompany those feelings. Think about your energy levels and whether you felt upbeat, contemplative, modern, or timeless.",
      },
      type: "select",
      options: [
         {
            value: "pop",
            label: "Upbeat Pop Anthem",
            description:
               "Energetic, optimistic, celebrating life's joyful moments",
         },
         {
            value: "folk",
            label: "Indie Folk",
            description:
               "Thoughtful, authentic, exploring life's deeper meanings",
         },
         {
            value: "electronic",
            label: "Electronic Pulse",
            description: "Modern, dynamic, buzzing with technological energy",
         },
         {
            value: "classical",
            label: "Classical Symphony",
            description:
               "Elegant, emotionally rich, with dramatic depth and beauty",
         },
         {
            value: "rock",
            label: "Rock Beats",
            description:
               "Bold, rebellious, channeling strong emotions and energy",
         },
         {
            value: "melancholy",
            label: "Melancholy Melody",
            description: "Reflective, emotional, processing complex feelings",
         },
         {
            value: "silence",
            label: "Perfect Silence",
            description:
               "A day so peaceful and complete that no music could improve it",
         },
      ],
   },
   {
      fieldName: "closingLine",
      question: {
         head: "What would be the closing line of today's movie?",
         description:
            "Think about how you would summarize today's experience in one meaningful sentence. This could be a reflection on what you learned, how you're feeling, what you're grateful for, or what you're taking away from today.",
      },
      type: "text",
   },
];
