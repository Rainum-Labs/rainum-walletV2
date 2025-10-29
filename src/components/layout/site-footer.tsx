import Link from "next/link";
import { Github, Globe2, Linkedin } from "lucide-react";
import { marketingNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-white/5 bg-slate-950/70 backdrop-blur-xl",
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-white">
            Rainum Labs © {new Date().getFullYear()}
          </h2>
          <p className="max-w-sm text-sm text-white/60">
            Bygget med dual-VM, cross-chain bro og zero-knowledge sikkerhed for
            at give investorer fuldt indblik i Rainum-økosystemet.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-white/70">
          {marketingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer noopener" : undefined}
              className="transition hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white/60">
          <Link
            href="https://github.com/Rainum-Labs"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://rainum.io"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Globe2 className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/rainum-labs"
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
