function getStoredData(data) {
    return JSON.parse(localStorage.getItem(data));
}

function storeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function filterClickedBeer(id) {
    return function(item) {
        return item.id == id;
    };
}

export {
    getStoredData,
    storeData,
    filterClickedBeer
};