const url = 'https://api.coincap.io/v2';

function getAssets() {
    return fetch('https://api.coincap.io/v2/assets?limit=10')
        .then(res => res.json())
        .then(res => res.data)
}

export default { getAssets }

