// Create HTML template and render it
export default function renderDetailPage(data) {

    /* Hide elements */
    document.querySelector('.overview__container').classList.toggle('hide');
    document.querySelector('.pagination__container').classList.toggle('hide');
    document.querySelector('header').classList.toggle('hide');

    /* Show elements */
    document.querySelector('.details__container').classList.toggle('show');
    document.querySelector('.details__container').classList.toggle('show-details');

    // const template = document.querySelector('#details-template').innerHTML;
    // const html = Mustache.to_html(template, data);
    // const box = document.querySelector('.details__container');
    // box.innerHTML = html;

    /* Templating */
    const template = document.querySelector('#details-template').innerHTML;
    const container = document.querySelector('.details__container');
    container.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}