import { HTMLAttributes, forwardRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
    visualLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ children, level, className, visualLevel, ...props }: HeadingProps) {
    const Tag = `h${level}` as ElementType;
    const sizeClass = visualLevel ? `h${visualLevel}` : `h${level}`;

    const styles = {
        h1: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground", // Dominant Hero
        h2: "text-3xl md:text-5xl font-bold tracking-tight text-foreground", // Section Headers
        h3: "text-2xl md:text-3xl font-bold tracking-tight text-foreground", // Subsections
        h4: "text-xl md:text-2xl font-bold tracking-tight text-foreground",
        h5: "text-lg font-bold text-foreground",
        h6: "text-base font-bold text-foreground",
    };

    return (
        <Tag className={cn(styles[sizeClass as keyof typeof styles], className)} {...props}>
            {children}
        </Tag>
    );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
    className?: string;
    variant?: "body" | "lead" | "muted" | "small" | "large";
    asChild?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, variant = "body", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"

    const variants = {
        body: "leading-7 [&:not(:first-child)]:mt-6 text-foreground/90",
        lead: "text-xl text-muted-foreground",
        muted: "text-sm text-muted-foreground",
        small: "text-sm font-medium leading-none",
        large: "text-lg font-semibold",
    }

    return (
        <Comp
            ref={ref}
            className={cn(variants[variant], className)}
            {...props}
        />
    )
})
Text.displayName = "Text"

export { Heading, Text }
