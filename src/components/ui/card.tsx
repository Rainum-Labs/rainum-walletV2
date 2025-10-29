import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "glass" | "outline";
  padding?: "sm" | "md" | "lg" | "none";
};

const VARIANT_MAP: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl",
  glass: "glass-panel border-white/10",
  outline: "rounded-3xl border border-white/10 bg-slate-900/40",
};

const PADDING_MAP: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "p-0",
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "glass", padding = "md", children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(VARIANT_MAP[variant], PADDING_MAP[padding], className)}
      {...props}
    >
      {children}
    </div>
  ),
);

Card.displayName = "Card";
