export function normalizeLookupQuery(value) {
  return String(value || '')
    .trim()
    .replace(/[:|]/g, ' ')
    .replace(/\s+/g, ' ');
}

function encoded(query) {
  return encodeURIComponent(normalizeLookupQuery(query));
}

export function applyTcgplayerAffiliate(url, affiliateSource) {
  const source = normalizeLookupQuery(affiliateSource);
  if (!source) return url;
  const parsed = new URL(url);
  parsed.searchParams.set('utm_campaign', 'affiliate');
  parsed.searchParams.set('utm_medium', 'tcgvault');
  parsed.searchParams.set('utm_source', source);
  return parsed.toString();
}

export function buildPriceLookupLinks({ query, game = 'pokemon', tcgplayerAffiliate = '' } = {}) {
  const clean = normalizeLookupQuery(query);
  const q = encoded(clean);
  const isRiftbound = game === 'riftbound';
  const links = [];

  if (!clean) return links;

  if (!isRiftbound) {
    links.push({
      label: 'PokémonTCG API',
      note: 'Live card API JSON — useful for exact card IDs and market fields.',
      url: `https://api.pokemontcg.io/v2/cards?q=name:${q}*&pageSize=10&select=id,name,set,number,rarity,tcgplayer,cardmarket`
    });
    links.push({
      label: 'TCGplayer search',
      note: 'Market listings. Add your affiliate source later if approved.',
      url: applyTcgplayerAffiliate(`https://www.tcgplayer.com/search/pokemon/product?q=${q}`, tcgplayerAffiliate)
    });
    links.push({
      label: 'eBay search',
      note: 'Good reality check for current asking prices.',
      url: `https://www.ebay.com/sch/i.html?_nkw=${q}+pokemon+card`
    });
    links.push({
      label: 'PriceCharting search',
      note: 'Useful for graded/raw historical price checks.',
      url: `https://www.pricecharting.com/search-products?q=${q}&type=prices`
    });
    return links;
  }

  links.push({
    label: 'Riftbound.gg prices',
    note: 'Riftbound-specific price page. Verify before buying/selling.',
    url: `https://riftbound.gg/prices?search=${q}`
  });
  links.push({
    label: 'Magical Meta',
    note: 'Riftbound market/meta signal.',
    url: `https://magicalmeta.ink/riftbound?search=${q}`
  });
  links.push({
    label: 'TCGplayer Riftbound',
    note: 'TCGplayer Riftbound category search/price guide.',
    url: applyTcgplayerAffiliate(`https://www.tcgplayer.com/search/all/product?q=${q}+Riftbound`, tcgplayerAffiliate)
  });
  links.push({
    label: 'PriceCharting Riftbound',
    note: 'Origins sealed/singles price reference where available.',
    url: `https://www.pricecharting.com/search-products?q=${q}+riftbound&type=prices`
  });
  links.push({
    label: 'eBay Riftbound search',
    note: 'Check real asking prices. Use sold filter manually.',
    url: `https://www.ebay.com/sch/i.html?_nkw=${q}+riftbound+card`
  });
  return links;
}
