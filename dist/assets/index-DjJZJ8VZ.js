(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return String(e||``).trim().replace(/\s+/g,` `)}function t(t){return e(t).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`card`}function n(t,n){let r=e(t);if(!r)return n;let i=Number(r);return Number.isFinite(i)?i:n}function r(t={}){return{game:e(t.game)||`pokemon`,name:e(t.name),set:e(t.set),number:e(t.number),rarity:e(t.rarity)||`Unknown`,price:n(t.price,0),currency:(e(t.currency)||`USD`).toUpperCase(),quantity:Math.max(1,Math.trunc(n(t.quantity,1))),sourceUrl:e(t.sourceUrl),notes:e(t.notes)}}function i(e={}){let n=r(e);if(!n.name)throw Error(`Card name is required`);if(n.price<0)throw Error(`Price cannot be negative`);let i=Date.now().toString(36);return{id:`manual-${t(n.game)}-${t(n.name)}-${t(n.number)}-${i}`,game:n.game,name:n.name,set:n.set,number:n.number,rarity:n.rarity,image:``,quantity:n.quantity,price:n.price,currency:n.currency,source:`manual`,sourceUrl:n.sourceUrl,notes:n.notes}}function a(e){return String(e||``).trim().replace(/[:|]/g,` `).replace(/\s+/g,` `)}function o(e){return encodeURIComponent(a(e))}function s(e,t){let n=a(t);if(!n)return e;let r=new URL(e);return r.searchParams.set(`utm_campaign`,`affiliate`),r.searchParams.set(`utm_medium`,`tcgvault`),r.searchParams.set(`utm_source`,n),r.toString()}function c({query:e,game:t=`pokemon`,tcgplayerAffiliate:n=``}={}){let r=a(e),i=o(r),c=t===`riftbound`,l=[];return r?c?(l.push({label:`Riftbound.gg prices`,note:`Riftbound-specific price page. Verify before buying/selling.`,url:`https://riftbound.gg/prices?search=${i}`}),l.push({label:`Magical Meta`,note:`Riftbound market/meta signal.`,url:`https://magicalmeta.ink/riftbound?search=${i}`}),l.push({label:`TCGplayer Riftbound`,note:`TCGplayer Riftbound category search/price guide.`,url:s(`https://www.tcgplayer.com/search/all/product?q=${i}+Riftbound`,n)}),l.push({label:`PriceCharting Riftbound`,note:`Origins sealed/singles price reference where available.`,url:`https://www.pricecharting.com/search-products?q=${i}+riftbound&type=prices`}),l.push({label:`eBay Riftbound search`,note:`Check real asking prices. Use sold filter manually.`,url:`https://www.ebay.com/sch/i.html?_nkw=${i}+riftbound+card`}),l):(l.push({label:`PokémonTCG API`,note:`Live card API JSON — useful for exact card IDs and market fields.`,url:`https://api.pokemontcg.io/v2/cards?q=name:${i}*&pageSize=10&select=id,name,set,number,rarity,tcgplayer,cardmarket`}),l.push({label:`TCGplayer search`,note:`Market listings. Add your affiliate source later if approved.`,url:s(`https://www.tcgplayer.com/search/pokemon/product?q=${i}`,n)}),l.push({label:`eBay search`,note:`Good reality check for current asking prices.`,url:`https://www.ebay.com/sch/i.html?_nkw=${i}+pokemon+card`}),l.push({label:`PriceCharting search`,note:`Useful for graded/raw historical price checks.`,url:`https://www.pricecharting.com/search-products?q=${i}&type=prices`}),l):l}var l=`tcg-vault-state-v1`,u=[{label:`PriceCharting Origins`,url:`https://www.pricecharting.com/console/riftbound-origins`},{label:`TCGplayer Riftbound`,url:`https://www.tcgplayer.com/categories/trading-and-collectible-card-games/riftbound-league-of-legends-trading-card-game/price-guides`},{label:`Magical Meta Market Watch`,url:`https://magicalmeta.ink/riftbound`},{label:`Riftbound.gg Prices`,url:`https://riftbound.gg/prices`}],d=[{id:`rift-ogn-303-signature`,game:`riftbound`,name:`Ahri - Nine-Tailed Fox [Signature]`,set:`Origins`,number:`303`,rarity:`Signature`,image:``,quantity:1,price:2514.16,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-299-signature`,game:`riftbound`,name:`Kai'Sa - Daughter of the Void [Signature]`,set:`Origins`,number:`299`,rarity:`Signature`,image:``,quantity:1,price:2405.84,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-301-signature`,game:`riftbound`,name:`Jinx - Loose Cannon [Signature]`,set:`Origins`,number:`301`,rarity:`Signature`,image:``,quantity:1,price:865.2,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-308`,game:`riftbound`,name:`Viktor - Herald of the Arcane`,set:`Origins`,number:`308`,rarity:`Champion`,image:``,quantity:1,price:79.79,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Non-signature champion seed.`},{id:`rift-ogn-booster-display`,game:`riftbound`,name:`Origins Booster Display`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:180.36,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`},{id:`rift-ogn-proving-grounds`,game:`riftbound`,name:`Proving Grounds Box Set`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:62.58,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`}],f={activeTab:`dashboard`,searchQuery:`charizard`,searchStatus:`Ready. Search Pokémon cards or add Riftbound seeds.`,priceLookup:{query:`Charizard ex 054`,game:`pokemon`,tcgplayerAffiliate:``},pokemonResults:[],deck:{id:crypto.randomUUID(),name:`Weekend Test Deck`,game:`pokemon`,targetSize:60,cards:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},watchlist:d,lastUpdated:new Date().toISOString()},p=m();function m(){try{let e=localStorage.getItem(l);if(!e)return structuredClone(f);let t=JSON.parse(e);return{...structuredClone(f),...t,priceLookup:{...structuredClone(f).priceLookup,...t.priceLookup||{}},deck:{...structuredClone(f).deck,...t.deck||{}},watchlist:Array.isArray(t.watchlist)&&t.watchlist.length?t.watchlist:d}}catch(e){return console.warn(`Failed to load state, using default.`,e),structuredClone(f)}}function h(){p.lastUpdated=new Date().toISOString(),p.deck.updatedAt=p.lastUpdated,localStorage.setItem(l,JSON.stringify(p))}function g(e,t=`USD`){let n=Number(e||0);return new Intl.NumberFormat(`en-AU`,{style:`currency`,currency:t,maximumFractionDigits:n>100?0:2}).format(n)}function _(){return p.deck.cards.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function v(){return p.watchlist.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function y(){return p.deck.cards.reduce((e,t)=>e+Number(t.quantity||1),0)}function b(e){let t=e.tcgplayer?.prices||{};for(let e of[`holofoil`,`normal`,`reverseHolofoil`,`1stEditionHolofoil`,`unlimitedHolofoil`]){if(t[e]?.market)return t[e].market;if(t[e]?.mid)return t[e].mid;if(t[e]?.low)return t[e].low}let n=e.cardmarket?.prices;return n?.trendPrice?n.trendPrice:n?.averageSellPrice?n.averageSellPrice:0}function x(e){let t=b(e);return{id:e.id,game:`pokemon`,name:e.name,set:e.set?.name||``,number:e.number||``,rarity:e.rarity||`Unknown`,image:e.images?.small||``,quantity:1,price:t,currency:e.cardmarket?.prices?.trendPrice&&!e.tcgplayer?.prices?`EUR`:`USD`,source:`pokemon-tcg-api`,sourceUrl:e.tcgplayer?.url||e.cardmarket?.url||`https://pokemontcg.io`,notes:e.legalities?.standard?`Standard: ${e.legalities.standard}`:``}}function S(e){p.activeTab=e,h(),H()}function C(e){let t=p.deck.cards.find(t=>t.id===e.id);t?t.quantity+=1:p.deck.cards.unshift({...e,quantity:1}),p.searchStatus=`Added ${e.name} to deck.`,h(),H()}function w(e){let t=p.watchlist.find(t=>t.id===e.id);t?t.quantity+=1:p.watchlist.unshift({...e,quantity:1}),p.searchStatus=`Added ${e.name} to watchlist.`,h(),H()}function T(e,t,n){let r=(e===`deck`?p.deck.cards:p.watchlist).find(e=>e.id===t);r&&(r.quantity=Math.max(1,Number(r.quantity||1)+n),h(),H())}function E(e,t){e===`deck`&&(p.deck.cards=p.deck.cards.filter(e=>e.id!==t)),e===`watchlist`&&(p.watchlist=p.watchlist.filter(e=>e.id!==t)),h(),H()}function D(e,t,n){let r=(e===`deck`?p.deck.cards:p.watchlist).find(e=>e.id===t);r&&(r.price=Number(n||0),r.source=r.source||`manual`,h(),H())}function O(e){e?.preventDefault();let t=document.querySelector(`#manual-card-form`);if(t)try{let e=i(Object.fromEntries(new FormData(t).entries()));p.watchlist.unshift(e),p.searchStatus=`Added manual card: ${e.name}.`,h(),H()}catch(e){p.searchStatus=`Manual entry failed: ${e.message}`,h(),H()}}async function k(e){e?.preventDefault();let t=p.searchQuery.trim();if(!t)return;p.searchStatus=`Searching PokémonTCG API...`,H();let n=new URL(`https://api.pokemontcg.io/v2/cards`);n.searchParams.set(`q`,`name:${t.replaceAll(`"`,``)}*`),n.searchParams.set(`pageSize`,`18`),n.searchParams.set(`orderBy`,`-set.releaseDate,name`),n.searchParams.set(`select`,`id,name,set,number,rarity,images,tcgplayer,cardmarket,legalities`);try{let e=await fetch(n);if(!e.ok)throw Error(`API returned ${e.status}`);let r=await e.json();p.pokemonResults=(r.data||[]).map(x),p.searchStatus=`Found ${p.pokemonResults.length} Pokémon cards for “${t}”.`}catch(e){p.searchStatus=`Search failed: ${e.message}. Try again or use manual Riftbound tracking.`}h(),H()}function A(){let e=new Blob([JSON.stringify(p,null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`tcg-vault-export-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(t)}function j(){let e=[`${p.deck.name} (${p.deck.game})`,`${y()} / ${p.deck.targetSize} cards`,`Estimated value: ${g(_())}`,``,...p.deck.cards.map(e=>`${e.quantity} ${e.name} — ${e.set} #${e.number} — ${g(e.price,e.currency)}`)];navigator.clipboard?.writeText(e.join(`
`)),p.searchStatus=`Deck text copied to clipboard.`,h(),H()}function M(e){try{let t=JSON.parse(e);if(!t.deck||!Array.isArray(t.watchlist))throw Error(`Missing deck/watchlist fields.`);p={...structuredClone(f),...t},h(),H()}catch(e){p.searchStatus=`Import failed: ${e.message}`,H()}}function N(){confirm(`Reset local TCG Vault data?`)&&(localStorage.removeItem(l),p=structuredClone(f),h(),H())}function P(e,t){let n=Number(e.price||0)*Number(e.quantity||1),r=e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:`<div class="fallback-card">${e.game===`riftbound`?`RIFT`:`TCG`}</div>`,i=e.sourceUrl?`<a href="${e.sourceUrl}" target="_blank" rel="noreferrer">${e.source}</a>`:e.source;return`
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
        <span>${g(e.price,e.currency)}</span>
        <strong>${g(n,e.currency)}</strong>
      </div>
    </article>
  `}function F(e){return`
    <article class="result-card">
      ${e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:``}
      <div>
        <h3>${e.name}</h3>
        <p>${e.set} • #${e.number} • ${e.rarity}</p>
        <p class="price">${g(e.price,e.currency)}</p>
        <div class="mini-actions">
          <button data-action="add-deck" data-id="${e.id}">Add to deck</button>
          <button class="ghost" data-action="add-watch" data-id="${e.id}">Watch</button>
        </div>
      </div>
    </article>
  `}function I(){let e=[...p.deck.cards,...p.watchlist].filter(e=>Number(e.price||0)*Number(e.quantity||1)>=100).sort((e,t)=>Number(t.price||0)*Number(t.quantity||1)-Number(e.price||0)*Number(e.quantity||1)).slice(0,5);return`
    <section class="hero">
      <div>
        <p class="eyebrow">Phone-first TCG tool</p>
        <h1>TCG Vault</h1>
        <p>Build decks. Track value. Keep Riftbound pricing honest with manual verification.</p>
      </div>
      <button data-tab="search">Search cards</button>
    </section>

    <section class="stats-grid">
      <div class="stat"><span>Deck cards</span><strong>${y()} / ${p.deck.targetSize}</strong></div>
      <div class="stat"><span>Deck value</span><strong>${g(_())}</strong></div>
      <div class="stat"><span>Watchlist value</span><strong>${g(v())}</strong></div>
      <div class="stat"><span>Saved cards</span><strong>${p.deck.cards.length+p.watchlist.length}</strong></div>
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
      ${e.length?e.map(e=>P(e,``)).join(``):`<p class="muted">No high-value cards yet.</p>`}
    </section>
  `}function L(){return`
    <section class="panel">
      <h2>Pokémon search</h2>
      <form id="search-form" class="search-form">
        <input id="pokemon-query" value="${p.searchQuery}" placeholder="charizard, pikachu, dragapult..." />
        <button type="submit">Search</button>
      </form>
      <p class="status">${p.searchStatus}</p>
      <div class="results-grid">
        ${p.pokemonResults.map(F).join(``)||`<p class="muted">Search results appear here.</p>`}
      </div>
    </section>
  `}function R(){return`
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Deck builder</h2>
          <p>${y()} / ${p.deck.targetSize} cards • ${g(_())}</p>
        </div>
        <button class="ghost" data-action="copy-deck">Copy deck text</button>
      </div>
      <label class="field">Deck name <input id="deck-name" value="${p.deck.name}" /></label>
      <div class="stack">
        ${p.deck.cards.map(e=>P(e,`deck`)).join(``)||`<p class="muted">Add cards from search or Riftbound tab.</p>`}
      </div>
    </section>
  `}function z(){return`
    <section class="panel warning-panel">
      <h2>Riftbound values</h2>
      <p>V1 uses seed prices and manual overrides. This avoids fragile scraping and fake precision.</p>
      <div class="source-list">
        ${u.map(e=>`<a href="${e.url}" target="_blank" rel="noreferrer">${e.label}</a>`).join(``)}
      </div>
    </section>
    <section class="panel">
      <h2>Manual card entry</h2>
      <p class="muted">Add Riftbound pulls or any Pokémon card when live search misses the exact version.</p>
      <form id="manual-card-form" class="manual-grid">
        <input name="name" placeholder="Card name" required />
        <input name="set" placeholder="Set" />
        <input name="number" placeholder="Number" />
        <input name="rarity" placeholder="Rarity" />
        <select name="game">
          <option value="riftbound" selected>Riftbound</option>
          <option value="pokemon">Pokémon</option>
        </select>
        <input name="quantity" type="number" min="1" step="1" value="1" placeholder="Qty" />
        <input name="price" type="number" min="0" step="0.01" placeholder="Price" />
        <select name="currency">
          <option value="USD" selected>USD</option>
          <option value="AUD">AUD</option>
          <option value="EUR">EUR</option>
        </select>
        <input name="sourceUrl" placeholder="Source URL optional" />
        <input name="notes" placeholder="Notes optional" />
        <button type="submit">Add to watchlist</button>
      </form>
      <p class="status">${p.searchStatus}</p>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Watchlist</h2>
          <p>${p.watchlist.length} lines • ${g(v())}</p>
        </div>
        <button data-action="seed-riftbound">Restore seeds</button>
      </div>
      <div class="stack">
        ${p.watchlist.map(e=>P(e,`watchlist`)).join(``)}
      </div>
    </section>
  `}function B(){let e=p.priceLookup||structuredClone(f.priceLookup),t=a(e.query),n=c(e);return`
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Price lookup</h2>
          <p>Fast external checks. No scraping. No fake prices.</p>
        </div>
        <span class="pill">affiliate-ready</span>
      </div>
      <form id="price-lookup-form" class="search-form stacked-form">
        <label class="field">Card or product
          <input id="price-query" value="${e.query}" placeholder="Charizard ex 054, Jinx Loose Cannon..." />
        </label>
        <label class="field">Game
          <select id="price-game">
            <option value="pokemon" ${e.game===`pokemon`?`selected`:``}>Pokémon</option>
            <option value="riftbound" ${e.game===`riftbound`?`selected`:``}>Riftbound</option>
          </select>
        </label>
        <label class="field">TCGplayer affiliate source / tag
          <input id="tcgplayer-affiliate" value="${e.tcgplayerAffiliate||``}" placeholder="leave blank until approved" />
        </label>
        <button type="submit">Update lookup links</button>
      </form>
      <p class="status">Lookup: ${t||`enter a card name`} • ${e.game===`riftbound`?`Riftbound`:`Pokémon`}</p>
      <div class="source-list price-links">
        ${n.map(e=>`
          <a href="${e.url}" target="_blank" rel="noreferrer">
            <strong>${e.label}</strong>
            <span>${e.note}</span>
          </a>
        `).join(``)||`<p class="muted">Enter a card name to generate lookup links.</p>`}
      </div>
    </section>
    <section class="panel warning-panel">
      <h2>Price rule</h2>
      <p>Use these links to verify manually. Riftbound pricing is still immature, so TCG Vault stores manual/seed prices until a reliable API source exists.</p>
    </section>
  `}function V(){return`
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
  `}function H(){let e=document.querySelector(`#app`),t=[[`dashboard`,`Dashboard`],[`search`,`Search`],[`deck`,`Deck`],[`riftbound`,`Riftbound`],[`price`,`Price`],[`export`,`Export`]],n={dashboard:I,search:L,deck:R,riftbound:z,price:B,export:V}[p.activeTab]();e.innerHTML=`
    <header class="topbar">
      <div>
        <strong>TCG Vault</strong>
        <span>Pokémon + Riftbound</span>
      </div>
      <span class="pill">PWA v0.1</span>
    </header>
    <nav class="tabs">
      ${t.map(([e,t])=>`<button class="${p.activeTab===e?`active`:``}" data-tab="${e}">${t}</button>`).join(``)}
    </nav>
    <main>${n}</main>
  `,U()}function U(){document.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>S(e.dataset.tab))),document.querySelector(`#search-form`)?.addEventListener(`submit`,k),document.querySelector(`#manual-card-form`)?.addEventListener(`submit`,O),document.querySelector(`#price-lookup-form`)?.addEventListener(`submit`,e=>{e.preventDefault(),p.priceLookup={query:document.querySelector(`#price-query`)?.value||``,game:document.querySelector(`#price-game`)?.value||`pokemon`,tcgplayerAffiliate:document.querySelector(`#tcgplayer-affiliate`)?.value||``},p.searchStatus=`Built lookup links for ${a(p.priceLookup.query)||`blank query`}.`,h(),H()}),document.querySelector(`#pokemon-query`)?.addEventListener(`input`,e=>{p.searchQuery=e.target.value,h()}),document.querySelector(`#deck-name`)?.addEventListener(`input`,e=>{p.deck.name=e.target.value,h()}),document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.dataset.action,r=e.dataset.id,i=e.dataset.collection,a=p.pokemonResults.find(e=>e.id===r);n===`add-deck`&&a&&C(a),n===`add-watch`&&a&&w(a),n===`inc`&&T(i,r,1),n===`dec`&&T(i,r,-1),n===`remove`&&E(i,r),n===`copy-deck`&&j(),n===`export-json`&&A(),n===`reset`&&N(),n===`seed-riftbound`&&(p.watchlist=structuredClone(d),h(),H()),n===`import-json`&&M(document.querySelector(`#import-json`)?.value||``),t.preventDefault()})}),document.querySelectorAll(`input[data-action="price"]`).forEach(e=>{e.addEventListener(`change`,()=>D(e.dataset.collection,e.dataset.id,e.value))})}`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(e=>console.warn(`Service worker registration failed`,e))}),H();