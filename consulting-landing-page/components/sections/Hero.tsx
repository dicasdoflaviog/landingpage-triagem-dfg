"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Bullet } from "../ui/Bullet";
import { FadeIn } from "../ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const scrollToQuiz = () => {
        document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Section className="relative px-5 py-16 md:px-6 md:pt-48 md:pb-32 bg-background overflow-hidden">
            {/* 2. Grid Sutil Background (1px, 4% opacity) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-md md:max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-9 flex flex-col items-start gap-6 md:gap-10">
                    <FadeIn delay={0.1} className="space-y-6 md:space-y-8">
                        <Heading level={1} className="text-4xl leading-tight md:text-8xl md:leading-[0.95] lg:text-9xl font-bold tracking-tighter text-foreground">
                            Sua empresa cresceu.<br />
                            Sua comunicação ainda<br />
                            parece
                            <span className="relative inline-block ml-4 px-1">
                                {/* Marker Effect */}
                                <span className="absolute inset-0 bg-primary/40 -skew-x-6 rounded-sm -z-10 bottom-2 top-4"></span>
                                <span className="relative z-10">improviso.</span>
                            </span>
                        </Heading>

                        <Text variant="lead" className="max-w-2xl text-base leading-relaxed md:text-2xl text-foreground/80 font-normal">
                            Triagem estratégica de 15 min no Google Meet. Aponto os 3 ruídos e a prioridade real. <span className="font-semibold text-foreground border-b-2 border-primary/50">Sem guru. Sem teatro.</span>
                        </Text>
                    </FadeIn>

                    <FadeIn delay={0.3} className="space-y-6">
                        {[
                            "3 ruídos que travam clareza e conversão",
                            "1 prioridade com impacto em até 14 dias",
                            "Caminho direto: ajustar com seu time ou seguir comigo"
                        ].map((item, i) => (
                            <div key={i} className="relative pl-8 group">
                                <div className="absolute left-0 top-[2px]">
                                    <Bullet />
                                </div>
                                <Text className="font-medium text-sm leading-snug md:text-xl text-foreground/90" style={{ margin: 0 }}>{item}</Text>
                            </div>
                        ))}
                    </FadeIn>

                    <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-8">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto h-16 px-12 text-lg font-bold bg-primary text-black hover:bg-primary-hover shadow-none rounded-xl"
                            onClick={scrollToQuiz}
                        >
                            QUERO CLAREZA
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <div className="flex flex-col gap-1 justify-center">
                            <Text variant="small" className="font-bold uppercase tracking-widest text-primary-foreground/60">
                                15 min • Google Meet
                            </Text>
                            <Text variant="small" className="opacity-50">
                                Se não houver fit, eu encerro.
                            </Text>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
}
