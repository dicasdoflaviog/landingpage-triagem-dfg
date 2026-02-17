import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    spacing?: "sm" | "md" | "lg" | "xl";
    background?: "default" | "white" | "muted";
    container?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
    ({ className, spacing = "lg", background = "default", container = true, children, ...props }, ref) => {

        // Standardized 8pt Grid System
        const spacings = {
            sm: "py-12 md:py-16", // 48px / 64px
            md: "py-16 md:py-24", // 64px / 96px
            lg: "py-24 md:py-32", // 96px / 128px (Default)
            xl: "py-32 md:py-48", // 128px / 192px (Hero)
        };

        const backgrounds = {
            default: "bg-background",
            white: "bg-white",
            muted: "bg-muted",
        };

        return (
            <section
                ref={ref}
                className={twMerge(clsx(spacings[spacing], backgrounds[background], className))}
                {...props}
            >
                {container ? (
                    <div className="container px-4 md:px-6 mx-auto">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
