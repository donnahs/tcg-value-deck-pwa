import assert from 'node:assert/strict';
import {
  buildPriceLookupLinks,
  normalizeLookupQuery,
  applyTcgplayerAffiliate
} from '../src/priceLookup.js';

assert.equal(normalizeLookupQuery('  Charizard ex #054  '), 'Charizard ex #054');
assert.equal(normalizeLookupQuery('Jinx: Loose Cannon'), 'Jinx Loose Cannon');

const pokemonLinks = buildPriceLookupLinks({ query: 'Charizard ex 054', game: 'pokemon' });
assert.ok(pokemonLinks.some((link) => link.label === 'PokémonTCG API' && link.url.includes('api.pokemontcg.io/v2/cards')));
assert.ok(pokemonLinks.some((link) => link.label === 'TCGplayer search' && link.url.includes('tcgplayer.com/search')));
assert.ok(pokemonLinks.some((link) => link.label === 'eBay search' && link.url.includes('ebay.com/sch/i.html')));
assert.ok(pokemonLinks.some((link) => link.label === 'PriceCharting search' && link.url.includes('pricecharting.com/search-products')));

const riftboundLinks = buildPriceLookupLinks({ query: 'Jinx Loose Cannon', game: 'riftbound' });
assert.ok(riftboundLinks.some((link) => link.label === 'Riftbound.gg prices' && link.url.includes('riftbound.gg/prices')));
assert.ok(riftboundLinks.some((link) => link.label === 'Magical Meta' && link.url.includes('magicalmeta.ink/riftbound')));
assert.ok(riftboundLinks.some((link) => link.label === 'TCGplayer Riftbound' && link.url.includes('Riftbound')));

const affiliated = applyTcgplayerAffiliate('https://www.tcgplayer.com/search/pokemon/product?q=Charizard', 'matttest');
assert.equal(affiliated, 'https://www.tcgplayer.com/search/pokemon/product?q=Charizard&utm_campaign=affiliate&utm_medium=tcgvault&utm_source=matttest');

console.log('price lookup tests passed');
