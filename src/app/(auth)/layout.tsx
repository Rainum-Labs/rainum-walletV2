import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center bg-[radial-gradient(circle_at_top,#42f4ff22,transparent_65%)] px-4 py-16">
        <div className="mx-auto w-full max-w-4xl rounded-[36px] border border-white/10 bg-slate-950/85 p-10 shadow-neon backdrop-blur-2xl">
          {children}
        </div>
      </main>
    </div>
  );
}
