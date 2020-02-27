import * as utils from './utils.js';
import {
    renderBeersOverview,
    renderDetailPage
}
    from './render.js';

// Create HTML template and render it
function beersOverview(data) {
    // Render beer overview page
    setTimeout(() => {
        renderBeersOverview(data);
    }, 1500);
}

// Create HTML template and render it
function detailPage(data, id) {
    // Filter the object which you clicked on
    data = data.beers.filter(utils.filterClickedBeer(id));

    // If not on detail page, toggle classes
    if (!document.querySelector('.related-beers__container')) {
        utils.hideAndShowElements();
    }

    // Always scroll to top
    window.scrollTo(0, 0);

    console.log('clicked beer: ', data);
    // Render detail page
    renderDetailPage(data);
}

export {
    beersOverview,
    detailPage,
};