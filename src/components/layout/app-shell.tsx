import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AppShellProps = {
  sidebar: ReactNode;
  topbar?: ReactNode;
  children: ReactNode;
};

export function AppShell({ sidebar, topbar, children }: AppShellProps) {
  return (
    <div className="grid min-h-screen grid-cols-1 bg-slate-950/95 text-white md:grid-cols-[280px_1fr]">
      <aside className="hidden h-full border-r border-white/10 md:flex md:flex-col">
        {sidebar}
      </aside>
      <div className="relative flex min-h-screen flex-1 flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#42f4ff26,transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_75%,#ff4d9a20,transparent_60%)] mix-blend-screen" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col">
          {topbar}
          <main className={cn("flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-10")}>
            <div className="mx-auto grid w-full max-w-6xl gap-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
