import { cn } from "@/lib/utils";

type BadgeTone = "aqua" | "violet" | "amber" | "neutral" | "critical";

const TONE_MAP: Record<BadgeTone, string> = {
  aqua: "bg-sky-500/20 text-sky-200 border border-sky-500/30",
  violet: "bg-violet-500/20 text-violet-200 border border-violet-500/30",
  amber: "bg-amber-400/20 text-amber-100 border border-amber-400/30",
  neutral: "bg-white/10 text-white/80 border border-white/15",
  critical: "bg-rose-500/20 text-rose-100 border border-rose-500/40",
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  soft?: boolean;
};

export function Badge({
  className,
  tone = "neutral",
  soft = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        TONE_MAP[tone],
        soft && "border-none bg-white/10 text-white/60",
        className,
      )}
      {...props}
    />
  );
}
