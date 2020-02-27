function renderBeersOverview(data) {
    /* Templating */
    const template = document.querySelector('#overview-template').innerHTML;
    const html = Mustache.to_html(template, data);
    const box = document.querySelector('.overview__container');
    box.innerHTML = html; 
}

function renderDetailPage(data) {
    /* Templating */
    const template = document.querySelector('#details-template').innerHTML;
    const html = Mustache.to_html(template, data[0]);
    const box = document.querySelector('.details__container');
    box.innerHTML = html;
}

export {
    renderBeersOverview,
    renderDetailPage,
};