 "use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: "class" | "data-theme";
};

export function ThemeProvider({
  children,
  attribute = "class",
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
