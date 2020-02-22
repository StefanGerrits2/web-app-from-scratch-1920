// Create HTML template and render it
function renderOverviewCard(data) {
    /* Templating */
    const template = document.querySelector('#overview-template').innerHTML;
    const container = document.querySelector('.overview__container');
    container.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}

// Create HTML template and render it
function renderDetailCard(data) {
    /* Templating */
    const template = document.querySelector('#details-template').innerHTML;
    const container = document.querySelector('.details__container');
    container.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));

    /* Hide elements */
    document.querySelector('.overview__container').classList.toggle('hide');
    document.querySelector('.pagination__container').classList.toggle('hide');
    document.querySelector('header').classList.toggle('hide');
    
    /* Show elements */
    document.querySelector('.details__container').classList.toggle('show');
    document.querySelector('.details__container').classList.toggle('show-details');
}

export {
    renderOverviewCard,
    renderDetailCard,
};