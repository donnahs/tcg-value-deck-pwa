# TCG Vault PWA Build Plan

## Goal
Build a standalone phone-first PWA for Pokémon + Riftbound deck building and card value tracking.

## Scope for this build
- Vite app scaffold.
- Mobile-first UI.
- Pokémon card search via PokémonTCG API.
- Local deck builder with quantity controls and localStorage.
- Deck value total and expensive-card callouts.
- Riftbound value tracker using seed cards plus manual price edits.
- Import/export deck JSON/text.
- PWA manifest, icon, service worker.
- Verified local build and browser smoke test.

## Constraints
- Keep this standalone. No shared folders.
- Do not claim live Riftbound pricing is solved.
- No OCR in v1.
- No account/cloud sync in v1.

## Implementation steps
1. Create package.json/Vite files.
2. Add public PWA assets.
3. Implement data model and app logic in `src/main.js`.
4. Implement styles in `src/styles.css`.
5. Run `npm install` and `npm run build`.
6. Serve locally and browser-smoke test.
7. Save screenshot and final report.

## Verification checks
- `npm run build` succeeds.
- `node --check src/main.js` succeeds.
- Local page loads.
- Main tab buttons render.
- Pokémon search UI exists.
- Riftbound seeded cards render.
- Deck localStorage path works.
