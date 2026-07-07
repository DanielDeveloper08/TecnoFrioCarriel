async function search(q) {
  const res = await fetch('https://api.pexels.com/v1/search?query=' + q + '&per_page=1', { headers: { 'Authorization': '563492ad6f91700001000001d8e13d9a3b684a0d9c8bc863a1372554' } });
  const data = await res.json();
  console.log(q, data.photos?.[0]?.src?.medium || 'not found');
}
await search('air+conditioner');
await search('kitchen+hood');
await search('water+heater');
