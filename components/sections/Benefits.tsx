"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Card } from "../ui/Card";
import { FadeIn, StaggerContainer, staggerItem } from "../ui/FadeIn";
import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

export function Benefits() {
    const items = [
        { icon: Target, text: "Diagnóstico claro dos pontos cegos" },
        { icon: Zap, text: "O ruído principal que trava crescimento" },
        { icon: TrendingUp, text: "A prioridade com melhor ROI agora" }
    ];

    return (
        <Section spacing="lg" className="px-5 py-16 md:px-6 md:py-20 bg-secondary/30">
            <div className="max-w-md md:max-w-7xl mx-auto space-y-12 md:space-y-16">
                <FadeIn className="max-w-2xl">
                    <Text variant="small" className="text-primary font-bold uppercase tracking-widest mb-4">O Entregável</Text>
                    <Heading level={2} className="text-5xl font-bold tracking-tight">O que você ganha em 15 min</Heading>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 space-y-6 md:space-y-0">
                    {items.map((item, i) => (
                        <motion.div key={i} variants={staggerItem} className="h-full">
                            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full p-10 flex flex-col items-start gap-6 rounded-2xl group">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-foreground/60" strokeWidth={1.5} />
                                </div>
                                <Text className="font-bold text-base md:text-2xl leading-tight text-foreground">{item.text}</Text>
                            </Card>
                        </motion.div>
                    ))}
                </StaggerContainer>

                <FadeIn delay={0.4} className="flex justify-center pt-16">
                    <div className="max-w-2xl pl-6 border-l-2 border-primary">
                        <Text className="text-lg font-medium text-foreground/80 italic leading-relaxed">
                            "Se for caso de execução simples com seu time, eu te digo. Se for caso de estratégia e direção, eu também te digo."
                        </Text>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
