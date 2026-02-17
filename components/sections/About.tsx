"use client";

import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { FadeIn } from "../ui/FadeIn";

export function About() {
    return (
        <Section className="px-5 py-16 md:px-6 md:py-32 bg-background relative overflow-hidden text-foreground">
            <div className="max-w-md md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">

                <FadeIn direction="right" className="space-y-8 md:space-y-10 order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute -left-6 top-0 w-1 h-20 bg-primary"></div>
                        <Heading level={2} className="text-6xl font-bold tracking-tighter mb-2">Quem sou eu</Heading>
                        <Heading level={3} className="text-3xl text-foreground/60 font-medium">Flávio Guimarães</Heading>
                    </div>

                    <div className="space-y-6 text-base leading-relaxed md:text-xl text-foreground/80 font-light">
                        <Text variant="lead">Estrategista de Marca anti-guru.</Text>
                        <Text variant="lead">+15 anos estruturando posicionamento e direção estratégica para empresas que já vendem, mas querem padrão e previsibilidade.</Text>
                    </div>

                    <div className="pt-8">
                        <Text className="font-bold text-2xl text-foreground relative z-10">
                            <span className="bg-primary/20 px-2 py-1">"Você não precisa de mais posts.</span> <br /> Precisa de direção."
                        </Text>
                    </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.2} className="relative order-1 md:order-2">
                    {/* Layered Composition */}
                    <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
                        {/* Back Layer */}
                        <div className="absolute top-4 right-4 w-full h-full border-2 border-foreground/10 rounded-lg -z-10 bg-secondary/20"></div>

                        {/* Main Card */}
                        <div className="w-full h-full bg-secondary rounded-lg overflow-hidden relative shadow-2xl">
                            {/* Profile Image */}
                            <img
                                src="/images/flavio-profile.jpg"
                                alt="Flávio Guimarães - Estrategista de Marca"
                                className="w-full h-full object-cover object-[center_20%] md:object-center"
                            />

                            {/* Gradient Overlay for Badge Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>

                            {/* Floating Badge with Backdrop Blur */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-none border-l-4 border-primary shadow-lg">
                                <Text variant="small" className="font-bold text-black uppercase tracking-widest text-xs">Estrategista de Marca.</Text>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
}
