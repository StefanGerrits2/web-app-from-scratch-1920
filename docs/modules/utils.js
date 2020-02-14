function getStoredData(data) {
    return JSON.parse(localStorage.getItem(data))
}

function storeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export {
    getStoredData,
    storeData,
}