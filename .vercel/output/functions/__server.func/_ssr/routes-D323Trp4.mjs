import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as formatPrice, i as formatClock, n as DEX_URL, o as formatUsd, r as PUMP_URL, t as CONTRACT } from "./market-QL6bpQyB.mjs";
import { a as Copy, i as ExternalLink, n as Skull, r as Flame } from "../_libs/lucide-react.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D323Trp4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LiveChart({ market, ticks, error }) {
	const change = market?.change24h;
	const up = (change ?? 0) >= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "chart",
		className: "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.22em] text-muted uppercase",
				children: "Live tape"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold tracking-wide text-fg sm:text-4xl",
				children: "The chart does not care"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-bold text-gold gold-glow sm:text-4xl",
					children: market ? formatPrice(market.price) : "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: up ? "text-sm font-semibold text-flame" : "text-sm font-semibold text-danger",
					children: market ? change == null ? "24h flat" : `${up ? "+" : ""}${change.toFixed(2)}% 24h` : error ? "feed down" : "loading"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flame-ring rounded-xl border border-border bg-surface p-3 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2 text-xs tracking-widest text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative flex size-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-flame opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-flame" })]
				}), "DexScreener · Solana · pump.fun"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72 w-full sm:h-96",
				children: ticks.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: ticks,
						margin: {
							top: 8,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "luckFill",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "#39d353",
										stopOpacity: .45
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "70%",
										stopColor: "#e8b84a",
										stopOpacity: .08
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "#050505",
										stopOpacity: 0
									})
								]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "time",
								tick: {
									fill: "#a89f8a",
									fontSize: 11
								},
								axisLine: false,
								tickLine: false,
								minTickGap: 28
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								domain: ["auto", "auto"],
								tick: {
									fill: "#a89f8a",
									fontSize: 11
								},
								axisLine: false,
								tickLine: false,
								width: 88,
								tickFormatter: (v) => formatPrice(v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "#10100c",
									border: "1px solid #2a281f",
									borderRadius: 12,
									color: "#f4ecd8"
								},
								labelStyle: { color: "#a89f8a" },
								formatter: (value) => [formatPrice(Number(value)), "Price"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "price",
								stroke: "#39d353",
								strokeWidth: 2,
								fill: "url(#luckFill)",
								isAnimationActive: false
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full items-center justify-center text-sm text-muted",
					children: error ?? "Opening the live tape…"
				})
			})]
		})]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getMarket = createServerFn({ method: "GET" }).handler(createSsrRpc("6fdfbdff8b779cdd80db4492138674f9ab3498f6077332c5892ed94e3f737172"));
