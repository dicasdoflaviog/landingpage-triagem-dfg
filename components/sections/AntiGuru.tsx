"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { XCircle, CheckCircle } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function AntiGuru() {
    return (
        <Section className="px-5 py-16 md:px-6 md:py-32 bg-[#111111] text-white overflow-hidden">
            <div className="max-w-md md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* Negative Space */}
                <FadeIn direction="right" className="space-y-8 md:space-y-10 relative">
                    <Heading level={2} className="text-white text-4xl font-bold tracking-tight mb-8">
                        <span className="text-white/40">/ </span>O que não é
                    </Heading>

                    <div className="space-y-6 md:space-y-8">
                        {[
                            "Post todo dia como solução mágica",
                            "Promessas de 'hacks' virais",
                            "Estratégia de palco sem validade"
                        ].map((item, i) => (
                            <div key={i} className="relative pl-8 opacity-50 hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute left-0 top-[2px] w-5 h-5 flex items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <XCircle className="w-4 h-4 text-white" strokeWidth={2} />
                                </div>
                                <Text className="text-sm leading-snug md:text-xl text-white font-light" style={{ margin: 0 }}>{item}</Text>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Positive Space - Highlighted Card */}
                <FadeIn direction="left" delay={0.2}>
                    <div className="bg-[#1a1a1a] p-10 md:p-12 rounded-2xl border border-white/5 relative group hover:border-primary/20 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-6">
                            <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(255,204,0,0.5)]"></div>
                        </div>

                        <Heading level={2} className="text-white text-4xl font-bold tracking-tight mb-10">
                            <span className="text-primary">/ </span>O que é
                        </Heading>

                        <div className="space-y-6 md:space-y-8">
                            {[
                                "Clareza absoluta do próximo passo",
                                "Prioridade de execução imediata",
                                "Direção estratégica real"
                            ].map((item, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute left-0 top-[2px] w-5 h-5 flex items-center justify-center rounded-full border border-primary bg-primary/10 shadow-[0_0_10px_rgba(255,204,0,0.2)]">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-inner"></div>
                                    </div>
                                    <Text className="text-sm leading-snug md:text-xl text-white font-medium" style={{ margin: 0 }}>{item}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
