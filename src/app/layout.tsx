import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rainum Wallet V2",
    template: "%s — Rainum Wallet V2",
  },
  description:
    "Institutional-grade wallet experience for Rainum Blockchain with dual-VM support, cross-chain liquidity, and zero-knowledge privacy.",
  metadataBase: new URL("https://rainumwallet.com"),
  openGraph: {
    title: "Rainum Wallet V2",
    description:
      "Experience Rainum’s dual-VM power with real-time analytics, cross-chain bridging, and ZKP privacy controls.",
    url: "https://rainumwallet.com",
    siteName: "Rainum Wallet V2",
    images: [
      {
        url: "/og/rainum-wallet.png",
        width: 1200,
        height: 630,
        alt: "Rainum Wallet V2 overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainum Wallet V2",
    description:
      "Investor-ready wallet for the Rainum ecosystem with live metrics and enterprise security.",
    images: ["/og/rainum-wallet.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-grid antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,172,255,0.18),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,45,172,0.18),transparent_55%)] mix-blend-screen" />
            <div className="relative z-10 flex min-h-screen flex-col">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
