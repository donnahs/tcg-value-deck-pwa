import './styles.css';

const STORAGE_KEY = 'tcg-vault-state-v1';

const riftboundSources = [
  { label: 'PriceCharting Origins', url: 'https://www.pricecharting.com/console/riftbound-origins' },
  { label: 'TCGplayer Riftbound', url: 'https://www.tcgplayer.com/categories/trading-and-collectible-card-games/riftbound-league-of-legends-trading-card-game/price-guides' },
  { label: 'Magical Meta Market Watch', url: 'https://magicalmeta.ink/riftbound' },
  { label: 'Riftbound.gg Prices', url: 'https://riftbound.gg/prices' }
];

const seedRiftboundCards = [
  { id: 'rift-ogn-303-signature', game: 'riftbound', name: 'Ahri - Nine-Tailed Fox [Signature]', set: 'Origins', number: '303', rarity: 'Signature', image: '', quantity: 1, price: 2514.16, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'High-value signature seed. Verify before sale.' },
  { id: 'rift-ogn-299-signature', game: 'riftbound', name: "Kai'Sa - Daughter of the Void [Signature]", set: 'Origins', number: '299', rarity: 'Signature', image: '', quantity: 1, price: 2405.84, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'High-value signature seed. Verify before sale.' },
  { id: 'rift-ogn-301-signature', game: 'riftbound', name: 'Jinx - Loose Cannon [Signature]', set: 'Origins', number: '301', rarity: 'Signature', image: '', quantity: 1, price: 865.20, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'High-value signature seed. Verify before sale.' },
  { id: 'rift-ogn-308', game: 'riftbound', name: 'Viktor - Herald of the Arcane', set: 'Origins', number: '308', rarity: 'Champion', image: '', quantity: 1, price: 79.79, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'Non-signature champion seed.' },
  { id: 'rift-ogn-booster-display', game: 'riftbound', name: 'Origins Booster Display', set: 'Origins', number: 'sealed', rarity: 'Sealed', image: '', quantity: 1, price: 180.36, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'Sealed product seed.' },
  { id: 'rift-ogn-proving-grounds', game: 'riftbound', name: 'Proving Grounds Box Set', set: 'Origins', number: 'sealed', rarity: 'Sealed', image: '', quantity: 1, price: 62.58, currency: 'USD', source: 'pricecharting', sourceUrl: 'https://www.pricecharting.com/console/riftbound-origins', notes: 'Sealed product seed.' }
];

const defaultState = {
  activeTab: 'dashboard',
  searchQuery: 'charizard',
  searchStatus: 'Ready. Search Pokémon cards or add Riftbound seeds.',
  pokemonResults: [],
  deck: {
    id: crypto.randomUUID(),
    name: 'Weekend Test Deck',
    game: 'pokemon',
    targetSize: 60,
    cards: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  watchlist: seedRiftboundCards,
  lastUpdated: new Date().toISOString()
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      deck: { ...structuredClone(defaultState).deck, ...(parsed.deck || {}) },
      watchlist: Array.isArray(parsed.watchlist) && parsed.watchlist.length ? parsed.watchlist : seedRiftboundCards
    };
  } catch (error) {
    console.warn('Failed to load state, using default.', error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  state.deck.updatedAt = state.lastUpdated;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function money(value, currency = 'USD') {
  const amount = Number(value || 0);
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency, maximumFractionDigits: amount > 100 ? 0 : 2 }).format(amount);
}

function deckTotal() {
  return state.deck.cards.reduce((sum, card) => sum + Number(card.price || 0) * Number(card.quantity || 1), 0);
}

function watchlistTotal() {
  return state.watchlist.reduce((sum, card) => sum + Number(card.price || 0) * Number(card.quantity || 1), 0);
}

function deckCount() {
  return state.deck.cards.reduce((sum, card) => sum + Number(card.quantity || 1), 0);
}

function cardPriceFromPokemon(card) {
  const tcg = card.tcgplayer?.prices || {};
  const variants = ['holofoil', 'normal', 'reverseHolofoil', '1stEditionHolofoil', 'unlimitedHolofoil'];
  for (const variant of variants) {
    if (tcg[variant]?.market) return tcg[variant].market;
    if (tcg[variant]?.mid) return tcg[variant].mid;
    if (tcg[variant]?.low) return tcg[variant].low;
  }
  const market = card.cardmarket?.prices;
  if (market?.trendPrice) return market.trendPrice;
  if (market?.averageSellPrice) return market.averageSellPrice;
  return 0;
}

