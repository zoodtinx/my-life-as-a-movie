export const getDemoUser = () => {
   return {
      name: "Alex Palarit",
      email: `user-${crypto.randomUUID()}@mlam.com`,
      personalContext:
         "I'm a passionate movie enthusiast who loves diving into all kinds of films, from cult classics to hidden indie gems. I enjoy exploring different genres and analyzing the elements that make each story unique. In my free time, I write reviews, imagine alternate endings, and brainstorm creative sequel ideas. I find joy in discussing characters, plot twists, and what could’ve been, always looking for fresh perspectives to share with fellow film lovers.",
   };
};
