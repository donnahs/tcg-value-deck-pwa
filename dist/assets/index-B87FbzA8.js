(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`tcg-vault-state-v1`,t=[{label:`PriceCharting Origins`,url:`https://www.pricecharting.com/console/riftbound-origins`},{label:`TCGplayer Riftbound`,url:`https://www.tcgplayer.com/categories/trading-and-collectible-card-games/riftbound-league-of-legends-trading-card-game/price-guides`},{label:`Magical Meta Market Watch`,url:`https://magicalmeta.ink/riftbound`},{label:`Riftbound.gg Prices`,url:`https://riftbound.gg/prices`}],n=[{id:`rift-ogn-303-signature`,game:`riftbound`,name:`Ahri - Nine-Tailed Fox [Signature]`,set:`Origins`,number:`303`,rarity:`Signature`,image:``,quantity:1,price:2514.16,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-299-signature`,game:`riftbound`,name:`Kai'Sa - Daughter of the Void [Signature]`,set:`Origins`,number:`299`,rarity:`Signature`,image:``,quantity:1,price:2405.84,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-301-signature`,game:`riftbound`,name:`Jinx - Loose Cannon [Signature]`,set:`Origins`,number:`301`,rarity:`Signature`,image:``,quantity:1,price:865.2,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-308`,game:`riftbound`,name:`Viktor - Herald of the Arcane`,set:`Origins`,number:`308`,rarity:`Champion`,image:``,quantity:1,price:79.79,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Non-signature champion seed.`},{id:`rift-ogn-booster-display`,game:`riftbound`,name:`Origins Booster Display`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:180.36,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`},{id:`rift-ogn-proving-grounds`,game:`riftbound`,name:`Proving Grounds Box Set`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:62.58,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`}],r={activeTab:`dashboard`,searchQuery:`charizard`,searchStatus:`Ready. Search Pokémon cards or add Riftbound seeds.`,pokemonResults:[],deck:{id:crypto.randomUUID(),name:`Weekend Test Deck`,game:`pokemon`,targetSize:60,cards:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},watchlist:n,lastUpdated:new Date().toISOString()},i=a();function a(){try{let t=localStorage.getItem(e);if(!t)return structuredClone(r);let i=JSON.parse(t);return{...structuredClone(r),...i,deck:{...structuredClone(r).deck,...i.deck||{}},watchlist:Array.isArray(i.watchlist)&&i.watchlist.length?i.watchlist:n}}catch(e){return console.warn(`Failed to load state, using default.`,e),structuredClone(r)}}function o(){i.lastUpdated=new Date().toISOString(),i.deck.updatedAt=i.lastUpdated,localStorage.setItem(e,JSON.stringify(i))}function s(e,t=`USD`){let n=Number(e||0);return new Intl.NumberFormat(`en-AU`,{style:`currency`,currency:t,maximumFractionDigits:n>100?0:2}).format(n)}function c(){return i.deck.cards.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function l(){return i.watchlist.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function u(){return i.deck.cards.reduce((e,t)=>e+Number(t.quantity||1),0)}function d(e){let t=e.tcgplayer?.prices||{};for(let e of[`holofoil`,`normal`,`reverseHolofoil`,`1stEditionHolofoil`,`unlimitedHolofoil`]){if(t[e]?.market)return t[e].market;if(t[e]?.mid)return t[e].mid;if(t[e]?.low)return t[e].low}let n=e.cardmarket?.prices;return n?.trendPrice?n.trendPrice:n?.averageSellPrice?n.averageSellPrice:0}function f(e){let t=d(e);return{id:e.id,game:`pokemon`,name:e.name,set:e.set?.name||``,number:e.number||``,rarity:e.rarity||`Unknown`,image:e.images?.small||``,quantity:1,price:t,currency:e.cardmarket?.prices?.trendPrice&&!e.tcgplayer?.prices?`EUR`:`USD`,source:`pokemon-tcg-api`,sourceUrl:e.tcgplayer?.url||e.cardmarket?.url||`https://pokemontcg.io`,notes:e.legalities?.standard?`Standard: ${e.legalities.standard}`:``}}function p(e){i.activeTab=e,o(),j()}function m(e){let t=i.deck.cards.find(t=>t.id===e.id);t?t.quantity+=1:i.deck.cards.unshift({...e,quantity:1}),i.searchStatus=`Added ${e.name} to deck.`,o(),j()}function h(e){let t=i.watchlist.find(t=>t.id===e.id);t?t.quantity+=1:i.watchlist.unshift({...e,quantity:1}),i.searchStatus=`Added ${e.name} to watchlist.`,o(),j()}function g(e,t,n){let r=(e===`deck`?i.deck.cards:i.watchlist).find(e=>e.id===t);r&&(r.quantity=Math.max(1,Number(r.quantity||1)+n),o(),j())}function _(e,t){e===`deck`&&(i.deck.cards=i.deck.cards.filter(e=>e.id!==t)),e===`watchlist`&&(i.watchlist=i.watchlist.filter(e=>e.id!==t)),o(),j()}function v(e,t,n){let r=(e===`deck`?i.deck.cards:i.watchlist).find(e=>e.id===t);r&&(r.price=Number(n||0),r.source=r.source||`manual`,o(),j())}async function y(e){e?.preventDefault();let t=i.searchQuery.trim();if(!t)return;i.searchStatus=`Searching PokémonTCG API...`,j();let n=new URL(`https://api.pokemontcg.io/v2/cards`);n.searchParams.set(`q`,`name:${t.replaceAll(`"`,``)}*`),n.searchParams.set(`pageSize`,`18`),n.searchParams.set(`orderBy`,`-set.releaseDate,name`),n.searchParams.set(`select`,`id,name,set,number,rarity,images,tcgplayer,cardmarket,legalities`);try{let e=await fetch(n);if(!e.ok)throw Error(`API returned ${e.status}`);let r=await e.json();i.pokemonResults=(r.data||[]).map(f),i.searchStatus=`Found ${i.pokemonResults.length} Pokémon cards for “${t}”.`}catch(e){i.searchStatus=`Search failed: ${e.message}. Try again or use manual Riftbound tracking.`}o(),j()}function b(){let e=new Blob([JSON.stringify(i,null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`tcg-vault-export-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(t)}function x(){let e=[`${i.deck.name} (${i.deck.game})`,`${u()} / ${i.deck.targetSize} cards`,`Estimated value: ${s(c())}`,``,...i.deck.cards.map(e=>`${e.quantity} ${e.name} — ${e.set} #${e.number} — ${s(e.price,e.currency)}`)];navigator.clipboard?.writeText(e.join(`
`)),i.searchStatus=`Deck text copied to clipboard.`,o(),j()}function S(e){try{let t=JSON.parse(e);if(!t.deck||!Array.isArray(t.watchlist))throw Error(`Missing deck/watchlist fields.`);i={...structuredClone(r),...t},o(),j()}catch(e){i.searchStatus=`Import failed: ${e.message}`,j()}}function C(){confirm(`Reset local TCG Vault data?`)&&(localStorage.removeItem(e),i=structuredClone(r),o(),j())}function w(e,t){let n=Number(e.price||0)*Number(e.quantity||1),r=e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:`<div class="fallback-card">${e.game===`riftbound`?`RIFT`:`TCG`}</div>`,i=e.sourceUrl?`<a href="${e.sourceUrl}" target="_blank" rel="noreferrer">${e.source}</a>`:e.source;return`
    <article class="card-row ${n>100?`hot`:``}">
      <div class="thumb">${r}</div>
      <div class="card-main">
        <div class="card-title">${e.name}</div>
        <div class="card-meta">${e.set||`Unknown set`} • #${e.number||`-`} • ${e.rarity||`Unknown`}</div>
        <div class="card-meta">Source: ${i||`manual`} ${n>100?`• high value`:``}</div>
        ${e.notes?`<div class="note">${e.notes}</div>`:``}
        ${t?`
          <div class="controls">
            <button data-action="dec" data-collection="${t}" data-id="${e.id}">−</button>
            <strong>${e.quantity||1}</strong>
            <button data-action="inc" data-collection="${t}" data-id="${e.id}">+</button>
            <label class="price-label">${e.currency||`USD`} <input type="number" min="0" step="0.01" value="${e.price||0}" data-action="price" data-collection="${t}" data-id="${e.id}" /></label>
            <button class="ghost danger" data-action="remove" data-collection="${t}" data-id="${e.id}">Remove</button>
          </div>`:``}
      </div>
      <div class="value-box">
        <span>${s(e.price,e.currency)}</span>
        <strong>${s(n,e.currency)}</strong>
      </div>
    </article>
  `}function T(e){return`
    <article class="result-card">
      ${e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:``}
      <div>
        <h3>${e.name}</h3>
        <p>${e.set} • #${e.number} • ${e.rarity}</p>
        <p class="price">${s(e.price,e.currency)}</p>
        <div class="mini-actions">
          <button data-action="add-deck" data-id="${e.id}">Add to deck</button>
          <button class="ghost" data-action="add-watch" data-id="${e.id}">Watch</button>
        </div>
      </div>
    </article>
  `}function E(){let e=[...i.deck.cards,...i.watchlist].filter(e=>Number(e.price||0)*Number(e.quantity||1)>=100).sort((e,t)=>Number(t.price||0)*Number(t.quantity||1)-Number(e.price||0)*Number(e.quantity||1)).slice(0,5);return`
    <section class="hero">
      <div>
        <p class="eyebrow">Phone-first TCG tool</p>
        <h1>TCG Vault</h1>
        <p>Build decks. Track value. Keep Riftbound pricing honest with manual verification.</p>
      </div>
      <button data-tab="search">Search cards</button>
    </section>

    <section class="stats-grid">
      <div class="stat"><span>Deck cards</span><strong>${u()} / ${i.deck.targetSize}</strong></div>
      <div class="stat"><span>Deck value</span><strong>${s(c())}</strong></div>
      <div class="stat"><span>Watchlist value</span><strong>${s(l())}</strong></div>
      <div class="stat"><span>Saved cards</span><strong>${i.deck.cards.length+i.watchlist.length}</strong></div>
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
      ${e.length?e.map(e=>w(e,``)).join(``):`<p class="muted">No high-value cards yet.</p>`}
    </section>
  `}function D(){return`
    <section class="panel">
      <h2>Pokémon search</h2>
      <form id="search-form" class="search-form">
        <input id="pokemon-query" value="${i.searchQuery}" placeholder="charizard, pikachu, dragapult..." />
        <button type="submit">Search</button>
      </form>
      <p class="status">${i.searchStatus}</p>
      <div class="results-grid">
        ${i.pokemonResults.map(T).join(``)||`<p class="muted">Search results appear here.</p>`}
      </div>
    </section>
  `}function O(){return`
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Deck builder</h2>
          <p>${u()} / ${i.deck.targetSize} cards • ${s(c())}</p>
        </div>
        <button class="ghost" data-action="copy-deck">Copy deck text</button>
      </div>
      <label class="field">Deck name <input id="deck-name" value="${i.deck.name}" /></label>
      <div class="stack">
        ${i.deck.cards.map(e=>w(e,`deck`)).join(``)||`<p class="muted">Add cards from search or Riftbound tab.</p>`}
      </div>
    </section>
  `}function k(){return`
    <section class="panel warning-panel">
      <h2>Riftbound values</h2>
      <p>V1 uses seed prices and manual overrides. This avoids fragile scraping and fake precision.</p>
      <div class="source-list">
        ${t.map(e=>`<a href="${e.url}" target="_blank" rel="noreferrer">${e.label}</a>`).join(``)}
      </div>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Watchlist</h2>
          <p>${i.watchlist.length} lines • ${s(l())}</p>
        </div>
        <button data-action="seed-riftbound">Restore seeds</button>
      </div>
      <div class="stack">
        ${i.watchlist.map(e=>w(e,`watchlist`)).join(``)}
      </div>
    </section>
  `}function A(){return`
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
  `}function j(){let e=document.querySelector(`#app`),t=[[`dashboard`,`Dashboard`],[`search`,`Search`],[`deck`,`Deck`],[`riftbound`,`Riftbound`],[`export`,`Export`]],n={dashboard:E,search:D,deck:O,riftbound:k,export:A}[i.activeTab]();e.innerHTML=`
    <header class="topbar">
      <div>
        <strong>TCG Vault</strong>
        <span>Pokémon + Riftbound</span>
      </div>
      <span class="pill">PWA v0.1</span>
    </header>
    <nav class="tabs">
      ${t.map(([e,t])=>`<button class="${i.activeTab===e?`active`:``}" data-tab="${e}">${t}</button>`).join(``)}
    </nav>
    <main>${n}</main>
  `,M()}function M(){document.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>p(e.dataset.tab))),document.querySelector(`#search-form`)?.addEventListener(`submit`,y),document.querySelector(`#pokemon-query`)?.addEventListener(`input`,e=>{i.searchQuery=e.target.value,o()}),document.querySelector(`#deck-name`)?.addEventListener(`input`,e=>{i.deck.name=e.target.value,o()}),document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,t=>{let r=e.dataset.action,a=e.dataset.id,s=e.dataset.collection,c=i.pokemonResults.find(e=>e.id===a);r===`add-deck`&&c&&m(c),r===`add-watch`&&c&&h(c),r===`inc`&&g(s,a,1),r===`dec`&&g(s,a,-1),r===`remove`&&_(s,a),r===`copy-deck`&&x(),r===`export-json`&&b(),r===`reset`&&C(),r===`seed-riftbound`&&(i.watchlist=structuredClone(n),o(),j()),r===`import-json`&&S(document.querySelector(`#import-json`)?.value||``),t.preventDefault()})}),document.querySelectorAll(`input[data-action="price"]`).forEach(e=>{e.addEventListener(`change`,()=>v(e.dataset.collection,e.dataset.id,e.value))})}`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(e=>console.warn(`Service worker registration failed`,e))}),j();