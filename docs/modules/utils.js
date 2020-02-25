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

function hideAndShowElements() {
    /* Hide elements */
    document.querySelector('.overview__container').classList.toggle('hide');
    document.querySelector('.pagination__container').classList.toggle('hide');
    document.querySelector('header').classList.toggle('hide');
        
    /* Show elements */
    document.querySelector('.details__container').classList.toggle('show');
    document.querySelector('.details__container').classList.toggle('show-details');
}

export {
    getStoredData,
    storeData,
    filterClickedBeer,
    hideAndShowElements,
};