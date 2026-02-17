import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Flávio Guimarães | Estrategista de Marca",
  description: "Consultoria estratégica de marca e posicionamento. Triagem de 15 minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={clsx(inter.variable, "font-sans min-h-screen bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
