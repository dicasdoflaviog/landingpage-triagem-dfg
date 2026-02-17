import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BulletProps {
    className?: string;
}

export function Bullet({ className }: BulletProps) {
    return (
        <div className={cn(
            "flex items-center justify-center flex-shrink-0",
            "w-8 h-8 rounded-full border border-primary/50 bg-primary/10", // Fixed 32px geometry
            className
        )}>
            <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
        </div>
    );
}
