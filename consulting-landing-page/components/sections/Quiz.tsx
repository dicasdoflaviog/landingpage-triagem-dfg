"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import clsx from "clsx";
import { CaptureForm } from "./CaptureForm";

const questions = [
    {
        id: 1,
        question: "Hoje sua empresa depende mais de:",
        options: ["Indicação", "Instagram", "Tráfego pago", "Comercial", "Cada hora um jeito"]
    },
    {
        id: 2,
        question: "Sua comunicação está:",
        options: ["Consistente", "Mais ou menos", "Bagunçada", "Cada pessoa fala uma coisa"]
    },
    {
        id: 3,
        question: "O que mais te irrita no marketing hoje?",
        options: ["Muito post, pouco resultado", "Lead ruim", "Retrabalho infinito", "Falta de padrão", "Falta de direção"]
    },
    {
        id: 4,
        question: "Meta nos próximos 90 dias:",
        options: ["Vender mais", "Vender mais rápido", "Atrair cliente melhor", "Reposicionar", "Organizar processo"]
    },
    {
        id: 5,
        question: "Você já pagou marketing e se frustrou?",
        options: ["Sim", "Não", "Estou frustrado agora"]
    },
    {
        id: 6,
        question: "Quem decide?",
        options: ["Eu", "Sócio", "Equipe", "Ninguém decide"]
    },
    {
        id: 7,
        question: "Faturamento mensal atual:",
        options: ["Até 10k", "10–30k", "30–80k", "100k+"]
    },
    {
        id: 8,
        question: "Orçamento mensal estimado:",
        options: ["Até 1k", "1–3k", "3–5k", "6k+"]
    }
];

export function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [quizState, setQuizState] = useState<"QUIZ" | "CAPTURE" | "RESULT">("QUIZ");

    const handleAnswer = (answer: string) => {
        setAnswers(prev => ({ ...prev, [currentStep]: answer }));
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300);
        } else {
            setQuizState("CAPTURE");
        }
    };

    const handleCaptureComplete = (data: any) => {
        // Here we would send data to webhook
        console.log("Capture completed", data);
        setQuizState("RESULT");
    };

    const progress = ((currentStep + 1) / questions.length) * 100;

    if (quizState === "CAPTURE") {
        return (
            <Section id="quiz" spacing="lg" className="px-5 py-16 md:px-6 md:py-20 bg-background min-h-[600px] flex items-center justify-center">
                <CaptureForm onComplete={handleCaptureComplete} />
            </Section>
        );
    }

    if (quizState === "RESULT") {
        return (
            <Section id="quiz" spacing="lg" className="px-5 py-16 md:px-6 md:py-20 bg-background">
                <div className="max-w-md md:max-w-2xl mx-auto text-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-8 h-8" />
                    </div>

                    <Heading level={2}>Seu resultado: falta direção (não conteúdo)</Heading>

                    <Text variant="lead" className="text-gray-700">
                        Pelo que você respondeu, o problema não é postar mais. É alinhar marca, mensagem e execução com um plano claro.
                    </Text>

                    <div className="p-6 bg-yellow-50/50 border border-yellow-100 rounded-lg text-left">
                        <Heading level={5} className="mb-2 text-yellow-900">Diagnóstico preliminar:</Heading>
                        <ul className="space-y-2 text-sm text-yellow-800">
                            <li>• Sintoma: {answers[2]}</li>
                            <li>• Objetivo: {answers[3]}</li>
                            <li>• Gargalo provável: Inconsistência estratégica</li>
                        </ul>
                    </div>

                    <div className="pt-4">
                        <Button size="lg" className="w-full sm:w-auto bg-primary text-black font-bold" onClick={() => window.open("https://calendly.com/seu-link", "_blank")}>
                            QUERO CLAREZA (15 min)
                        </Button>
                        <Text variant="muted" className="mt-4 text-xs">
                            Se você busca hack ou milagre, não agende.
                        </Text>
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section id="quiz" spacing="lg" background="white" className="px-5 py-16 md:px-6 md:py-20 min-h-[600px] flex flex-col justify-center">
            <div className="max-w-md md:max-w-xl mx-auto w-full">
                {/* Header */}
                <div className="mb-8 text-center space-y-2">
                    <Text variant="small" className="uppercase tracking-widest text-gray-400">Mini Diagnóstico</Text>
                    <Heading level={3}>CLAREZA em 2 minutos</Heading>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-100 rounded-full mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Question Card */}
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <Heading level={4} className="text-xl md:text-2xl">
                                {questions[currentStep].question}
                            </Heading>

                            <div className="grid gap-3">
                                {questions[currentStep].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-left bg-white text-foreground font-medium"
                                    >
                                        <span>{option}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="mt-8 flex justify-between text-xs text-gray-400">
                    <span>Questão {currentStep + 1} de {questions.length}</span>
                    <span>{Math.round(progress)}% concluído</span>
                </div>
            </div>
        </Section>
    );
}
