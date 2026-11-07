export const CONTRACT = "okT9PADFVhh6vB9yxtpPSsuuqiNHJPfZDrCsQrxpump";

export const DEX_URL =
  "https://dexscreener.com/solana/eyzqn8cq8y5qhs1bbn5nqx9p8zevxg9cbecrufkqzbsn";

export const PUMP_URL = `https://pump.fun/coin/${CONTRACT}`;

export type Market = {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  fdv: number;
  volume24h: number;
  buys24h: number;
  sells24h: number;
  liquidity: number | null;
  change24h: number | null;
  createdAt: number;
  pairUrl: string;
};

export type Tick = {
  time: string;
  price: number;
  ts: number;
};

export function formatPrice(n: number) {
  if (!Number.isFinite(n) || n <= 0) return "—";
  if (n >= 1) return `$${n.toFixed(4)}`;
  if (n >= 0.01) return `$${n.toFixed(5)}`;
  const digits = Math.min(12, Math.max(6, Math.ceil(-Math.log10(n)) + 3));
  return `$${n.toFixed(digits).replace(/0+$/, "").replace(/\.$/, "")}`;
}

export function formatUsd(n: number) {
  if (!Number.isFinite(n)) return "—";
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(2)}K`;
  return `$${n.toFixed(2)}`;
}

export function formatClock(ts: number) {
  return new Date(ts).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
