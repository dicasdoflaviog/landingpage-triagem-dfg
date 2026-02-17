"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Heading, Text } from "../ui/Typography";
import { ArrowRight, Lock } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

interface CaptureFormProps {
    onComplete: (data: any) => void;
}

export function CaptureForm({ onComplete }: CaptureFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call / Webhook
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO: Send to webhook here
        console.log("Form Data:", formData);

        onComplete(formData);
        setIsLoading(false);
    };

    return (
        <FadeIn className="max-w-xl mx-auto text-center space-y-8 p-8 bg-white rounded-2xl shadow-xl border border-secondary/50">
            <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                </div>

                <Heading level={3}>Antes de liberar seu diagnóstico...</Heading>
                <Text className="text-muted-foreground">
                    Preciso dos seus dados para personalizar sua análise e organizar a triagem.
                </Text>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-1">Nome completo</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-1">E-mail profissional</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-bold text-foreground mb-1">WhatsApp</label>
                    <input
                        type="tel"
                        id="whatsapp"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="(00) 00000-0000"
                        value={formData.whatsapp}
                        onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full font-bold text-lg h-14 mt-4"
                    disabled={isLoading}
                >
                    {isLoading ? "Processando..." : "VER MEU RESULTADO"}
                    {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                    Seus dados são usados apenas para organizar sua triagem. Sem spam.
                </p>
            </form>
        </FadeIn>
    );
}
