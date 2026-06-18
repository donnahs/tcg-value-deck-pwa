const base = process.env.SMOKE_URL || 'http://127.0.0.1:8190';

async function check(path, expected) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path} returned ${response.status}`);
  const text = await response.text();
  if (expected && !text.includes(expected)) throw new Error(`${path} missing ${expected}`);
  return text.length;
}

const results = [];
results.push(['/', await check('/', 'TCG Vault PWA')]);
results.push(['/manifest.webmanifest', await check('/manifest.webmanifest', 'TCG Vault')]);
results.push(['/sw.js', await check('/sw.js', 'tcg-vault-v1')]);
console.log(JSON.stringify({ ok: true, base, results }, null, 2));
