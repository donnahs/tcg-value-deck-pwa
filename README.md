# TCG Vault PWA

Phone-first Pokémon + Riftbound deck builder and card value tracker.

## What works in v0.1

- Mobile-first PWA shell.
- Pokémon live card search via `https://api.pokemontcg.io/v2/cards`.
- Add Pokémon cards to a local deck.
- Riftbound seed watchlist using researched PriceCharting values.
- Manual price override for deck/watchlist cards.
- Deck count and estimated value.
- High-value callouts.
- Import/export JSON.
- Copy deck text.
- LocalStorage persistence.
- PWA manifest, icons, and service worker.

## Run locally

```bash
npm install
npm run dev
```

Local:

```txt
http://127.0.0.1:8190
```

LAN on this machine during build:

```txt
http://192.168.0.7:8190
```

## Verify

```bash
npm run check
npm run build
node scripts/smoke.mjs
```

## Important limitations

- Pokémon search is live.
- Riftbound pricing is **not** live in v0.1. It uses seed/manual values plus links to external sources.
- No OCR/card scanner yet.
- No cloud sync/accounts yet.
- Price values are estimates. Verify expensive cards before selling.

## Best next feature

Add a "manual card entry" form so Matt can quickly enter Riftbound pulls that are not in the seed list.
