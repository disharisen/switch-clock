import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Switch Clock",
  description: "It's a new updated Switch Clock.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Clock />
    </section>
  );
};

export default page;
