import { HTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = false, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        "rounded-lg border border-gray-100 bg-white p-6 shadow-sm",
                        hover && "transition-all hover:shadow-md hover:-translate-y-1 duration-300",
                        className
                    )
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export { Card };
