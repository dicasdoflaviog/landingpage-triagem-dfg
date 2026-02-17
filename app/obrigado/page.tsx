import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { buttonVariants } from "@/components/ui/Button";
import { CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function ThankYou() {
    // Placeholder WhatsApp link - would actully be the user's number
    const whatsappLink = "https://wa.me/?text=O%20maior%20ru%C3%ADdo%20hoje%20na%20minha%20comunica%C3%A7%C3%A3o%20%C3%A9...";

    return (
        <main className="min-h-screen bg-background flex items-center justify-center">
            <Section>
                <div className="max-w-xl mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-4">
                        <Heading level={1}>Agendado. Agora seja objetivo.</Heading>
                        <Text variant="lead">
                            Para a triagem render, me responda no WhatsApp em 1 frase:
                        </Text>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 max-w-sm mx-auto">
                        <Text className="font-medium text-gray-900 mb-4">
                            "Qual é o maior ruído hoje na sua comunicação?"
                        </Text>
                        {/* Directly use 'a' tag with button classes */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                                size: "lg",
                                className: "w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-sm gap-2"
                            })}
                        >
                            <MessageSquare className="w-5 h-5" />
                            Responder no WhatsApp
                        </a>
                    </div>

                    <div className="border-t border-gray-200 pt-8 mt-8">
                        <Text variant="muted" className="text-sm">
                            Observação: <br /> "Se você não for o decisor, remarque quando ele puder participar."
                        </Text>

                        <div className="mt-8">
                            <Link href="/" className="text-primary text-sm hover:underline underline-offset-4">
                                Voltar para a home
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
