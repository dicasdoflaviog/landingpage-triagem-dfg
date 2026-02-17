"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { FadeIn, StaggerContainer, staggerItem } from "../ui/FadeIn";
import { motion } from "framer-motion";

export function HowItWorks() {
    const steps = [
        { title: "Responda o Mini Diagnóstico", desc: "2 min" },
        { title: "Agende no Calendly", desc: "Google Meet automático" },
        { title: "Triagem objetiva de 15 min", desc: "Sem enrolação" }
    ];

    return (
        <Section className="px-5 py-12 md:px-6 md:py-16">
            <div className="max-w-md md:max-w-4xl mx-auto space-y-8 md:space-y-12">
                <FadeIn>
                    <Heading level={2} className="text-center">Como funciona</Heading>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-100 -z-10 translate-y-4"></div>

                    {steps.map((step, i) => (
                        <motion.div key={i} variants={staggerItem} className="flex flex-col items-center text-center space-y-4 relative">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center font-bold text-xl shadow-sm z-10 text-primary transition-transform hover:scale-110 duration-300">
                                {i + 1}
                            </div>
                            <div>
                                <Heading level={4} className="mb-2">{step.title}</Heading>
                                <Text variant="muted">{step.desc}</Text>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.4} className="flex justify-center mt-8">
                    <Button size="lg" className="w-full sm:w-auto bg-primary text-black font-bold shadow-md hover:shadow-lg transition-all" onClick={() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })}>
                        QUERO CLAREZA
                    </Button>
                </FadeIn>
            </div>
        </Section>
    );
}
