import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Copy, ExternalLink, Flame, Skull } from "lucide-react";
import { LiveChart } from "@/components/live-chart";
import { getMarket } from "@/lib/market.functions";
import {
  CONTRACT,
  DEX_URL,
  PUMP_URL,
  formatClock,
  formatPrice,
  formatUsd,
  type Market,
  type Tick,
} from "@/lib/market";

export const Route = createFileRoute("/")({ component: Home });

const RULES = [
  { k: "01", t: "No luck", d: "If you came looking for a safety net, you already lost." },
  { k: "02", t: "No guarantees", d: "The chart can turn. That is the entire product." },
  { k: "03", t: "No refunds", d: "Once the black drip hits, it does not wipe off." },
  { k: "04", t: "Unlucky together", d: "Other coins kneel. The club stays standing." },
];

const KNEELERS = ["BTC", "ETH", "SOL", "DOGE", "PEPE", "WIF"];

function Home() {
  const [market, setMarket] = useState<Market | null>(null);
  const [ticks, setTicks] = useState<Tick[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let stop = false;

    async function load() {
      try {
        const next = await getMarket();
        if (stop) return;
        setMarket(next);
        setError(null);
        setTicks((prev) => {
          const now: Tick = {
            time: formatClock(Date.now()),
            price: next.price,
            ts: Date.now(),
          };
          if (prev.length === 0) {
            return [
              {
                time: formatClock(next.createdAt),
                price: next.price,
                ts: next.createdAt,
              },
              now,
            ];
          }
          const last = prev[prev.length - 1];
          if (last && last.price === next.price) {
            return [...prev.slice(0, -1), now];
          }
          return [...prev.slice(-160), now];
        });
      } catch (err) {
        if (!stop) setError(err instanceof Error ? err.message : "Market feed failed");
      }
    }

    void load();
    const id = window.setInterval(() => void load(), 15000);
    return () => {
      stop = true;
      window.clearInterval(id);
    };
  }, []);

  const change = market?.change24h ?? null;
  const up = (change ?? 0) >= 0;
  const txns = (market?.buys24h ?? 0) + (market?.sells24h ?? 0);

  async function copyCa() {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.18em] uppercase">
            <Skull className="size-5 text-gold" aria-hidden />
            Bad Luck
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
            <a href="#chart" className="hover:text-fg">Chart</a>
            <a href="#kneel" className="hover:text-fg">Kneel</a>
            <a href="#club" className="hover:text-fg">Club</a>
          </nav>
          <button
            type="button"
            onClick={copyCa}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 bg-surface px-4 text-sm font-medium text-gold"
          >
            <Copy className="size-4" aria-hidden />
            {copied ? "Copied" : "Copy CA"}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame-dim/30 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-flame uppercase">
              <Flame className="size-3.5" aria-hidden />
              {market ? `${market.symbol} · Solana` : "Global club of losers"}
            </p>
            <h1 className="font-display text-5xl leading-[0.95] font-black tracking-wide text-fg sm:text-7xl">
              Bad Luck
              <span className="block text-gold gold-glow">Coin</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              No luck. No guarantees. No refunds. Live price from the pump.fun pair.
              Other coins kneel. This one just prints the tape.
            </p>
            <div className="mt-8 flex flex-wrap items-end gap-6">
              <div>
                <p className="text-xs tracking-[0.2em] text-muted uppercase">Live price</p>
                <p className="font-display text-4xl font-bold text-fg sm:text-5xl">
                  {market ? formatPrice(market.price) : "—"}
                </p>
              </div>
              <p className={up ? "pb-1 text-lg font-semibold text-flame" : "pb-1 text-lg font-semibold text-danger"}>
                {market
                  ? change == null
                    ? "24h flat"
                    : `${up ? "+" : ""}${change.toFixed(2)}%`
                  : "…"}
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              <Stat label="Mkt cap" value={market ? formatUsd(market.marketCap) : "—"} />
              <Stat label="24h vol" value={market ? formatUsd(market.volume24h) : "—"} />
              <Stat label="24h txs" value={market ? txns.toLocaleString() : "—"} />
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PUMP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-bg"
              >
                Pump.fun
                <ExternalLink className="size-4" aria-hidden />
              </a>
              <a
                href={DEX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-semibold text-fg"
              >
                DexScreener
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-flame/20 blur-3xl" aria-hidden />
            <img
              src="/bad-luck-coin.jpg"
              alt="Golden cracked skull coin ringed in green fire with black drip"
              className="relative w-full rounded-full flame-ring"
            />
          </div>
        </section>

        <LiveChart market={market} ticks={ticks} error={error} />

        <section id="kneel" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">They kneel</h2>
          <p className="mt-2 max-w-xl text-muted">
            One coin takes the room. Everyone else learns the posture.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {KNEELERS.map((name) => (
              <li
                key={name}
                className="flex min-h-24 flex-col items-center justify-center rounded-xl border border-border bg-surface"
              >
                <span className="font-display text-xl font-bold text-muted">{name}</span>
                <span className="text-xs tracking-widest text-flame uppercase">kneeling</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="club" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Club rules</h2>
          <p className="mt-2 text-muted">At least we are unlucky together.</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {RULES.map((rule) => (
              <li key={rule.k} className="rounded-xl border border-border bg-surface p-5">
                <p className="font-display text-sm tracking-[0.2em] text-gold">{rule.k}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{rule.t}</h3>
                <p className="mt-2 text-muted">{rule.d}</p>
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={copyCa}
            className="mt-8 flex w-full items-center justify-between gap-3 rounded-xl border border-gold/30 bg-surface-2 px-4 py-4 text-left"
          >
            <span className="min-w-0">
              <span className="block text-xs tracking-[0.18em] text-muted uppercase">Contract</span>
              <span className="block truncate font-mono text-sm text-fg sm:text-base">{CONTRACT}</span>
            </span>
            <span className="shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-bg">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
          <p className="mt-3 text-xs text-muted">
            Price, market cap, and volume refresh from DexScreener every 15 seconds.
            The line stays flat until a real trade moves it. Not financial advice.
          </p>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted">
        Bad Luck Coin · {market?.symbol ?? "BLC"} · the global club of losers
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-3">
      <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-lg font-bold text-fg sm:text-xl">{value}</dd>
    </div>
  );
}
