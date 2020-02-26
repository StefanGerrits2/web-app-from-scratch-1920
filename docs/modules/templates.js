import * as utils from '../modules/utils.js';

// Create HTML template and render it
function renderOverviewCard(data) {
    /* Templating */
    const template = document.querySelector('#overview-template').innerHTML;
    const html = Mustache.to_html(template, data);
    const box = document.querySelector('.overview__container');
    box.innerHTML = html;
}

// Create HTML template and render it
function renderDetailCard(data, id) {
    // Filter the object which you clicked on
    data = data.beers.filter(utils.filterClickedBeer(id));

    // If not on detail page, toggle classes
    if (!document.querySelector('.related-beers__container')) {
        utils.hideAndShowElements();
    }

    // Always scroll to top
    window.scrollTo(0, 0);

    console.log('clicked beer: ', data);

    /* Templating */
    const template = document.querySelector('#details-template').innerHTML;
    const html = Mustache.to_html(template, data[0]);
    const box = document.querySelector('.details__container');
    box.innerHTML = html;
}

export {
    renderOverviewCard,
    renderDetailCard,
};