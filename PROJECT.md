# TCG Value Deck PWA

## Working name
**TCG Vault PWA**

## One-sentence idea
A phone-first PWA for building Pokémon and Riftbound decks, tracking deck/collection value, and quickly spotting expensive cards or budget replacements.

## Bucket
Fun / Motivation Project with Fast Cash potential.

## Disposition
**A — Do Now** if Matt wants a practical card tool this week.

Secondary:
- **C — Digital/Product angle** later as a downloadable deck/value tracker template or paid scanner/report pack.
- **E — Content angle** later via deck-value videos/posts.

## 8-point idea evaluation

### 1. What it is
A mobile-friendly card tool for Pokémon TCG and Riftbound. It lets Matt search cards, add them to decks, track deck size and estimated value, compare Pokémon/Riftbound card value signals, and save local deck/collection lists. V1 is a PWA that works on phone browser and installs to home screen.

### 2. Who would pay for it
Primary early user is Matt and local/testing players.
Potential pay users later:
- Pokémon collectors who want a simple phone deck/value tracker.
- Riftbound players/collectors because the market is newer and value tools are less mature.
- Local TCG sellers/flippers who want quick deck/value estimates.
- Beginner players wanting budget deck lists.

### 3. How it could make money
Start free/internal, then:
- Affiliate links to TCGplayer/Cardmarket/eBay sold listings.
- Paid deck/value PDF exports.
- $5-$15 AUD Gumroad template: collection tracker + deck builder pack.
- Later SaaS: $3-$7/month watchlist/alerts if data source is reliable.
- Content funnel: “most expensive Riftbound cards this week”, “budget Pokémon deck under $X”.

### 4. Fastest MVP version
Static PWA with:
- Pokémon card search using public Pokémon TCG API or TCGdex.
- Riftbound local seed list + price-source links.
- Deck builder with localStorage.
- Deck value estimate.
- Export/import deck text.
- Manual price override per card.
- Installable PWA manifest/service worker.

### 5. Tools needed
- Vite or plain HTML/JS/CSS.
- Pokémon TCG API: `https://api.pokemontcg.io/v2/cards`.
- TCGdex Pokémon price data: `https://api.tcgdex.net/v2/en/cards/{id}` where useful.
- Riftbound v1: local seed data + links to PriceCharting/TCGplayer/Magical Meta/Riftbound.gg.
- Optional later: JustTCG API for Riftbound + Pokémon prices if Matt gets an API key.
- PWA manifest + service worker.

### 6. First 3 actions
1. Build standalone PWA project under `~/projects/_active/tcg-value-deck-pwa`.
2. Implement Pokémon search/deck builder/value estimate with localStorage.
3. Add Riftbound seed/value tracker with manual price updates and external source links.

### 7. Risks/blockers
- Pokémon has workable public data; Riftbound does not have one clear free official API.
- Real-time pricing APIs may require API keys or have terms/rate limits.
- Scraping TCGplayer/PriceCharting directly is risky/fragile; use links/manual seed data unless an API is available.
- Do not over-promise OCR/scanning until verified.
- Price values are estimates, not financial advice.

### 8. Fit for Matt
Strong fit. It combines Pokémon, Riftbound, deck building, card value, phone-first tools, and potential content/affiliate/product angles. This is more fun than contractor SaaS and still has a possible pay path.

## Research findings

### Pokémon data
Best V1 sources:
- Pokémon TCG API supports card search at `GET https://api.pokemontcg.io/v2/cards`.
- It can be used without an API key, but limits are lower; API key improves reliability.
- Search syntax supports `q=name:charizard`, exact matching, ranges, nested fields, `pageSize`, `orderBy`, and `select`.
- TCGdex provides Pokémon card price fields from Cardmarket and TCGplayer in card responses, with pricing under a `pricing` field.

### Riftbound data
Reliable public source situation is weaker:
- PriceCharting has Riftbound Origins price guide with ungraded/graded/eBay-sold style values.
- TCGplayer has Riftbound price guides and product pages.
- Magical Meta has Riftbound Market Watch with TCGplayer market prices, hourly refresh, deck builder, and set explorer.
- Riftbound.gg has price pages but extraction failed in this environment.
- JustTCG says it supports Riftbound with 1K+ cards and 8K+ variants, updated within hours, but requires API key/account.

### Best data strategy
- Pokémon: live search and values first.
- Riftbound: local seed data + manual value override + links first.
- Later: plug in JustTCG/Pokemon-API/PokeWallet if Matt wants paid/reliable pricing.

## V1 feature set

### Tabs
1. Dashboard
2. Search
3. Deck Builder
4. Collection / Watchlist
5. Riftbound Values
6. Import / Export

### Card object
```json
{
  "id": "",
  "game": "pokemon|riftbound",
  "name": "",
  "set": "",
  "number": "",
  "rarity": "",
  "image": "",
  "quantity": 1,
  "price": 0,
  "currency": "USD",
  "source": "pokemon-tcg-api|tcgdex|manual|pricecharting|tcgplayer|justtcg",
  "sourceUrl": "",
  "notes": ""
}
```

### Deck object
```json
{
  "id": "",
  "name": "",
  "game": "pokemon|riftbound",
  "targetSize": 60,
  "cards": [],
  "createdAt": "",
  "updatedAt": ""
}
```

## Proposed build plan

### Phase 3 build after approval
1. Create Vite PWA scaffold.
2. Build phone-first UI.
3. Add Pokémon search via PokémonTCG API.
4. Add value extraction from Pokémon API fields where available.
5. Add local Riftbound seed data of high-value/example cards from research.
6. Add deck builder/localStorage.
7. Add deck value totals and expensive-card warnings.
8. Add manual price override.
9. Add import/export text.
10. Add PWA manifest/service worker/icons.
11. Run build and local server verification.
12. Capture screenshot and give LAN URL.

## Not in V1
- Full OCR/card scanner.
- Live Riftbound price API without key.
- User accounts/cloud sync.
- Payments/subscriptions.
- Auto-buy/sell recommendations.

## Verification plan
- `npm install`
- `npm run build`
- local server on a free port, likely `8190`
- curl check for app title
- browser smoke test:
  - tabs render
  - Pokémon search input exists
  - deck count/value sections exist
  - Riftbound seed values render
  - localStorage deck save works

## First monetisable angle later
**Riftbound Value Watchlist** because Riftbound is newer and price discovery is messy.

Possible first offer:
"Send me your Riftbound pulls/deck list and I’ll return a value/watchlist report with expensive cards, manual comps, and sell/hold notes. $9-$19 AUD pilot."
