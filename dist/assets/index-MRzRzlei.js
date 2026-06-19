(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return String(e||``).trim().replace(/[:|]/g,` `).replace(/\s+/g,` `)}function t(t){return encodeURIComponent(e(t))}function n(t,n){let r=e(n);if(!r)return t;let i=new URL(t);return i.searchParams.set(`utm_campaign`,`affiliate`),i.searchParams.set(`utm_medium`,`tcgvault`),i.searchParams.set(`utm_source`,r),i.toString()}function r({query:r,game:i=`pokemon`,tcgplayerAffiliate:a=``}={}){let o=e(r),s=t(o),c=i===`riftbound`,l=[];return o?c?(l.push({label:`Riftbound.gg prices`,note:`Riftbound-specific price page. Verify before buying/selling.`,url:`https://riftbound.gg/prices?search=${s}`}),l.push({label:`Magical Meta`,note:`Riftbound market/meta signal.`,url:`https://magicalmeta.ink/riftbound?search=${s}`}),l.push({label:`TCGplayer Riftbound`,note:`TCGplayer Riftbound category search/price guide.`,url:n(`https://www.tcgplayer.com/search/all/product?q=${s}+Riftbound`,a)}),l.push({label:`PriceCharting Riftbound`,note:`Origins sealed/singles price reference where available.`,url:`https://www.pricecharting.com/search-products?q=${s}+riftbound&type=prices`}),l.push({label:`eBay Riftbound search`,note:`Check real asking prices. Use sold filter manually.`,url:`https://www.ebay.com/sch/i.html?_nkw=${s}+riftbound+card`}),l):(l.push({label:`PokémonTCG API`,note:`Live card API JSON — useful for exact card IDs and market fields.`,url:`https://api.pokemontcg.io/v2/cards?q=name:${s}*&pageSize=10&select=id,name,set,number,rarity,tcgplayer,cardmarket`}),l.push({label:`TCGplayer search`,note:`Market listings. Add your affiliate source later if approved.`,url:n(`https://www.tcgplayer.com/search/pokemon/product?q=${s}`,a)}),l.push({label:`eBay search`,note:`Good reality check for current asking prices.`,url:`https://www.ebay.com/sch/i.html?_nkw=${s}+pokemon+card`}),l.push({label:`PriceCharting search`,note:`Useful for graded/raw historical price checks.`,url:`https://www.pricecharting.com/search-products?q=${s}&type=prices`}),l):l}var i=`tcg-vault-state-v1`,a=[{label:`PriceCharting Origins`,url:`https://www.pricecharting.com/console/riftbound-origins`},{label:`TCGplayer Riftbound`,url:`https://www.tcgplayer.com/categories/trading-and-collectible-card-games/riftbound-league-of-legends-trading-card-game/price-guides`},{label:`Magical Meta Market Watch`,url:`https://magicalmeta.ink/riftbound`},{label:`Riftbound.gg Prices`,url:`https://riftbound.gg/prices`}],o=[{id:`rift-ogn-303-signature`,game:`riftbound`,name:`Ahri - Nine-Tailed Fox [Signature]`,set:`Origins`,number:`303`,rarity:`Signature`,image:``,quantity:1,price:2514.16,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-299-signature`,game:`riftbound`,name:`Kai'Sa - Daughter of the Void [Signature]`,set:`Origins`,number:`299`,rarity:`Signature`,image:``,quantity:1,price:2405.84,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-301-signature`,game:`riftbound`,name:`Jinx - Loose Cannon [Signature]`,set:`Origins`,number:`301`,rarity:`Signature`,image:``,quantity:1,price:865.2,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`High-value signature seed. Verify before sale.`},{id:`rift-ogn-308`,game:`riftbound`,name:`Viktor - Herald of the Arcane`,set:`Origins`,number:`308`,rarity:`Champion`,image:``,quantity:1,price:79.79,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Non-signature champion seed.`},{id:`rift-ogn-booster-display`,game:`riftbound`,name:`Origins Booster Display`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:180.36,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`},{id:`rift-ogn-proving-grounds`,game:`riftbound`,name:`Proving Grounds Box Set`,set:`Origins`,number:`sealed`,rarity:`Sealed`,image:``,quantity:1,price:62.58,currency:`USD`,source:`pricecharting`,sourceUrl:`https://www.pricecharting.com/console/riftbound-origins`,notes:`Sealed product seed.`}],s={activeTab:`dashboard`,searchQuery:`charizard`,searchStatus:`Ready. Search Pokémon cards or add Riftbound seeds.`,priceLookup:{query:`Charizard ex 054`,game:`pokemon`,tcgplayerAffiliate:``},pokemonResults:[],deck:{id:crypto.randomUUID(),name:`Weekend Test Deck`,game:`pokemon`,targetSize:60,cards:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},watchlist:o,lastUpdated:new Date().toISOString()},c=l();function l(){try{let e=localStorage.getItem(i);if(!e)return structuredClone(s);let t=JSON.parse(e);return{...structuredClone(s),...t,priceLookup:{...structuredClone(s).priceLookup,...t.priceLookup||{}},deck:{...structuredClone(s).deck,...t.deck||{}},watchlist:Array.isArray(t.watchlist)&&t.watchlist.length?t.watchlist:o}}catch(e){return console.warn(`Failed to load state, using default.`,e),structuredClone(s)}}function u(){c.lastUpdated=new Date().toISOString(),c.deck.updatedAt=c.lastUpdated,localStorage.setItem(i,JSON.stringify(c))}function d(e,t=`USD`){let n=Number(e||0);return new Intl.NumberFormat(`en-AU`,{style:`currency`,currency:t,maximumFractionDigits:n>100?0:2}).format(n)}function f(){return c.deck.cards.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function p(){return c.watchlist.reduce((e,t)=>e+Number(t.price||0)*Number(t.quantity||1),0)}function m(){return c.deck.cards.reduce((e,t)=>e+Number(t.quantity||1),0)}function h(e){let t=e.tcgplayer?.prices||{};for(let e of[`holofoil`,`normal`,`reverseHolofoil`,`1stEditionHolofoil`,`unlimitedHolofoil`]){if(t[e]?.market)return t[e].market;if(t[e]?.mid)return t[e].mid;if(t[e]?.low)return t[e].low}let n=e.cardmarket?.prices;return n?.trendPrice?n.trendPrice:n?.averageSellPrice?n.averageSellPrice:0}function g(e){let t=h(e);return{id:e.id,game:`pokemon`,name:e.name,set:e.set?.name||``,number:e.number||``,rarity:e.rarity||`Unknown`,image:e.images?.small||``,quantity:1,price:t,currency:e.cardmarket?.prices?.trendPrice&&!e.tcgplayer?.prices?`EUR`:`USD`,source:`pokemon-tcg-api`,sourceUrl:e.tcgplayer?.url||e.cardmarket?.url||`https://pokemontcg.io`,notes:e.legalities?.standard?`Standard: ${e.legalities.standard}`:``}}function _(e){c.activeTab=e,u(),I()}function v(e){let t=c.deck.cards.find(t=>t.id===e.id);t?t.quantity+=1:c.deck.cards.unshift({...e,quantity:1}),c.searchStatus=`Added ${e.name} to deck.`,u(),I()}function y(e){let t=c.watchlist.find(t=>t.id===e.id);t?t.quantity+=1:c.watchlist.unshift({...e,quantity:1}),c.searchStatus=`Added ${e.name} to watchlist.`,u(),I()}function b(e,t,n){let r=(e===`deck`?c.deck.cards:c.watchlist).find(e=>e.id===t);r&&(r.quantity=Math.max(1,Number(r.quantity||1)+n),u(),I())}function x(e,t){e===`deck`&&(c.deck.cards=c.deck.cards.filter(e=>e.id!==t)),e===`watchlist`&&(c.watchlist=c.watchlist.filter(e=>e.id!==t)),u(),I()}function S(e,t,n){let r=(e===`deck`?c.deck.cards:c.watchlist).find(e=>e.id===t);r&&(r.price=Number(n||0),r.source=r.source||`manual`,u(),I())}async function C(e){e?.preventDefault();let t=c.searchQuery.trim();if(!t)return;c.searchStatus=`Searching PokémonTCG API...`,I();let n=new URL(`https://api.pokemontcg.io/v2/cards`);n.searchParams.set(`q`,`name:${t.replaceAll(`"`,``)}*`),n.searchParams.set(`pageSize`,`18`),n.searchParams.set(`orderBy`,`-set.releaseDate,name`),n.searchParams.set(`select`,`id,name,set,number,rarity,images,tcgplayer,cardmarket,legalities`);try{let e=await fetch(n);if(!e.ok)throw Error(`API returned ${e.status}`);let r=await e.json();c.pokemonResults=(r.data||[]).map(g),c.searchStatus=`Found ${c.pokemonResults.length} Pokémon cards for “${t}”.`}catch(e){c.searchStatus=`Search failed: ${e.message}. Try again or use manual Riftbound tracking.`}u(),I()}function w(){let e=new Blob([JSON.stringify(c,null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`tcg-vault-export-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(t)}function T(){let e=[`${c.deck.name} (${c.deck.game})`,`${m()} / ${c.deck.targetSize} cards`,`Estimated value: ${d(f())}`,``,...c.deck.cards.map(e=>`${e.quantity} ${e.name} — ${e.set} #${e.number} — ${d(e.price,e.currency)}`)];navigator.clipboard?.writeText(e.join(`
`)),c.searchStatus=`Deck text copied to clipboard.`,u(),I()}function E(e){try{let t=JSON.parse(e);if(!t.deck||!Array.isArray(t.watchlist))throw Error(`Missing deck/watchlist fields.`);c={...structuredClone(s),...t},u(),I()}catch(e){c.searchStatus=`Import failed: ${e.message}`,I()}}function D(){confirm(`Reset local TCG Vault data?`)&&(localStorage.removeItem(i),c=structuredClone(s),u(),I())}function O(e,t){let n=Number(e.price||0)*Number(e.quantity||1),r=e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:`<div class="fallback-card">${e.game===`riftbound`?`RIFT`:`TCG`}</div>`,i=e.sourceUrl?`<a href="${e.sourceUrl}" target="_blank" rel="noreferrer">${e.source}</a>`:e.source;return`
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
        <span>${d(e.price,e.currency)}</span>
        <strong>${d(n,e.currency)}</strong>
      </div>
    </article>
  `}function k(e){return`
    <article class="result-card">
      ${e.image?`<img src="${e.image}" alt="${e.name}" loading="lazy" />`:``}
      <div>
        <h3>${e.name}</h3>
        <p>${e.set} • #${e.number} • ${e.rarity}</p>
        <p class="price">${d(e.price,e.currency)}</p>
        <div class="mini-actions">
          <button data-action="add-deck" data-id="${e.id}">Add to deck</button>
          <button class="ghost" data-action="add-watch" data-id="${e.id}">Watch</button>
        </div>
      </div>
    </article>
  `}function A(){let e=[...c.deck.cards,...c.watchlist].filter(e=>Number(e.price||0)*Number(e.quantity||1)>=100).sort((e,t)=>Number(t.price||0)*Number(t.quantity||1)-Number(e.price||0)*Number(e.quantity||1)).slice(0,5);return`
    <section class="hero">
      <div>
        <p class="eyebrow">Phone-first TCG tool</p>
        <h1>TCG Vault</h1>
        <p>Build decks. Track value. Keep Riftbound pricing honest with manual verification.</p>
      </div>
      <button data-tab="search">Search cards</button>
    </section>

    <section class="stats-grid">
      <div class="stat"><span>Deck cards</span><strong>${m()} / ${c.deck.targetSize}</strong></div>
      <div class="stat"><span>Deck value</span><strong>${d(f())}</strong></div>
      <div class="stat"><span>Watchlist value</span><strong>${d(p())}</strong></div>
      <div class="stat"><span>Saved cards</span><strong>${c.deck.cards.length+c.watchlist.length}</strong></div>
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
      ${e.length?e.map(e=>O(e,``)).join(``):`<p class="muted">No high-value cards yet.</p>`}
    </section>
  `}function j(){return`
    <section class="panel">
      <h2>Pokémon search</h2>
      <form id="search-form" class="search-form">
        <input id="pokemon-query" value="${c.searchQuery}" placeholder="charizard, pikachu, dragapult..." />
        <button type="submit">Search</button>
      </form>
      <p class="status">${c.searchStatus}</p>
      <div class="results-grid">
        ${c.pokemonResults.map(k).join(``)||`<p class="muted">Search results appear here.</p>`}
      </div>
    </section>
  `}function M(){return`
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Deck builder</h2>
          <p>${m()} / ${c.deck.targetSize} cards • ${d(f())}</p>
        </div>
        <button class="ghost" data-action="copy-deck">Copy deck text</button>
      </div>
      <label class="field">Deck name <input id="deck-name" value="${c.deck.name}" /></label>
      <div class="stack">
        ${c.deck.cards.map(e=>O(e,`deck`)).join(``)||`<p class="muted">Add cards from search or Riftbound tab.</p>`}
      </div>
    </section>
  `}function N(){return`
    <section class="panel warning-panel">
      <h2>Riftbound values</h2>
      <p>V1 uses seed prices and manual overrides. This avoids fragile scraping and fake precision.</p>
      <div class="source-list">
        ${a.map(e=>`<a href="${e.url}" target="_blank" rel="noreferrer">${e.label}</a>`).join(``)}
      </div>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2>Watchlist</h2>
          <p>${c.watchlist.length} lines • ${d(p())}</p>
        </div>
        <button data-action="seed-riftbound">Restore seeds</button>
      </div>
      <div class="stack">
        ${c.watchlist.map(e=>O(e,`watchlist`)).join(``)}
      </div>
    </section>
  `}function P(){let t=c.priceLookup||structuredClone(s.priceLookup),n=e(t.query),i=r(t);return`
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
          <input id="price-query" value="${t.query}" placeholder="Charizard ex 054, Jinx Loose Cannon..." />
        </label>
        <label class="field">Game
          <select id="price-game">
            <option value="pokemon" ${t.game===`pokemon`?`selected`:``}>Pokémon</option>
            <option value="riftbound" ${t.game===`riftbound`?`selected`:``}>Riftbound</option>
          </select>
        </label>
        <label class="field">TCGplayer affiliate source / tag
          <input id="tcgplayer-affiliate" value="${t.tcgplayerAffiliate||``}" placeholder="leave blank until approved" />
        </label>
        <button type="submit">Update lookup links</button>
      </form>
      <p class="status">Lookup: ${n||`enter a card name`} • ${t.game===`riftbound`?`Riftbound`:`Pokémon`}</p>
      <div class="source-list price-links">
        ${i.map(e=>`
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
  `}function F(){return`
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
  `}function I(){let e=document.querySelector(`#app`),t=[[`dashboard`,`Dashboard`],[`search`,`Search`],[`deck`,`Deck`],[`riftbound`,`Riftbound`],[`price`,`Price`],[`export`,`Export`]],n={dashboard:A,search:j,deck:M,riftbound:N,price:P,export:F}[c.activeTab]();e.innerHTML=`
    <header class="topbar">
      <div>
        <strong>TCG Vault</strong>
        <span>Pokémon + Riftbound</span>
      </div>
      <span class="pill">PWA v0.1</span>
    </header>
    <nav class="tabs">
      ${t.map(([e,t])=>`<button class="${c.activeTab===e?`active`:``}" data-tab="${e}">${t}</button>`).join(``)}
    </nav>
    <main>${n}</main>
  `,L()}function L(){document.querySelectorAll(`[data-tab]`).forEach(e=>e.addEventListener(`click`,()=>_(e.dataset.tab))),document.querySelector(`#search-form`)?.addEventListener(`submit`,C),document.querySelector(`#price-lookup-form`)?.addEventListener(`submit`,t=>{t.preventDefault(),c.priceLookup={query:document.querySelector(`#price-query`)?.value||``,game:document.querySelector(`#price-game`)?.value||`pokemon`,tcgplayerAffiliate:document.querySelector(`#tcgplayer-affiliate`)?.value||``},c.searchStatus=`Built lookup links for ${e(c.priceLookup.query)||`blank query`}.`,u(),I()}),document.querySelector(`#pokemon-query`)?.addEventListener(`input`,e=>{c.searchQuery=e.target.value,u()}),document.querySelector(`#deck-name`)?.addEventListener(`input`,e=>{c.deck.name=e.target.value,u()}),document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.dataset.action,r=e.dataset.id,i=e.dataset.collection,a=c.pokemonResults.find(e=>e.id===r);n===`add-deck`&&a&&v(a),n===`add-watch`&&a&&y(a),n===`inc`&&b(i,r,1),n===`dec`&&b(i,r,-1),n===`remove`&&x(i,r),n===`copy-deck`&&T(),n===`export-json`&&w(),n===`reset`&&D(),n===`seed-riftbound`&&(c.watchlist=structuredClone(o),u(),I()),n===`import-json`&&E(document.querySelector(`#import-json`)?.value||``),t.preventDefault()})}),document.querySelectorAll(`input[data-action="price"]`).forEach(e=>{e.addEventListener(`change`,()=>S(e.dataset.collection,e.dataset.id,e.value))})}`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(e=>console.warn(`Service worker registration failed`,e))}),I();