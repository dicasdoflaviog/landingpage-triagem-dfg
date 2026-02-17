"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { FadeIn } from "../ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    const scrollToQuiz = () => {
        document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Section className="px-5 py-16 md:px-6 md:py-48 bg-primary text-primary-foreground text-center overflow-hidden relative">
            <FadeIn className="max-w-md md:max-w-5xl mx-auto space-y-8 md:space-y-12 relative z-10">
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black leading-none mb-6">
                        Pronto para parar <br /> de improvisar?
                    </h2>
                    <Text className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto opacity-90 text-black">
                        Triagem rápida. Se fizer sentido, avançamos. <br className="hidden md:block" /> Se não fizer, você sai com clareza.
                    </Text>
                </div>

                <div className="flex flex-col items-center gap-6 pt-8">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-16 sm:h-20 px-12 sm:px-16 text-lg sm:text-2xl font-bold bg-black text-white hover:bg-black/90 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 rounded-xl border-0"
                        onClick={scrollToQuiz}
                    >
                        QUERO CLAREZA
                        <ArrowRight className="ml-3 w-8 h-8" />
                    </Button>
                    <Text className="text-sm font-bold uppercase tracking-widest text-black/60 pt-4">
                        Vagas limitadas na semana • Google Meet
                    </Text>
                </div>
            </FadeIn>
        </Section>
    );
}
