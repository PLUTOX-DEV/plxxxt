import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatPrice, type Market, type Tick } from "@/lib/market";

export function LiveChart({
  market,
  ticks,
  error,
}: {
  market: Market | null;
  ticks: Tick[];
  error: string | null;
}) {
  const change = market?.change24h;
  const up = (change ?? 0) >= 0;

  return (
    <section id="chart" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Live tape
          </p>
          <h2 className="font-display text-3xl font-bold tracking-wide text-fg sm:text-4xl">
            The chart does not care
          </h2>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl font-bold text-gold gold-glow sm:text-4xl">
            {market ? formatPrice(market.price) : "—"}
          </p>
          <p className={up ? "text-sm font-semibold text-flame" : "text-sm font-semibold text-danger"}>
            {market
              ? change == null
                ? "24h flat"
                : `${up ? "+" : ""}${change.toFixed(2)}% 24h`
              : error
                ? "feed down"
                : "loading"}
          </p>
        </div>
      </div>

      <div className="flame-ring rounded-xl border border-border bg-surface p-3 sm:p-5">
        <div className="mb-3 flex items-center gap-2 text-xs tracking-widest text-muted uppercase">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-flame opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-flame" />
          </span>
          DexScreener · Solana · pump.fun
        </div>
        <div className="h-72 w-full sm:h-96">
          {ticks.length > 1 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ticks} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="luckFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#39d353" stopOpacity={0.45} />
                    <stop offset="70%" stopColor="#e8b84a" stopOpacity={0.08} />
                    <stop offset="100%" stopColor="#050505" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="time"
                  tick={{ fill: "#a89f8a", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  minTickGap={28}
                />
                <YAxis
                  domain={["auto", "auto"]}
                  tick={{ fill: "#a89f8a", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={88}
                  tickFormatter={(v: number) => formatPrice(v)}
                />
                <Tooltip
                  contentStyle={{
                    background: "#10100c",
                    border: "1px solid #2a281f",
                    borderRadius: 12,
                    color: "#f4ecd8",
                  }}
                  labelStyle={{ color: "#a89f8a" }}
                  formatter={(value) => [formatPrice(Number(value)), "Price"]}
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="#39d353"
                  strokeWidth={2}
                  fill="url(#luckFill)"
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              {error ?? "Opening the live tape…"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
