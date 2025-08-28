import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/home/today?bg=base");
};

export default HomePage;