"use client";

import { Section } from "./Section";
import { Text } from "./Typography";
import { FadeIn } from "./FadeIn";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 md:py-16 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand / Identity */}
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="text-white font-bold text-xl tracking-tight">Flávio Guimarães</h4>
                        <Text variant="small" className="text-zinc-500 max-w-xs">
                            Estratégia de marca e posicionamento para empresas que buscam o próximo nível.
                        </Text>
                    </div>

                    {/* Legal / Info */}
                    <div className="text-center md:text-right space-y-2">
                        <Text variant="small" className="font-mono text-xs opacity-60">
                            CNPJ 32.035.459/0001-17
                        </Text>
                        <Text variant="small" className="text-xs">
                            &copy; {currentYear} Todos os direitos reservados.
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    );
}
