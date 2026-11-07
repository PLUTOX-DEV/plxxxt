import { createServerFn } from "@tanstack/react-start";
import { CONTRACT, type Market } from "@/lib/market";

const ENDPOINT = `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT}`;

type Pair = {
  url?: string;
  priceUsd?: string;
  marketCap?: number;
  fdv?: number;
  liquidity?: { usd?: number };
  volume?: { h24?: number };
  txns?: { h24?: { buys?: number; sells?: number } };
  priceChange?: { h24?: number };
  pairCreatedAt?: number;
  baseToken?: { name?: string; symbol?: string };
};

export const getMarket = createServerFn({ method: "GET" }).handler(async (): Promise<Market> => {
  const res = await fetch(ENDPOINT, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`Market feed failed (${res.status})`);
  const body = (await res.json()) as { pairs?: Pair[] };
  const pair = body.pairs?.[0];
  const price = Number(pair?.priceUsd);
  if (!pair || !Number.isFinite(price) || price <= 0) {
    throw new Error("No live pair for this contract");
  }
  const change = pair.priceChange?.h24;
  return {
    name: pair.baseToken?.name || "Bad Luck Coin",
    symbol: pair.baseToken?.symbol || "BLC",
    price,
    marketCap: pair.marketCap ?? pair.fdv ?? 0,
    fdv: pair.fdv ?? 0,
    volume24h: pair.volume?.h24 ?? 0,
    buys24h: pair.txns?.h24?.buys ?? 0,
    sells24h: pair.txns?.h24?.sells ?? 0,
    liquidity: pair.liquidity?.usd ?? null,
    change24h: typeof change === "number" ? change : null,
    createdAt: pair.pairCreatedAt ?? Date.now(),
    pairUrl: pair.url || "",
  };
});
