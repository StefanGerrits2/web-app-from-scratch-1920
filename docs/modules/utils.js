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

document.querySelector('.loadMore').addEventListener('click', () => {
    const loadingAnimation = document.querySelector('.loading-state2');

    loadingAnimation.classList.toggle('loading-animation');

    setTimeout(() => {
        loadingAnimation.classList.toggle('loading-animation');
    }, 1500);
});

export {
    filterClickedBeer,
    hideAndShowElements,
};