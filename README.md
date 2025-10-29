## Rainum Wallet V2

Investor-klart dashboard for Rainum blockchain med dual-VM visualisering, cross-chain bridge kontrol og enterprise-grade sikkerhedslag.

### ✨ Nuværende funktionalitet

- **Marketing landing page** med hero, teknologi-highlights, sikkerhedssektion og investor call-to-actions.
- **Loginoplevelse** der beskriver Rainums zero-trust model (passphrase, WebAuthn, hardware wallet).
- **Authenticated dashboard shell** (`/dashboard`) med:
  - Porteføljeoversigt, fee/QoS indsigter og ZKP-statistik.
  - Netværkssundhed (TPS, finalitet, peers).
  - Bridge pipeline (timelocks, attestationer).
  - Governance radar + security alerts.
  - Seneste transaktioner (EVM/Move, privacy levels).
- Designtokens + glassmorphic UI med Tailwind v4, mørkt tema og animations-klare komponenter.

Alle data er pt. baseret på `src/data/demo-dashboard.ts` og kan erstattes med faktiske API-kald senere.

---

## Teknologistak

- **Frontend**: Next.js 14 (App Router, server components), TypeScript, React 19.
- **Styling**: Tailwind CSS v4 (new `@import "tailwindcss"` pipeline), custom utility helpers (`cn`, glass panels).
- **State / Data**: Placeholder-demo data + abstraheret Rainum klient (`src/lib/api/**`), websocket helper.
- **Designsystem**: Reusable `Button`, `Card`, `Badge`, layout og dashboard komponenter.
- **Sikkerhed**: Stramme `next.config.ts` security headers (CSP, HSTS, Permissions-Policy).

---

## Kom i gang

```bash
# installer afhængigheder
npm install

# kør udviklingsserver
npm run dev
```

Applikationen kører på [http://localhost:3000](http://localhost:3000).

Har du brug for at teste den autentificerede oplevelse direkte, gå til [`/dashboard`](http://localhost:3000/dashboard) eller login flowet på [`/login`](http://localhost:3000/login).

---

## Miljøvariabler (optionelle)

Følgende variabler bruges af `RainumClient` og websocket helperen. Alle er valgfrie i den nuværende demo-tilstand.

| Variable | Formål |
| --- | --- |
| `NEXT_PUBLIC_RAINUM_REST_ENDPOINT` | REST endpoint til Rainum blockchain API |
| `NEXT_PUBLIC_RAINUM_RPC_ENDPOINT` | RPC endpoint for direkte knudeopkald |
| `NEXT_PUBLIC_RAINUM_WS_ENDPOINT` | Websocket stream til realtidsopdateringer |
| `NEXT_PUBLIC_RAINUM_API_KEY` | API-nøgle til secured endpoints (injekteres i headers) |

---

## Projektstruktur

```
src/
  app/
    (public)     → marketing sider
    (auth)       → login / onboarding
    (app)        → authenticated dashboard shell
  components/
    layout/      → header, footer, shell, theme provider
    sections/    → hero, metrics, security, capabilities osv.
    dashboard/   → modulære widgets til appen
    ui/          → genbrugelige UI primitives
  data/          → demo datasæt
  lib/
    api/         → klient wrapper + typed models
    hooks/       → realtime hooks
    utils/       → helper utilities
```

---

## Scripts

| Script | Beskrivelse |
| --- | --- |
| `npm run dev` | Kører udviklingsserveren |
| `npm run build` | Production build |
| `npm run start` | Starter buildet projekt |
| `npm run lint` | ESLint (Next.js config) |

---

## Næste skridt

- Erstat demo-data med faktiske Rainum endpoints og websocket streams.
- Implementer sessionhåndtering + JWT-rotation i `/login`.
- Udbyg flere dashboard-routes (bridge, staking, governance osv.).
- Tilføj Storybook / visuel regression samt Playwright e2e scenarier.

Spørg endelig, hvis noget skal prioriteres først. 🚀
