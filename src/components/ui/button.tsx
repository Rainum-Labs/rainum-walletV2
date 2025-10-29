import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#42f4ff,#9c3dff)] text-slate-950 hover:shadow-neon",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur",
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/10 backdrop-blur",
  gradient:
    "gradient-ring text-white before:bg-slate-900 hover:shadow-neon data-[loading=true]:opacity-80",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm md:text-base",
  lg: "px-6 py-3 text-base md:text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow,
      children,
      ...props
    },
    ref,
  ) => {
    const computedClassName = cn(
      "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200",
      SIZE_STYLES[size],
      VARIANT_STYLES[variant],
      glow && "shadow-neon",
      variant === "gradient" && "bg-transparent",
      variant !== "gradient" && className,
    );

    const button = (
      <button ref={ref} className={computedClassName} {...props}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );

    if (variant !== "gradient") {
      return button;
    }

    return (
      <span
        className={cn("gradient-ring inline-flex", className)}
        data-loading={props["aria-busy"]}
      >
        {button}
      </span>
    );
  },
);

Button.displayName = "Button";
