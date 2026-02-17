import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F7F7F5", // Offwhite user request
                foreground: "#333333", // Graphite user request
                primary: {
                    DEFAULT: "#FFCC00", // Strong Yellow (Cimed style approximation)
                    hover: "#E6B800",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#333333", // Graphite
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F0F0F0",
                    foreground: "#666666",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#333333",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1.5rem",
                screens: {
                    "2xl": "1280px",
                },
            },
        },
    },
    plugins: [],
};
export default config;