var RULES = [
	{
		k: "01",
		t: "No luck",
		d: "If you came looking for a safety net, you already lost."
	},
	{
		k: "02",
		t: "No guarantees",
		d: "The chart can turn. That is the entire product."
	},
	{
		k: "03",
		t: "No refunds",
		d: "Once the black drip hits, it does not wipe off."
	},
	{
		k: "04",
		t: "Unlucky together",
		d: "Other coins kneel. The club stays standing."
	}
];
var KNEELERS = [
	"BTC",
	"ETH",
	"SOL",
	"DOGE",
	"PEPE",
	"WIF"
];
function Home() {
	const [market, setMarket] = (0, import_react.useState)(null);
	const [ticks, setTicks] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let stop = false;
		async function load() {
			try {
				const next = await getMarket();
				if (stop) return;
				setMarket(next);
				setError(null);
				setTicks((prev) => {
					const now = {
						time: formatClock(Date.now()),
						price: next.price,
						ts: Date.now()
					};
					if (prev.length === 0) return [{
						time: formatClock(next.createdAt),
						price: next.price,
						ts: next.createdAt
					}, now];
					const last = prev[prev.length - 1];
					if (last && last.price === next.price) return [...prev.slice(0, -1), now];
					return [...prev.slice(-160), now];
				});
			} catch (err) {
				if (!stop) setError(err instanceof Error ? err.message : "Market feed failed");
			}
		}
		load();
		const id = window.setInterval(() => void load(), 15e3);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-border/80 bg-bg/80 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 font-display text-sm font-bold tracking-[0.18em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skull, {
								className: "size-5 text-gold",
								"aria-hidden": true
							}), "Bad Luck"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm text-muted sm:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#chart",
									className: "hover:text-fg",
									children: "Chart"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#kneel",
									className: "hover:text-fg",
									children: "Kneel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#club",
									className: "hover:text-fg",
									children: "Club"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copyCa,
							className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 bg-surface px-4 text-sm font-medium text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								className: "size-4",
								"aria-hidden": true
							}), copied ? "Copied" : "Copy CA"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame-dim/30 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-flame uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
									className: "size-3.5",
									"aria-hidden": true
								}), market ? `${market.symbol} · Solana` : "Global club of losers"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl leading-[0.95] font-black tracking-wide text-fg sm:text-7xl",
								children: ["Bad Luck", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-gold gold-glow",
									children: "Coin"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg leading-relaxed text-muted",
								children: "No luck. No guarantees. No refunds. Live price from the pump.fun pair. Other coins kneel. This one just prints the tape."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-end gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.2em] text-muted uppercase",
									children: "Live price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl font-bold text-fg sm:text-5xl",
									children: market ? formatPrice(market.price) : "—"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: up ? "pb-1 text-lg font-semibold text-flame" : "pb-1 text-lg font-semibold text-danger",
									children: market ? change == null ? "24h flat" : `${up ? "+" : ""}${change.toFixed(2)}%` : "…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 grid grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Mkt cap",
										value: market ? formatUsd(market.marketCap) : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "24h vol",
										value: market ? formatUsd(market.volume24h) : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "24h txs",
										value: market ? txns.toLocaleString() : "—"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PUMP_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-bg",
									children: ["Pump.fun", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "size-4",
										"aria-hidden": true
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: DEX_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-semibold text-fg",
									children: ["DexScreener", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										className: "size-4",
										"aria-hidden": true
									})]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto w-full max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-6 rounded-full bg-flame/20 blur-3xl",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/bad-luck-coin.jpg",
								alt: "Golden cracked skull coin ringed in green fire with black drip",
								className: "relative w-full rounded-full flame-ring"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveChart, {
						market,
						ticks,
						error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "kneel",
						className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold sm:text-4xl",
								children: "They kneel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-muted",
								children: "One coin takes the room. Everyone else learns the posture."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
								children: KNEELERS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex min-h-24 flex-col items-center justify-center rounded-xl border border-border bg-surface",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-bold text-muted",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-widest text-flame uppercase",
										children: "kneeling"
									})]
								}, name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "club",
						className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold sm:text-4xl",
								children: "Club rules"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: "At least we are unlucky together."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-border bg-surface p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm tracking-[0.2em] text-gold",
											children: rule.k
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl font-bold",
											children: rule.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-muted",
											children: rule.d
										})
									]
								}, rule.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyCa,
								className: "mt-8 flex w-full items-center justify-between gap-3 rounded-xl border border-gold/30 bg-surface-2 px-4 py-4 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs tracking-[0.18em] text-muted uppercase",
										children: "Contract"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate font-mono text-sm text-fg sm:text-base",
										children: CONTRACT
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-bg",
									children: copied ? "Copied" : "Copy"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted",
								children: "Price, market cap, and volume refresh from DexScreener every 15 seconds. The line stays flat until a real trade moves it. Not financial advice."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border px-4 py-8 text-center text-sm text-muted",
				children: [
					"Bad Luck Coin · ",
					market?.symbol ?? "BLC",
					" · the global club of losers"
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] tracking-[0.16em] text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-lg font-bold text-fg sm:text-xl",
			children: value
		})]
	});
}
//#endregion
export { Home as component };
