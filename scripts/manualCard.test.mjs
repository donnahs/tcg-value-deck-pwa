import assert from 'node:assert/strict';
import { createManualCard, parseManualCardForm } from '../src/manualCard.js';

const card = createManualCard({
  game: 'riftbound',
  name: 'Jinx - Loose Cannon',
  set: 'Origins',
  number: '301',
  rarity: 'Signature',
  price: '865.20',
  currency: 'USD',
  quantity: '2',
  sourceUrl: 'https://pricecharting.com/test',
  notes: 'verify before sale'
});

assert.equal(card.game, 'riftbound');
assert.equal(card.name, 'Jinx - Loose Cannon');
assert.equal(card.price, 865.2);
assert.equal(card.quantity, 2);
assert.ok(card.id.startsWith('manual-riftbound-jinx-loose-cannon-301-'));
assert.equal(card.source, 'manual');

assert.throws(() => createManualCard({ name: '' }), /Card name is required/);
assert.throws(() => createManualCard({ name: 'Bad price', price: '-1' }), /Price cannot be negative/);

const parsed = parseManualCardForm({
  name: '  Pikachu ex  ',
  price: '12.50',
  quantity: '',
  currency: '',
  game: ''
});

assert.equal(parsed.name, 'Pikachu ex');
assert.equal(parsed.price, 12.5);
assert.equal(parsed.quantity, 1);
assert.equal(parsed.currency, 'USD');
assert.equal(parsed.game, 'pokemon');

console.log('manual card tests passed');