function pokemonToVaultCard(card) {
  const price = cardPriceFromPokemon(card);
  return {
    id: card.id,
    game: 'pokemon',
    name: card.name,
    set: card.set?.name || '',
    number: card.number || '',
    rarity: card.rarity || 'Unknown',
    image: card.images?.small || '',
    quantity: 1,
    price,
    currency: card.cardmarket?.prices?.trendPrice && !card.tcgplayer?.prices ? 'EUR' : 'USD',
    source: 'pokemon-tcg-api',
    sourceUrl: card.tcgplayer?.url || card.cardmarket?.url || 'https://pokemontcg.io',
    notes: card.legalities?.standard ? `Standard: ${card.legalities.standard}` : ''
  };
}

function setTab(tab) {
  state.activeTab = tab;
  saveState();
  render();
}

function addCardToDeck(card) {
  const existing = state.deck.cards.find((item) => item.id === card.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.deck.cards.unshift({ ...card, quantity: 1 });
  }
  state.searchStatus = `Added ${card.name} to deck.`;
  saveState();
  render();
}

function addCardToWatchlist(card) {
  const existing = state.watchlist.find((item) => item.id === card.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.watchlist.unshift({ ...card, quantity: 1 });
  }
  state.searchStatus = `Added ${card.name} to watchlist.`;
  saveState();
  render();
}

function updateQuantity(collection, id, delta) {
  const list = collection === 'deck' ? state.deck.cards : state.watchlist;
  const card = list.find((item) => item.id === id);
  if (!card) return;
  card.quantity = Math.max(1, Number(card.quantity || 1) + delta);
  saveState();
  render();
}

function removeCard(collection, id) {
  if (collection === 'deck') state.deck.cards = state.deck.cards.filter((item) => item.id !== id);
  if (collection === 'watchlist') state.watchlist = state.watchlist.filter((item) => item.id !== id);
  saveState();
  render();
}

function updatePrice(collection, id, value) {
  const list = collection === 'deck' ? state.deck.cards : state.watchlist;
  const card = list.find((item) => item.id === id);
  if (!card) return;
  card.price = Number(value || 0);
  card.source = card.source || 'manual';
  saveState();
  render();
}

async function searchPokemon(event) {
  event?.preventDefault();
  const query = state.searchQuery.trim();
  if (!query) return;
  state.searchStatus = 'Searching PokémonTCG API...';
  render();
  const url = new URL('https://api.pokemontcg.io/v2/cards');
  url.searchParams.set('q', `name:${query.replaceAll('"', '')}*`);
  url.searchParams.set('pageSize', '18');
  url.searchParams.set('orderBy', '-set.releaseDate,name');
  url.searchParams.set('select', 'id,name,set,number,rarity,images,tcgplayer,cardmarket,legalities');
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API returned ${response.status}`);
    const payload = await response.json();
    state.pokemonResults = (payload.data || []).map(pokemonToVaultCard);
    state.searchStatus = `Found ${state.pokemonResults.length} Pokémon cards for “${query}”.`;
  } catch (error) {
    state.searchStatus = `Search failed: ${error.message}. Try again or use manual Riftbound tracking.`;
  }
  saveState();
  render();
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `tcg-vault-export-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function exportDeckText() {
  const lines = [
    `${state.deck.name} (${state.deck.game})`,
    `${deckCount()} / ${state.deck.targetSize} cards`,
    `Estimated value: ${money(deckTotal())}`,
    '',
    ...state.deck.cards.map((card) => `${card.quantity} ${card.name} — ${card.set} #${card.number} — ${money(card.price, card.currency)}`)
  ];
  navigator.clipboard?.writeText(lines.join('\n'));
  state.searchStatus = 'Deck text copied to clipboard.';
  saveState();
  render();
}

function importJson(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.deck || !Array.isArray(parsed.watchlist)) throw new Error('Missing deck/watchlist fields.');
    state = { ...structuredClone(defaultState), ...parsed };
    saveState();
    render();
  } catch (error) {
    state.searchStatus = `Import failed: ${error.message}`;
    render();
  }
}

