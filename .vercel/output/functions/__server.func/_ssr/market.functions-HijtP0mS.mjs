import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { t as CONTRACT } from "./market-QL6bpQyB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market.functions-HijtP0mS.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ENDPOINT = `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT}`;
var getMarket_createServerFn_handler = createServerRpc({
	id: "6fdfbdff8b779cdd80db4492138674f9ab3498f6077332c5892ed94e3f737172",
	name: "getMarket",
	filename: "src/lib/market.functions.ts"
}, (opts) => getMarket.__executeServer(opts));
var getMarket = createServerFn({ method: "GET" }).handler(getMarket_createServerFn_handler, async () => {
	const res = await fetch(ENDPOINT, { headers: { accept: "application/json" } });
	if (!res.ok) throw new Error(`Market feed failed (${res.status})`);
	const pair = (await res.json()).pairs?.[0];
	const price = Number(pair?.priceUsd);
	if (!pair || !Number.isFinite(price) || price <= 0) throw new Error("No live pair for this contract");
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
		pairUrl: pair.url || ""
	};
});
//#endregion
export { getMarket_createServerFn_handler };
