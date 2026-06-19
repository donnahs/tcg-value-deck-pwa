# TCG Vault Price Lookup Patch

## Pick
Best idea to work on now: **TCG Vault Price Lookup**.

## Why
- App already exists and runs on Matt's phone.
- Price lookup is the feature that makes it useful for real card decisions.
- Monetisation path is clear: affiliate-ready external links first, reliable APIs later.
- Avoids rabbit holes: no scraping, no fake Riftbound pricing.

## Scope for this session
1. Extract price lookup URL builders into testable pure module.
2. Add tests for Pokémon/Riftbound/eBay/PriceCharting/TCGplayer/Magical Meta links.
3. Add a Price Lookup tab to the PWA.
4. Add affiliate-ready settings fields stored locally only.
5. Build and smoke verify.

## Guardrails
- No fake prices.
- No scraping.
- No committing fake affiliate IDs.
- External lookup buttons are acceptable MVP.
- Keep mobile-first.
