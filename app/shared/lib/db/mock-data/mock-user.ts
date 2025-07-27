
const email = `user-${crypto.randomUUID()}@mlam.com`;

export const getDemoUser = () => {
   return {
      name: "Alex Palarit",
      email: `user-${crypto.randomUUID()}@mlam.com`,
   };
};
