"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Bullet } from "../ui/Bullet";
import { X } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export function TargetAudience() {
    const forWhom = [
        "Empresários que já vendem, mas sentem improviso na comunicação",
        "Marca ok, mas mensagem inconsistente e retrabalho constante",
        "Leads chegam, mas não fecham com previsibilidade",
        "Cansado de marketing operacional sem direção estratégica"
    ];

    const notForWhom = [
        "Quem quer hack, viral ou milagre",
        "Quem quer alguém para postar barato",
        "Quem pede desconto antes de entender o problema",
        "Quem não decide e vive no improviso"
    ];

    return (
        <Section spacing="lg" className="px-5 py-16 md:px-6 md:py-20 bg-background border-t border-secondary">
            <div className="max-w-md md:max-w-7xl mx-auto grid lg:grid-cols-10 gap-12 md:gap-16 lg:gap-24 items-start">
                {/* Pra quem é (6 cols) */}
                <FadeIn direction="right" className="lg:col-span-6 space-y-8 md:space-y-12">
                    <Heading level={2} className="flex items-center gap-6 text-4xl font-bold">
                        <span className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center text-xl font-bold flex-shrink-0">✓</span>
                        Pra quem é
                    </Heading>
                    <div className="space-y-6 md:space-y-8 pl-4 border-l border-secondary">
                        {forWhom.map((item, i) => (
                            <div key={i} className="relative pl-8">
                                <div className="absolute left-0 top-[2px]">
                                    <Bullet />
                                </div>
                                <Text variant="lead" className="text-sm leading-snug md:text-xl font-medium text-foreground" style={{ margin: 0 }}>{item}</Text>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Pra quem não é (4 cols) */}
                <FadeIn direction="left" delay={0.2} className="lg:col-span-4 space-y-8 md:space-y-10 lg:mt-24">
                    <Heading level={2} className="flex items-center gap-4 text-3xl font-bold text-muted-foreground/60">
                        <span className="w-10 h-10 rounded-full bg-secondary text-muted-foreground flex items-center justify-center text-lg font-bold">X</span>
                        Pra quem não é
                    </Heading>
                    <div className="space-y-6 opacity-60">
                        {notForWhom.map((item, i) => (
                            <div key={i} className="relative pl-7 pb-4 border-b border-secondary/50 last:border-0">
                                <div className="absolute left-0 top-[2px] w-5 h-5 flex items-center justify-center">
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </div>
                                <Text className="text-sm leading-snug md:text-lg font-medium" style={{ margin: 0 }}>{item}</Text>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
