function clean(value) {
  return String(value || '').trim().replace(/\s+/g, ' ');
}

function slug(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'card';
}

function numberOrDefault(value, fallback) {
  const cleanValue = clean(value);
  if (!cleanValue) return fallback;
  const number = Number(cleanValue);
  if (!Number.isFinite(number)) return fallback;
  return number;
}

export function parseManualCardForm(form = {}) {
  return {
    game: clean(form.game) || 'pokemon',
    name: clean(form.name),
    set: clean(form.set),
    number: clean(form.number),
    rarity: clean(form.rarity) || 'Unknown',
    price: numberOrDefault(form.price, 0),
    currency: (clean(form.currency) || 'USD').toUpperCase(),
    quantity: Math.max(1, Math.trunc(numberOrDefault(form.quantity, 1))),
    sourceUrl: clean(form.sourceUrl),
    notes: clean(form.notes)
  };
}

export function createManualCard(form = {}) {
  const parsed = parseManualCardForm(form);
  if (!parsed.name) throw new Error('Card name is required');
  if (parsed.price < 0) throw new Error('Price cannot be negative');
  const suffix = Date.now().toString(36);
  return {
    id: `manual-${slug(parsed.game)}-${slug(parsed.name)}-${slug(parsed.number)}-${suffix}`,
    game: parsed.game,
    name: parsed.name,
    set: parsed.set,
    number: parsed.number,
    rarity: parsed.rarity,
    image: '',
    quantity: parsed.quantity,
    price: parsed.price,
    currency: parsed.currency,
    source: 'manual',
    sourceUrl: parsed.sourceUrl,
    notes: parsed.notes
  };
}
