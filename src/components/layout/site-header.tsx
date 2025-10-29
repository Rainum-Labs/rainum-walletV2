import Link from "next/link";
import { Menu, Moon, ShieldCheck, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingNav } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const logoGradient =
  "bg-[linear-gradient(135deg,rgba(66,244,255,0.92),rgba(156,61,255,0.85))]";

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-2xl text-slate-950 shadow-neon",
              logoGradient,
            )}
          >
            <ShieldCheck className="h-6 w-6" strokeWidth={1.6} />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm uppercase tracking-[0.32em] text-white/50">
              Rainum Labs
            </span>
            <span className="text-lg font-semibold text-white">
              Wallet V2
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle
            className="hidden sm:flex"
            lightIcon={<Sun className="h-5 w-5" />}
            darkIcon={<Moon className="h-5 w-5" />}
          />
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/status">Status</Link>
          </Button>
          <Button variant="gradient" className="hidden md:inline-flex" asChild>
            <Link href="/login">Log ind</Link>
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
