"use client";

import { useTheme } from "next-themes";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  lightIcon: ReactNode;
  darkIcon: ReactNode;
};

export function ThemeToggle({
  className,
  lightIcon,
  darkIcon,
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      className={cn(
        "h-10 w-10 rounded-full border border-white/10 p-0 text-white/70 hover:text-white",
        className,
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? lightIcon : darkIcon}
    </Button>
  );
}
