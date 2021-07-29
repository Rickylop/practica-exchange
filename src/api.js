const url = 'https://api.coincap.io/v2';

function getAssets() {
    return fetch(`${url}/assets?limit=10`)
        .then(res => res.json())
        .then(res => res.data)
}

function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`)
        .then(res => res.json())
        .then(res => res.data)
}

function getAssetHistory(coin) {
    const now = new Date()
    const end = now.getTime()
    now.setTime(now.getTime() - 1)
    const start = now.getTime()
    console.log('ruta: ', `${url}/${coin}/history?interval=h1&start=${start}&end=${end}`);
    return fetch(`${url}/assets/${coin}/history?interval=d1&start=1624752000000&end=1627171200000`)
        .then(res => res.json())
        .then(res => res.data)
}

function getMarkets(coin) {
    console.log('Markets:: ', `${url}/assets/${coin}/markets?limit=5`);
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
        .then(res => res.json())
        .then(res => res.data)
}

function getExchange(id) {
    console.log('exch: ', `${url}/exchanges/${id}`);
    return fetch(`${url}/exchanges/${id}`)
        .then(res => res.json())
        .then(res => res.data)
}

export default { getAssets, getAsset, getAssetHistory, getMarkets, getExchange }