function resetDemo() {
  if (!confirm('Reset local TCG Vault data?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);
  saveState();
  render();
}

function renderCard(card, collection) {
  const value = Number(card.price || 0) * Number(card.quantity || 1);
  const image = card.image ? `<img src="${card.image}" alt="${card.name}" loading="lazy" />` : `<div class="fallback-card">${card.game === 'riftbound' ? 'RIFT' : 'TCG'}</div>`;
  const source = card.sourceUrl ? `<a href="${card.sourceUrl}" target="_blank" rel="noreferrer">${card.source}</a>` : card.source;
  return `
    <article class="card-row ${value > 100 ? 'hot' : ''}">
      <div class="thumb">${image}</div>
      <div class="card-main">
        <div class="card-title">${card.name}</div>
        <div class="card-meta">${card.set || 'Unknown set'} • #${card.number || '-'} • ${card.rarity || 'Unknown'}</div>
        <div class="card-meta">Source: ${source || 'manual'} ${value > 100 ? '• high value' : ''}</div>
        ${card.notes ? `<div class="note">${card.notes}</div>` : ''}
        ${collection ? `
          <div class="controls">
            <button data-action="dec" data-collection="${collection}" data-id="${card.id}">−</button>
            <strong>${card.quantity || 1}</strong>
            <button data-action="inc" data-collection="${collection}" data-id="${card.id}">+</button>
            <label class="price-label">${card.currency || 'USD'} <input type="number" min="0" step="0.01" value="${card.price || 0}" data-action="price" data-collection="${collection}" data-id="${card.id}" /></label>
            <button class="ghost danger" data-action="remove" data-collection="${collection}" data-id="${card.id}">Remove</button>
          </div>` : ''}
      </div>
      <div class="value-box">
        <span>${money(card.price, card.currency)}</span>
        <strong>${money(value, card.currency)}</strong>
      </div>
    </article>
  `;
}

function renderSearchResult(card) {
  return `
    <article class="result-card">
      ${card.image ? `<img src="${card.image}" alt="${card.name}" loading="lazy" />` : ''}
      <div>
        <h3>${card.name}</h3>
        <p>${card.set} • #${card.number} • ${card.rarity}</p>
        <p class="price">${money(card.price, card.currency)}</p>
        <div class="mini-actions">
          <button data-action="add-deck" data-id="${card.id}">Add to deck</button>
          <button class="ghost" data-action="add-watch" data-id="${card.id}">Watch</button>
        </div>
      </div>
    </article>
  `;
}

function dashboard() {
  const expensive = [...state.deck.cards, ...state.watchlist]
    .filter((card) => Number(card.price || 0) * Number(card.quantity || 1) >= 100)
    .sort((a, b) => Number(b.price || 0) * Number(b.quantity || 1) - Number(a.price || 0) * Number(a.quantity || 1))
    .slice(0, 5);
  return `
    <section class="hero">
      <div>
        <p class="eyebrow">Phone-first TCG tool</p>
        <h1>TCG Vault</h1>
        <p>Build decks. Track value. Keep Riftbound pricing honest with manual verification.</p>
      </div>
      <button data-tab="search">Search cards</button>
    </section>

    <section class="stats-grid">
      <div class="stat"><span>Deck cards</span><strong>${deckCount()} / ${state.deck.targetSize}</strong></div>
      <div class="stat"><span>Deck value</span><strong>${money(deckTotal())}</strong></div>
      <div class="stat"><span>Watchlist value</span><strong>${money(watchlistTotal())}</strong></div>
      <div class="stat"><span>Saved cards</span><strong>${state.deck.cards.length + state.watchlist.length}</strong></div>
    </section>

    <section class="panel">
      <h2>Fast rules</h2>
      <ul class="checklist">
        <li>Pokémon search is live via PokémonTCG API.</li>
        <li>Riftbound v1 is seed + manual prices, not live API.</li>
        <li>Verify any card over $100 before selling.</li>
        <li>Use export before wiping browser data.</li>
      </ul>
    </section>

    <section class="panel">
      <h2>High-value callouts</h2>
      ${expensive.length ? expensive.map((card) => renderCard(card, '')).join('') : '<p class="muted">No high-value cards yet.</p>'}
    </section>
  `;
}

function searchTab() {
  return `
    <section class="panel">
      <h2>Pokémon search</h2>
      <form id="search-form" class="search-form">
        <input id="pokemon-query" value="${state.searchQuery}" placeholder="charizard, pikachu, dragapult..." />
        <button type="submit">Search</button>
      </form>
      <p class="status">${state.searchStatus}</p>
      <div class="results-grid">
        ${state.pokemonResults.map(renderSearchResult).join('') || '<p class="muted">Search results appear here.</p>'}
      </div>
    </section>
  `;
}

function deckTab() {
  return `
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Deck builder</h2>
          <p>${deckCount()} / ${state.deck.targetSize} cards • ${money(deckTotal())}</p>
        </div>
        <button class="ghost" data-action="copy-deck">Copy deck text</button>
      </div>
      <label class="field">Deck name <input id="deck-name" value="${state.deck.name}" /></label>
      <div class="stack">
        ${state.deck.cards.map((card) => renderCard(card, 'deck')).join('') || '<p class="muted">Add cards from search or Riftbound tab.</p>'}
      </div>
    </section>
  `;
}

function riftboundTab() {
  return `
    <section class="panel warning-panel">
      <h2>Riftbound values</h2>
      <p>V1 uses seed prices and manual overrides. This avoids fragile scraping and fake precision.</p>
      <div class="source-list">
        ${riftboundSources.map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`).join('')}
      </div>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Watchlist</h2>
          <p>${state.watchlist.length} lines • ${money(watchlistTotal())}</p>
        </div>
        <button data-action="seed-riftbound">Restore seeds</button>
      </div>
      <div class="stack">
        ${state.watchlist.map((card) => renderCard(card, 'watchlist')).join('')}
      </div>
    </section>
  `;
}

function exportTab() {
  return `
    <section class="panel">
      <h2>Import / export</h2>
      <p>Use this before testing on another phone or clearing browser data.</p>
      <div class="button-row">
        <button data-action="export-json">Download JSON</button>
        <button class="ghost" data-action="copy-deck">Copy deck text</button>
        <button class="ghost danger" data-action="reset">Reset local data</button>
      </div>
      <label class="field">Paste previous JSON export
        <textarea id="import-json" rows="8" placeholder="Paste TCG Vault JSON here"></textarea>
      </label>
      <button data-action="import-json">Import JSON</button>
    </section>
  `;
}

function render() {
  const app = document.querySelector('#app');
  const tabs = [
    ['dashboard', 'Dashboard'],
    ['search', 'Search'],
    ['deck', 'Deck'],
    ['riftbound', 'Riftbound'],
    ['export', 'Export']
  ];
  const body = {
    dashboard,
    search: searchTab,
    deck: deckTab,
    riftbound: riftboundTab,
    export: exportTab
  }[state.activeTab]();

  app.innerHTML = `
    <header class="topbar">
      <div>
        <strong>TCG Vault</strong>
        <span>Pokémon + Riftbound</span>
      </div>
      <span class="pill">PWA v0.1</span>
    </header>
    <nav class="tabs">
      ${tabs.map(([id, label]) => `<button class="${state.activeTab === id ? 'active' : ''}" data-tab="${id}">${label}</button>`).join('')}
    </nav>
    <main>${body}</main>
  `;

  wireEvents();
}

function wireEvents() {
  document.querySelectorAll('[data-tab]').forEach((button) => button.addEventListener('click', () => setTab(button.dataset.tab)));
  document.querySelector('#search-form')?.addEventListener('submit', searchPokemon);
  document.querySelector('#pokemon-query')?.addEventListener('input', (event) => {
    state.searchQuery = event.target.value;
    saveState();
  });
  document.querySelector('#deck-name')?.addEventListener('input', (event) => {
    state.deck.name = event.target.value;
    saveState();
  });
  document.querySelectorAll('[data-action]').forEach((element) => {
    element.addEventListener('click', (event) => {
      const action = element.dataset.action;
      const id = element.dataset.id;
      const collection = element.dataset.collection;
      const resultCard = state.pokemonResults.find((card) => card.id === id);
      if (action === 'add-deck' && resultCard) addCardToDeck(resultCard);
      if (action === 'add-watch' && resultCard) addCardToWatchlist(resultCard);
      if (action === 'inc') updateQuantity(collection, id, 1);
      if (action === 'dec') updateQuantity(collection, id, -1);
      if (action === 'remove') removeCard(collection, id);
      if (action === 'copy-deck') exportDeckText();
      if (action === 'export-json') exportState();
      if (action === 'reset') resetDemo();
      if (action === 'seed-riftbound') {
        state.watchlist = structuredClone(seedRiftboundCards);
        saveState();
        render();
      }
      if (action === 'import-json') importJson(document.querySelector('#import-json')?.value || '');
      event.preventDefault();
    });
  });
  document.querySelectorAll('input[data-action="price"]').forEach((input) => {
    input.addEventListener('change', () => updatePrice(input.dataset.collection, input.dataset.id, input.value));
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => console.warn('Service worker registration failed', error));
  });
}

render();
