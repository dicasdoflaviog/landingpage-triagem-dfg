import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { AntiGuru } from "@/components/sections/AntiGuru";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Quiz } from "@/components/sections/Quiz";

import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Benefits />
      <TargetAudience />
      <About />
      <HowItWorks />
      <AntiGuru />
      <div id="quiz">
        <Quiz />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  );
}
