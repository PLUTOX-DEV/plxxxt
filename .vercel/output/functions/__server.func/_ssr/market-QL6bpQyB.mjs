//#region node_modules/.nitro/vite/services/ssr/assets/market-QL6bpQyB.js
var CONTRACT = "okT9PADFVhh6vB9yxtpPSsuuqiNHJPfZDrCsQrxpump";
var DEX_URL = "https://dexscreener.com/solana/eyzqn8cq8y5qhs1bbn5nqx9p8zevxg9cbecrufkqzbsn";
var PUMP_URL = `https://pump.fun/coin/${CONTRACT}`;
function formatPrice(n) {
	if (!Number.isFinite(n) || n <= 0) return "—";
	if (n >= 1) return `$${n.toFixed(4)}`;
	if (n >= .01) return `$${n.toFixed(5)}`;
	const digits = Math.min(12, Math.max(6, Math.ceil(-Math.log10(n)) + 3));
	return `$${n.toFixed(digits).replace(/0+$/, "").replace(/\.$/, "")}`;
}
function formatUsd(n) {
	if (!Number.isFinite(n)) return "—";
	if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
	if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
	if (n >= 1e3) return `$${(n / 1e3).toFixed(2)}K`;
	return `$${n.toFixed(2)}`;
}
function formatClock(ts) {
	return new Date(ts).toLocaleString([], {
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
//#endregion
export { formatPrice as a, formatClock as i, DEX_URL as n, formatUsd as o, PUMP_URL as r, CONTRACT as t };
