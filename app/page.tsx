import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Work />
      <About />
      <Contact />
    </>
  );
}
